// Libraries
import React from "react";

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

export default Scholarship;
