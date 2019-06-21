// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
// Source Files
import ApplyButton from "@src/components/scholarship/ApplyButton"

const CONTRACT_PROPERTIES = [ "courseName", "isActive", "schoolName", "sponsor" ]

// Component
const Scholarship = props => (
  <div>
    <ul>
      {
        CONTRACT_PROPERTIES
          .filter(property => props[property] !== undefined)
          .map(property => (
            <li key={property}>{`${property}: ${props[property]}`}</li>
          ))
      }
    </ul>
    <ApplyButton contractName={props.contractName}/>
  </div>
)

// Wrapper
const ScholarshipWrapper = ({ contractName }) => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  const cacheCallProps = CONTRACT_PROPERTIES.reduce((props, property) => {
    props[property] = useCacheCall(contractName, property)
    return props
  }, {})

  return <Scholarship {...cacheCallProps} contractName={contractName} />
}

export default ScholarshipWrapper
