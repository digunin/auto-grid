import React from 'react'

const DefinitionFragment = ({ term, children }) => {
  return (
    <div className="def-fragment">
      <em>{`${term} - `}</em>
      {children}
    </div>
  )
}

export default DefinitionFragment
