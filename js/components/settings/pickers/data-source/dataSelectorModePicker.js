import React from 'react'
import useSettings from '../../../useSettings'
import { dataSelectorModeInfo as modeInfo } from '../../../../utils'
import DiapasonPicker from './diapasonPicker'

const DataSelectorMode = () => {
  const {
    selected,
    actions: { changeEntity },
  } = useSettings()

  const onRadioClick = (value) => {
    changeEntity(selected.id, { data_selector_mode: value })
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', margin: '0.5em 0' }}
    >
      {modeInfo.map((info) => {
        return (
          <label key={info[0]}>
            <input
              onChange={() => onRadioClick(info[0])}
              type="radio"
              name="data-selector-mode"
              value={info[0]}
              checked={selected.data_selector_mode === info[0]}
            />
            {info[1]}
          </label>
        )
      })}
    </div>
  )
}

export default DataSelectorMode
