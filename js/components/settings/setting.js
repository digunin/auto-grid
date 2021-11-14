import React from 'react'
import useSettings from '../useSettings'
import TabContent from './tabContent'

const Setting = () => {
  const { actions, active_settings_tab } = useSettings()
  const tabNames = [
    ['front', 'Лицевая сторона'],
    ['back', 'Обратная сторона'],
  ]

  return (
    <div className="print-setting">
      <div className="tab">
        {tabNames.map(([tabName, tabTitle]) => {
          return (
            <button
              className={`tablinks ${
                tabName === active_settings_tab ? 'active' : ''
              }`}
              onClick={() => actions.setActiveSettingsTab(tabName)}
              key={tabName}
            >
              {tabTitle}
            </button>
          )
        })}
      </div>
      <TabContent side={active_settings_tab} />
    </div>
  )
}

export default Setting
