import React from 'react'

const DefinitionFragment = ({ term, children }) => {
  return (
    <>
      <em>{term}</em> - {children}
    </>
  )
}

export default DefinitionFragment
