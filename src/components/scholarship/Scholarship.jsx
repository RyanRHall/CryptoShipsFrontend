// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"

// Component
const Scholarship = props => (
  <ul>
    {
      props.contractProperties
      .filter(property => props.contractData[property] !== undefined)
      .map(property => (
        <li key={property}>{`${property}: ${props.contractData[property]}`}</li>
      ))
    }
  </ul>
)

// Wrapper
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
