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
  reset_drag,
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
      onMouseUp={reset_drag}
    >
      {imagePositions.map((pos) => {
        if (pos === 'center') {
          return (
            <Block
              key="block-key"
              selected_id={selected_id}
              onEntityMouseDown={onEntityMouseDown}
              reset_drag={reset_drag}
              on_mouse_move={(e) =>
                dispatch(mouseMoving({ pageX: e.pageX, pageY: e.pageY }))
              }
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
