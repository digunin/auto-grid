import React from 'react'
import PrintSettings from './printSettings'
import DataSourceSettings from './dataSourceSetings'
import { useSelector } from 'react-redux'

const TabContent = () => {
  let active_settings_tab = useSelector(
    (state) => state.common.active_settings_tab
  )
  return (
    <div className="tab-content">
      {active_settings_tab == 'data-source' && <DataSourceSettings />}
      {active_settings_tab != 'data-source' && <PrintSettings />}
    </div>
  )
}

export default TabContent
