import React from "react";
import style from "./app.scss";
import ScholarshipListWrapper from "./scholarship_list/ScholarshipListWrapper.jsx";
import withDrizzle from "../hoc/withDrizzle.jsx";
import { abi as scholarshipABI } from "@root/build/contracts/Scholarship.json";

class App extends React.Component {

  constructor(props) {
    super(props);
    this._fetchScholarshipContracts()
  }

  async _fetchScholarshipContracts() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.ScholarshipManager;
    const scholarshipAddresses = await contract.methods.getScholarshipAddresses().call();
    scholarshipAddresses.forEach(address => this._addScholarship(address));
  }

  _addScholarship(contractAddress) {
    const { drizzle } = this.props;
    window.drizzle = drizzle;
    // create new web3 Contract instance
    const web3Contract = new drizzle.web3.eth.Contract(scholarshipABI, contractAddress);
    // add conrtact to drizzle store
    const contractConfig = {
      contractName: contractAddress,
      web3Contract
    };
    drizzle.addContract(contractConfig);
  }

  render() {
    return <ScholarshipListWrapper />
  }
}

export default withDrizzle(App);
