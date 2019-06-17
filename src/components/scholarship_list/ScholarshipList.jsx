// Libraries
import React from "react";
// Source Files
import { abi as scholarshipABI } from "@root/build/contracts/Scholarship.json";
import ScholarshipWrapper from "@src/components/scholarship/ScholarshipWrapper.jsx"
import withDrizzle from "@src/hoc/withDrizzle.jsx";


class ScholarshipList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scholarshipAddresses: []
    }
  }

  async componentDidMount() {
    // const { drizzleContext: { drizzle } } = this.props;
    const { drizzle } = this.props;
    const contract = drizzle.contracts.ScholarshipManager;
    // const scholarshipAddresses = await contract.methods.getScholarshipAddresses().call();
    const scholarshipAddresses = (await contract.methods.getScholarshipAddresses().call()).slice(0,1);
    scholarshipAddresses.forEach(address => this._addScholarship(address));
    this.setState({ scholarshipAddresses });
  }

  _addScholarship(contractName) {
    // const { drizzleContext: { drizzle } } = this.props;
    const { drizzle } = this.props;
    window.drizzle = drizzle;
    // create new web3 Contract instance
    const web3Contract = new drizzle.web3.eth.Contract(scholarshipABI, this.props.contractAddress);
    // add conrtact to drizzle store
    const contractConfig = { contractName, web3Contract };
    drizzle.addContract(contractConfig);
  }

  render() {
    // const { useCacheCall } = drizzleReactHooks.useDrizzle();
    // schoolName={useCacheCall(scholarshipAddresses[0], "schoolName")
    return(
      this.state.scholarshipAddresses.map( address => <ScholarshipWrapper key={address} contractAddress={address} /> )
    );
  }
}

export default withDrizzle(ScholarshipList);
