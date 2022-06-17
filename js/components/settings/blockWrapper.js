import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Block from '../block'
import { setImagePosition, mouseMoving } from '@/redux/reducers/commonReducer'
import { imagePositions } from '../../utils'
import getImageStyleSelector from '../../redux/selectors/getImageStyleSelector'

const BlockWrapper = ({
  side,
  subclass,
  on_mouse_down,
  on_mouse_up,
  onEntityMouseDown,
  selected_id,
}) => {
  const dispatch = useDispatch()
  const clickHandler = (position) => {
    dispatch(setImagePosition(position))
  }
  const { frontStyle, backStyle } = useSelector(getImageStyleSelector)
  const { position } = side === 'front' ? frontStyle : backStyle

  return (
    <div
      className="block-wrapper"
      onMouseDown={on_mouse_down}
      onMouseUp={on_mouse_up}
    >
      {imagePositions.map((pos) => {
        if (pos === 'center') {
          return (
            <Block
              key="block-key"
              selected_id={selected_id}
              onEntityMouseDown={onEntityMouseDown}
              on_mouse_move={(e) => dispatch(mouseMoving(e))}
              subclass={subclass}
              index={0}
              inSetting={true}
              side={side}
            />
          )
        } else {
          let active = pos === position ? 'active' : ''
          let onClickParam = active === '' ? pos : 'center'
          return (
            <div
              key={`pos-button-${pos}`}
              onClick={() => clickHandler(onClickParam)}
              className={`position-button ${pos} ${active}`}
            ></div>
          )
        }
      })}
    </div>
  )
}

export default BlockWrapper
