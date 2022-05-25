import React from 'react'
import useSettings from '../useSettings'

const AllEntities = () => {
  const {
    entities,
    active_settings_side,
    actions: { setSelected },
  } = useSettings()
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
        let name = [
          entity.id.split('-')[0],
          entity.id.split('-')[1].slice(0, 5),
        ].join('-')
        return (
          <button
            onClick={() => setSelected(entity.id)}
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
