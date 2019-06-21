// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Source Files
import ApplyButton from "@src/components/scholarship/ApplyButton"

const CONTRACT_PROPERTIES = [ "courseName", "isActive", "schoolName", "sponsor" ]

// Component
const Scholarship = props => (
  <Link to={`/scholarships/${props.index}`}>
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
    </div>
  </Link>
)

// Wrapper
const ScholarshipWrapper = props => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  const cacheCallProps = CONTRACT_PROPERTIES.reduce((contractProperties, property) => {
    contractProperties[property] = useCacheCall(props.contractName, property)
    return contractProperties
  }, {})

  return <Scholarship {...cacheCallProps} {...props} />
}

export default ScholarshipWrapper
