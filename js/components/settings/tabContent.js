import React, { useContext } from 'react'
import Block from '../block'
import Context from '../../store/settingContext'
import BarcodeSettings from './barcodeSettings'
import TxtSettings from './txtSettings'

const TabContent = ({ side }) => {
  let state = useContext(Context)
  let selected = state[side].selected
  let setSelected = state.actions.setSelected
  return (
    <div className="tab-content">
      <div className="block-wrapper">
        <Block
          selected_key={selected?.key}
          onclick={(data) => {
            setSelected({ side, selected: data })
          }}
          index={0}
          side={side}
        />
      </div>
      {selected?.type === 'barcodes' && <BarcodeSettings />}
      {selected?.type === 'txt' && <TxtSettings />}
    </div>
  )
}

export default TabContent
