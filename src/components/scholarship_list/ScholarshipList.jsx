// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
// Source Files
import ScholarshipWrapper from "@src/components/scholarship/ScholarshipWrapper"
import * as select from "@src/state/selectors"

// Component
const ScholarshipList = props => (
  props.scholarshipAddresses.map( address => <ScholarshipWrapper key={address} contractAddress={address} /> )
)

// TODO - refactor into reusable hoc
// Wrapper
const ScholarshipListWrapper = props => {
  const scholarshipAddresses = drizzleReactHooks.useDrizzleState(select.scholarshipContractNames)
  return <ScholarshipList {...props} scholarshipAddresses={scholarshipAddresses}/>
}

export default ScholarshipListWrapper
