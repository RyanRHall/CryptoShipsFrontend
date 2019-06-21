// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
// Source Files
import ScholarshipListItem from "./ScholarshipListItem"
import * as select from "@src/state/selectors"

// Component
const ScholarshipList = props => (
  props.scholarshipAddresses.map((name, index) => <ScholarshipListItem key={name} contractName={name} index={index}/>)
)

// Wrapper
const ScholarshipListWrapper = props => {
  const scholarshipAddresses = drizzleReactHooks.useDrizzleState(select.scholarshipContractNames)
  return <ScholarshipList {...props} scholarshipAddresses={scholarshipAddresses}/>
}

export default ScholarshipListWrapper
