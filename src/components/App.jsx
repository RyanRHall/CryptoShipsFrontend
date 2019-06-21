// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
// Source Files
import style from "./app.scss"
import ScholarshipList from "./scholarship_list/ScholarshipList"
import withDrizzle from "../hoc/withDrizzle"
import { abi as scholarshipABI } from "@root/build/contracts/Scholarship.json"
import { contractUtil } from "@src/utils"
import * as select from "@src/state/selectors"

class App extends React.Component {

  async componentDidUpdate() {
    await this._setDefaultAccount()
    this._fetchScholarshipContracts()
  }

  async _setDefaultAccount() {
    const { drizzle } = this.props
    const accounts = await drizzle.web3.eth.getAccounts()
    drizzle.web3.eth.defaultAccount = accounts[0]
  }

  async _fetchScholarshipContracts() {
    const contract = this.props.drizzle.contracts.ScholarshipManager
    const scholarshipAddresses = await contract.methods.getScholarshipAddresses().call()
    scholarshipAddresses.forEach(this._addScholarship.bind(this))
  }

  _addScholarship(address) {
    const { drizzle } = this.props
    // create new web3 Contract instance
    const web3Contract = new drizzle.web3.eth.Contract(scholarshipABI, address)
    web3Contract.options.from = drizzle.web3.eth.defaultAccount
    // add conrtact to drizzle store
    const contractName = contractUtil.generateName({ contractName: "Scholarship", address })
    drizzle.addContract({ contractName, web3Contract })
  }

  _renderLoading() {
    return "loading..."
  }

  _renderLoaded() {
    return <ScholarshipList />
  }

  render() {
    return this.props.initialized ? this._renderLoaded() : this._renderLoading()
  }
}


const AppWrapper = props => {
  const initialized = drizzleReactHooks.useDrizzleState(select.drizzleStatus)
  const { drizzle } = drizzleReactHooks.useDrizzle()
  return <App initialized={initialized} drizzle={drizzle} />
}

export default AppWrapper
