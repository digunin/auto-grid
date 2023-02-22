import React from 'react'

const DefinitionFragment = ({ term, children }) => {
  return (
    <div className="def-fragment">
      <em>
        <b>{term}</b>
      </em>{' '}
      - {children}
    </div>
  )
}

export default DefinitionFragment
