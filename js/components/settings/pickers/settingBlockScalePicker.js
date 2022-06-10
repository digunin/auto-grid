import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBlockInsideBlockWrapperScale } from '../../../redux/reducers/commonReducer'

const SettingBlockScalePicker = () => {
  const scales = [1, 1.5, 2]
  const dispatch = useDispatch()
  const currentScale = useSelector(
    (state) => state.common.blockInsideBlockWrapperScale
  )

  return (
    <div className="picker-wrapper">
      {scales.map((scale) => {
        let style = {
          boxShadow:
            scale == currentScale
              ? '0 0 5px 5px var(--active-color)'
              : 'inherit',
        }
        return (
          <button
            key={`scale-button-${scale}`}
            style={style}
            onClick={() => dispatch(setBlockInsideBlockWrapperScale(scale))}
          >{`x${scale}`}</button>
        )
      })}
    </div>
  )
}

export default SettingBlockScalePicker
