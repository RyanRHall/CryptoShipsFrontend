// Libraries
import React from "react";
// Source Files
import ScholarshipWrapper from "@src/components/scholarship/ScholarshipWrapper.jsx"

const ScholarshipList = props => (
  props.scholarshipAddresses.map( address => <ScholarshipWrapper key={address} contractAddress={address} /> )
)

export default ScholarshipList;
