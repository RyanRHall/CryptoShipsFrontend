// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
// Source Files
import Scholarship from "@src/components/scholarship/Scholarship"
import * as select from "@src/state/selectors"

// Component
const ScholarshipList = props => (
  props.scholarshipAddresses.map(name => <Scholarship key={name} contractName={name} />)
)

// Wrapper
const ScholarshipListWrapper = props => {
  const scholarshipAddresses = drizzleReactHooks.useDrizzleState(select.scholarshipContractNames)
  return <ScholarshipList {...props} scholarshipAddresses={scholarshipAddresses}/>
}

export default ScholarshipListWrapper
