import React from 'react'
import useSettings from '../useSettings'
import { savedState } from '../../savedSettings'

const SettingsSaveLoad = () => {
  const {
    actions: { setNewState },
  } = useSettings()
  return (
    <div className="picker-wrapper">
      <button onClick={() => setNewState(JSON.parse(savedState))}>
        Загрузить настройки
      </button>
    </div>
  )
}

export default SettingsSaveLoad
