import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getSelectedEntitySelector from '@/redux/selectors/getSelectedEntitySelector'
import { dataSelectorModeInfo as modeInfo } from '@/utils'
import useDataSource from './useDataSource'

const DataSelectorModePicker = () => {
  const dispatch = useDispatch()
  const selected = useSelector(getSelectedEntitySelector)

  const { setDataSourceProps, dataSourceProps } = useDataSource(
    selected.data_source_id
  )

  const onRadioClick = (value) => {
    if (selected.data_source_id === '') return
    dispatch(setDataSourceProps({ data_selector_mode: value }))
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
              checked={dataSourceProps.data_selector_mode === info[0]}
            />
            {info[1]}
          </label>
        )
      })}
    </div>
  )
}

export default DataSelectorModePicker
