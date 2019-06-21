// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
// Source Files
import ScholarshipListItem from "./ScholarshipListItem"
import * as select from "@src/state/selectors"
// Style
import "./scholarship_list_style"

// Styles
const ScholarshipListContainer = props => (
  <div className="scholarship-list-container">
    {props.children}
  </div>
)

// Component
const ScholarshipList = props => (
  <ScholarshipListContainer>
    {props.scholarshipAddresses.map((name, index) => <ScholarshipListItem key={name} contractName={name} index={index}/>)}
  </ScholarshipListContainer>
)

// Wrapper
const ScholarshipListWrapper = props => {
  const scholarshipAddresses = drizzleReactHooks.useDrizzleState(select.scholarshipContractNames)
  return <ScholarshipList {...props} scholarshipAddresses={scholarshipAddresses}/>
}

export default ScholarshipListWrapper
