// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
// Source Files
import Scholarship from "@src/components/scholarship/Scholarship"

const ScholarshipWrapper = ({ contractAddress }) => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  const contractProperties = [ "courseName", "isActive", "schoolName", "sponsor" ]
  const callFunction = call => (
    contractProperties.reduce((data, property) => {
      data[property] = call(contractAddress, property)
      return data
    }, {})
  )
  return <Scholarship
            contractData={useCacheCall([ contractAddress ], callFunction)}
            contractProperties={contractProperties} />
}

export default ScholarshipWrapper
