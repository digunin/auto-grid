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
    const mouseLeaveHandler = (event) =>
      viewMode !== vmNames.fullview && setViewMode(vmNames.default)
    const clickHandler = (event) => setViewMode(vmNames.fullview)
    const fullviewClickHandler = (event) => {
      if (event.target.tagName == 'SPAN') setViewMode(vmNames.default)
    }

    const classname =
      viewMode !== vmNames.default
        ? viewMode == vmNames.preview
          ? 'preview-fragment'
          : 'fullview-fragment'
        : null

    return (
      <>
        <span
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={clickHandler}
          className="media-fragment-link"
        >
          {text}
        </span>

        {viewMode !== vmNames.default && (
          <span
            onClick={fullviewClickHandler}
            className={`media-fragment ${classname}`}
          >
            <Fragment {...props} />
            {viewMode == vmNames.fullview && (
              <span className="close-fullview">&#10006;</span>
            )}
          </span>
        )}
      </>
    )
  }
  return Wrapper
}

export default withWrapper
