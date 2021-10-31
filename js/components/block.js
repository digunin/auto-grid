import React from 'react'

const Block = ({ value, img }) => {
  return (
    <div className={`block`}>
      <img src={img} />
      <div className="numbering">{value}</div>
    </div>
  )
}

export default Block
