import React, { useState } from 'react'

const SectionFragment = ({ title = '', children }) => {
  const [isShow, setIsShow] = useState(false)
  const isShowToggle = () => setIsShow((prev) => !prev)
  const buttonText = isShow ? '▲' : '▼'
  return (
    <section width="100%">
      <div className="header">
        <h2>{title}</h2>
        <button onClick={isShowToggle}>{buttonText}</button>
      </div>
      <div className={`section-content ${isShow ? 'show' : ''}`}>
        {children}
      </div>
    </section>
  )
}

export default SectionFragment
