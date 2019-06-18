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

  componentDidUpdate() {
    this._fetchScholarshipContracts()
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

// export default withDrizzle(App)

// const App = async ({ drizzle }) => {
//
//   const _addScholarshipToDrizzle = address => {
//     // create new web3 Contract instance
//     const web3Contract = new drizzle.web3.eth.Contract(scholarshipABI, address)
//     // add conrtact to drizzle store
//     const contractConfig = {
//       contractName: contractUtil.generateName({ contractName: "Scholarship", address }),
//       web3Contract
//     }
//     drizzle.addContract(contractConfig)
//   }
//
//   // fetch scholarship addresses from ScholarshipManager
//   const contract = drizzle.contracts.ScholarshipManager
//   const scholarshipAddresses = await contract.methods.getScholarshipAddresses().call()
//   scholarshipAddresses.forEach(_addScholarshipToDrizzle)
//
//   // render
//   return <ScholarshipList />
// }

// const _renderLoading = () => {
//   return "loading..."
// }
//
// const _renderLoaded = () => {
//   const scholarshipAddresses = useCacheCall("ScholarshipManager", "getScholarshipAddresses")
//   return <ScholarshipList scholarshipAddresses={scholarshipAddresses} />
//
//   // return "not loading..."
//   // return <ScholarshipList />
// }
//
// const App = props => {
//
//   return props.initialized ? _renderLoaded() : _renderLoading()
// }

const AppWrapper = props => {
  const initialized = drizzleReactHooks.useDrizzleState(select.drizzleStatus)
  const { drizzle } = drizzleReactHooks.useDrizzle()
  // const scholarshipAddresses = useCacheCall("ScholarshipManager", "getScholarshipAddresses")
  // return <App initialized={initialized} scholarshipAddresses={scholarshipAddresses} />
  return <App initialized={initialized} drizzle={drizzle} />
}

export default AppWrapper
