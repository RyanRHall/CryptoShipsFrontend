// Libraries
import React from "react"
import { drizzleReactHooks } from "drizzle-react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import classNames from "classnames"
// Source
import generateContainer from "@src/hoc/generateContainer"
// Style
import "@src/styles/scholarship_list/scholarship_list_item"

const CONTRACT_PROPERTIES = [ "courseName", "isActive", "schoolName", "sponsor", "value" ]

// Container
const ComponentContainer = generateContainer(props => ({
  className: classNames("scholarship-list-item-container", { active: props.isActive })
}))

// Component
const ScholarshipListItem = props => (
  <ComponentContainer>
    <Link to={`/scholarships/${props.index}`}>
      <h4>{props.courseName}</h4>
      <h5>{props.schoolName}</h5>
      <span>{props.sponsor}</span>
      <span>{props.value} wei</span>
    </Link>
  </ComponentContainer>
)

// Wrapper
const ScholarshipWrapper = props => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  const cacheCallProps = CONTRACT_PROPERTIES.reduce((contractProperties, property) => {
    contractProperties[property] = useCacheCall(props.contractName, property)
    return contractProperties
  }, {})

  return <ScholarshipListItem {...cacheCallProps} {...props} />
}

export default ScholarshipWrapper
