import React, { useContext, useState } from 'react'
import Context from '../store/settingContext'
import TabContent from './tabContent'

const Setting = () => {
  const { front, back, actions, active_settings_tab } = useContext(Context)
  // return (
  //   <div className="print-setting">
  //     <button
  //       onClick={() => {
  //         actions.changeText({ classname: 'txt1', new_props: { color: 'white' } })
  //       }}
  //     >
  //       Поменять цвет
  //     </button>
  //   </div>
  // )
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
