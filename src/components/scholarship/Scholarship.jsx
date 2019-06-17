// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"

const CONTRACT_PROPERTIES = [ "courseName", "isActive", "schoolName", "sponsor" ]

// Component
const Scholarship = props => (
  <ul>
    {
      CONTRACT_PROPERTIES
        .filter(property => props[property] !== undefined)
        .map(property => (
          <li key={property}>{`${property}: ${props[property]}`}</li>
        ))
    }
  </ul>
)

// Wrapper
const ScholarshipWrapper = ({ contractName }) => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle()

  const cacheCallProps = CONTRACT_PROPERTIES.reduce((props, property) => {
    props[property] = useCacheCall(contractName, property)
    return props
  }, {})

  return <Scholarship {...cacheCallProps} />
}

export default ScholarshipWrapper
