import React, { useState } from 'react'

const withWrapper = (Fragment) => {
  const vmNames = {
    default: 0,
    preview: 1,
    fullview: 2,
  }
  function Wrapper({ text, ...props }) {
    const [viewMode, setViewMode] = useState(vmNames.default)
    const mouseEnterHandler = (event) => setViewMode(vmNames.preview)
    const mouseLeaveHandler = (event) => setViewMode(vmNames.default)
    const clickHandler = (event) => setViewMode(vmNames.fullview)

    const classname =
      viewMode !== vmNames.default
        ? viewMode == vmNames.preview
          ? 'preview-fragment'
          : 'fullview-fragment'
        : null

    return (
      <>
        <span
          style={{ textDecoration: 'underline', color: 'gray' }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={clickHandler}
          className="media-fragment-link"
        >
          {text}
        </span>
        {viewMode !== vmNames.default && (
          <span className={`media-fragment ${classname}`}>
            <Fragment {...props} />
          </span>
        )}
      </>
    )
  }
  return Wrapper
}

export default withWrapper
