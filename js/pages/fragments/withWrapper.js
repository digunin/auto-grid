import React, { useState } from 'react'

const withWrapper = (Fragment) => {
  function Wrapper({ text, ...props }) {
    const [hover, setHover] = useState(false)
    const mouseEnterHandler = (event) => setHover(true)
    const mouseLeaveHandler = (event) => setHover(false)
    return (
      <>
        <span
          style={{ textDecoration: 'underline', color: 'gray' }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="media-fragment-link"
        >
          {text}
        </span>
        {hover && <Fragment {...props} />}
      </>
    )
  }
  return Wrapper
}

export default withWrapper
