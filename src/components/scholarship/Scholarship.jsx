// Libraries
import React from "react";
import { drizzleConnect } from "drizzle-react";
// Source Files
import withDrizzle from "@src/hoc/withDrizzle.jsx";
import { abi as scholarshipABI } from "@root/build/contracts/Scholarship.json";

class Scholarship extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      schoolName: "",
      contract: {
        initialized: false
      }
    }
  }

  // componentDidMount() {
  //   const { drizzleContext: { drizzle } } = this.props;
  //   window.drizzle = drizzle;
    // create new web3 Contract instance
    // const web3Contract = new drizzle.web3.eth.Contract(scholarshipABI, this.props.contractAddress);
    // add conrtact to drizzle store
    // const contractConfig = {
      // contractName: this.props.contractAddress,
      // web3Contract
    // };
    // drizzle.addContract(contractConfig);
  // }

  // componentDidUpdate() {
  //   if(this._contract() && !this.dataKey) {
  //     this.dataKey = this._contract().methods["schoolName"].cacheCall();
  //   }
  // }

  _contract() {
    return this.props.drizzleContext.drizzle.contracts[this.props.contractAddress];
  }

  // _schoolName() {
  //   debugger
  //   return (this.props.drizzleContext.drizzleState.contracts[this.props.contractAddress].schoolName[this.dataKey] || {}).value || ""
  // }

  render() {
    debugger
    return this.props.schoolName || "loading";
  }
}


export default withDrizzle(Scholarship);
