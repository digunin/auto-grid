import React, { useState } from 'react'
import useWrapper from './useWrapper'

const withWrapper = (Fragment) => {
  const viewModeNames = {
    default: 0,
    preview: 1,
    fullview: 2,
  }
  function Wrapper({ text, ...props }) {
    const {
      viewMode,
      viewModeClassname,
      mouseEnterHandler,
      mouseLeaveHandler,
      clickHandler,
      fullviewClickHandler,
    } = useWrapper(viewModeNames)

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

        {viewMode !== viewModeNames.default && (
          <span
            onClick={fullviewClickHandler}
            className={`media-fragment ${viewModeClassname}`}
          >
            <Fragment {...props} />
            {viewMode == viewModeNames.fullview && (
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
