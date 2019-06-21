// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Source Files
import { ScholarshipContainer } from "./styles"

const CONTRACT_PROPERTIES = [ "courseName", "isActive", "schoolName", "sponsor", "value" ]

// Component
const Scholarship = props => (
  <Link to={`/scholarships/${props.index}`}>
    <ScholarshipContainer>
      <h4>{props.courseName}</h4>
      <h5>{props.schoolName}</h5>
      <span>{props.sponsor}</span>
      <span>{props.value} wei</span>
    </ScholarshipContainer>
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
