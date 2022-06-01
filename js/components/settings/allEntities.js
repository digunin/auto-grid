import React from 'react'
import { setSelected } from '@/redux/reducers/datasetReducer'
import { useDispatch, useSelector } from 'react-redux'
import printingSelector from '@/redux/selectors/printingSelector'

const AllEntities = () => {
  const dispatch = useDispatch()
  const entities = useSelector((state) => state.dataSet.entities)
  const active_settings_side = useSelector(
    (state) => state.common.active_settings_side
  )
  return (
    <div className="picker-wrapper">
      {entities.map((entity) => {
        let disabled = entity.side !== active_settings_side
        let style = {}
        style.color = disabled ? 'grey' : 'var(--active-color)'
        style.boxShadow =
          entity.selected && !disabled
            ? '0 0 5px 5px var(--active-color)'
            : 'inherit'
        let name = entity.id.slice(0, 12)
        return (
          <button
            onClick={() =>
              dispatch(setSelected(entity.id, active_settings_side))
            }
            key={entity.id}
            disabled={disabled}
            style={style}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}

export default AllEntities
