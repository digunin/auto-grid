import React from 'react'

const Block = ({ value, img }) => {
  return (
    <div className={`block`}>
      <img src={img} />
      <div className="numbering txt1">{value}</div>
    </div>
  )
}

export default Block
