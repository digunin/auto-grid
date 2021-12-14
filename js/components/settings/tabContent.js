import React from 'react'
import useSettings from '../useSettings'
import PrintSettings from './printSettings'
import DataSourceSettings from './dataSourceSetings'

const TabContent = () => {
  let { active_settings_tab } = useSettings()
  return (
    <div className="tab-content">
      {active_settings_tab == 'data-source' && <DataSourceSettings />}
      {active_settings_tab != 'data-source' && <PrintSettings />}
    </div>
  )
}

export default TabContent
