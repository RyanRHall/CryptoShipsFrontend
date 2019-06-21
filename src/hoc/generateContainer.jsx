import React from "react"

const generateContainer = propGenerator => props => (
  <div {...propGenerator(props)}>
    {props.children}
  </div>
)

export default generateContainer
