import React from 'react'
import Block from '../block'
import useSettings from '../useSettings'
import BarcodeSettings from './barcodeSettings'
import TxtSettings from './txtSettings'

const TabContent = ({ side }) => {
  let { actions, selectedKey, selectedType } = useSettings()
  return (
    <div className="tab-content">
      <div className="block-wrapper">
        <Block
          selected_key={selectedKey}
          onclick={(data) => {
            actions.setSelected({ side, selected: data })
          }}
          index={0}
          side={side}
        />
      </div>
      {selectedType === 'barcodes' && <BarcodeSettings />}
      {selectedType === 'txt' && <TxtSettings />}
    </div>
  )
}

export default TabContent
