import React from 'react'
import Block from '../block'

const BlockWrapper = ({
  side,
  subclass,
  onclick,
  onEntityClick,
  selected_id,
}) => {
  return (
    <div className="block-wrapper" onClick={onclick}>
      <Block
        selected_id={selected_id}
        onclick={onEntityClick}
        subclass={subclass}
        index={0}
        inSetting={true}
        side={side}
      />
    </div>
  )
}

export default BlockWrapper
