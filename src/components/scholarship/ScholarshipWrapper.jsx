import React from "react"
import { drizzleReactHooks } from "drizzle-react"
import Scholarship from "@src/components/scholarship/Scholarship.jsx"
import withDrizzle from "@src/hoc/withDrizzle.jsx"

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
            contractData={useCacheCall([contractAddress], callFunction)}
            contractProperties={contractProperties} />
}

export default ScholarshipWrapper
