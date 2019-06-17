import React from "react";
import { drizzleReactHooks } from "drizzle-react";
import ScholarshipList from "@src/components/scholarship_list/ScholarshipList.jsx"

const ScholarshipListWrapper = props => {
  const scholarshipAddresses = drizzleReactHooks.useDrizzleState(state =>
    Object.keys(state.contracts).filter(name => name[0] === "0") // TODO hacky AF
  )
  return <ScholarshipList scholarshipAddresses={scholarshipAddresses}/>
}

export default ScholarshipListWrapper;
