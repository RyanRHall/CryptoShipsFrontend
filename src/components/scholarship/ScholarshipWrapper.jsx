import React from "react";
import { drizzleReactHooks } from "drizzle-react";
import Scholarship from "@src/components/scholarship/Scholarship.jsx";
import withDrizzle from "@src/hoc/withDrizzle.jsx";

// window.drizzleReactHooks = drizzleReactHooks;

const ScholarshipWrapper = ({ contractAddress }) => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle();
  debugger
  return (
    <Scholarship schoolName={useCacheCall("ScholarshipManager", "testVerificationEndpoint")} />
  )
}

export default ScholarshipWrapper;
