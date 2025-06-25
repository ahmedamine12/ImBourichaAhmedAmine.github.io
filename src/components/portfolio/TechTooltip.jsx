import React from 'react'

const TechTooltip = ({ text, children }) => (
  <span className="tech-tooltip" tabIndex={0}>
    {children}
    <span className="tech-tooltip-text">{text}</span>
  </span>
)

export default TechTooltip 