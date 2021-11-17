import React from 'react'
import Block from '../block'
import useSettings from '../useSettings'
import BarcodeSettings from './barcodeSettings'
import QRCodeSettings from './qrcodeSettings'
import TxtSettings from './txtSettings'

const TabContent = ({ side }) => {
  let { actions, selected } = useSettings()
  return (
    <div className="tab-content">
      <div className="block-wrapper" onClick={() => actions.setSelected(null)}>
        <Block
          selected_id={selected?.id}
          onclick={(id) => {
            actions.setSelected(id)
          }}
          index={0}
          side={side}
        />
      </div>
      <div className="all-picker-wrapper">
        {selected?.type === 'barcode' && <BarcodeSettings />}
        {selected?.type === 'txt' && <TxtSettings />}
        {selected?.type === 'qrcode' && <QRCodeSettings />}
      </div>
    </div>
  )
}

export default TabContent
