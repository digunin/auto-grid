import React from 'react'
import Block from './block'

const SublimePage = ({ index, side }) => {
  return (
    <div className="page page-for-sublime">
      {/* <div className="page-number">{page_number}</div> */}
      <Block
        onclick={() => {
          return
        }}
        subclass={'sublime-block'}
        side={side}
        key={index}
        index={index}
      />
    </div>
  )
}

export default SublimePage
