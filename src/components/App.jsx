// Libraries
import React from "react"
// Source Files
import style from "./app.scss"
import ScholarshipListWrapper from "./scholarship_list/ScholarshipListWrapper"
import withDrizzle from "../hoc/withDrizzle"
import { abi as scholarshipABI } from "@root/build/contracts/Scholarship.json"
import { contractUtil } from "@src/utils"

class App extends React.Component {

  constructor(props) {
    super(props)
    this._fetchScholarshipContracts()
  }

  async _fetchScholarshipContracts() {
    const { drizzle } = this.props
    const contract = drizzle.contracts.ScholarshipManager
    const scholarshipAddresses = await contract.methods.getScholarshipAddresses().call()
    scholarshipAddresses.forEach(address => this._addScholarship(address))
  }

  _addScholarship(address) {
    const { drizzle } = this.props
    window.drizzle = drizzle
    // create new web3 Contract instance
    const web3Contract = new drizzle.web3.eth.Contract(scholarshipABI, address)
    // add conrtact to drizzle store
    const contractConfig = {
      contractName: contractUtil.generateName({ contractName: "Scholarship", address }),
      web3Contract
    }
    drizzle.addContract(contractConfig)
  }

  render() {
    return <ScholarshipListWrapper />
  }
}

export default withDrizzle(App)
