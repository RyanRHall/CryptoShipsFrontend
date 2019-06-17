// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
// Source Files
import * as select from "@src/state/selectors"
import ScholarshipList from "@src/components/scholarship_list/ScholarshipList"

const ScholarshipListWrapper = props => {
  const scholarshipAddresses = drizzleReactHooks.useDrizzleState(select.scholarshipContracts)
  return <ScholarshipList scholarshipAddresses={scholarshipAddresses}/>
}

export default ScholarshipListWrapper
