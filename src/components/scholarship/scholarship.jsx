// Libraries
import React from "react";
import { DrizzleContext } from "drizzle-react";
// Source Files
import withDrizzle from "@src/hoc/withDrizzle.jsx";
import { withWeb3_1x } from "@src/hoc/withWeb3_1x.jsx";
import { contractName, abi as scholarshipABI } from "@root/build/contracts/Scholarship.json";

class Scholarship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    const { drizzleContext: { drizzle }, web3_1x } = this.props;
    // create new web3 Contract instance
    const web3Contract = new web3_1x.eth.Contract(scholarshipABI, this.props.contractAddress);
    // append standard api to format expected by drizzle
    web3Contract.options.jsonInterface = scholarshipABI;
    // add conrtact to drizzle store
    const contractConfig = { contractName, web3Contract };
    drizzle.addContract(contractConfig);
  }

  render() {
    return this.props.contractAddress;
  }
}

export default withDrizzle(withWeb3_1x(Scholarship));
