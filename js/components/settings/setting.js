import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TabContent from './tabContent'
import { Detector, possibleFonts } from '../../utils'
import {
  setSystemFonts,
  setActiveSettingsTab,
} from '../../redux/reducers/commonReducer'

const Setting = () => {
  const dispatch = useDispatch()

  const active_settings_tab = useSelector(
    (state) => state.common.active_settings_tab
  )

  const tabNames = [
    ['front', 'Лицевая сторона'],
    ['back', 'Обратная сторона'],
    ['data-source', 'Источник данных'],
  ]

  useEffect(() => {
    let detector = new Detector()
    let fonts = possibleFonts.filter((fontName) => detector.detect(fontName))
    dispatch(setSystemFonts(fonts))
  }, [])

  return (
    <div className="print-setting">
      <div className="tab">
        {tabNames.map(([tabName, tabTitle]) => {
          return (
            <button
              className={`tablinks ${
                tabName === active_settings_tab ? 'active' : ''
              }`}
              onClick={() => dispatch(setActiveSettingsTab(tabName))}
              key={tabName}
            >
              {tabTitle}
            </button>
          )
        })}
      </div>
      <TabContent />
    </div>
  )
}

export default Setting
