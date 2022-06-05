import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TabContent from './tabContent'
import { setActiveSettingsTab } from '@/redux/reducers/commonReducer'
import { tabNames } from '../../utils'

const Setting = () => {
  const dispatch = useDispatch()

  const active_settings_tab = useSelector(
    (state) => state.common.active_settings_tab
  )

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
