import React, { useState } from 'react'

const SectionFragment = ({ title = '', children }) => {
  const [isShow, setIsShow] = useState(false)

  const isShowToggle = (event) => {
    let content = event.currentTarget.parentElement.nextElementSibling
    content.style.maxHeight = isShow ? null : content.scrollHeight + 'px'
    setIsShow((prev) => !prev)
  }

  return (
    <section width="100%">
      <h2 className="header">
        <button onClick={isShowToggle}>
          <span>{title}</span>
          <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
            <rect
              className={isShow ? '' : 'vert'}
              height="2"
              width="8"
              y="4"
              x="1"
            />
            <rect height="2" width="8" y="4" x="1" />
          </svg>
        </button>
      </h2>

      <div className="section-content">{children}</div>
    </section>
  )
}

export default SectionFragment
