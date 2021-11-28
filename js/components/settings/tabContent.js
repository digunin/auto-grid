import React from 'react'
import Block from '../block'
import useSettings from '../useSettings'
import BarcodeSettings from './barcodeSettings'
import NeedPrint from './needPrint'
import PrintingModePicker from './printingModePicker'
import QRCodeSettings from './qrcodeSettings'
import TxtSettings from './txtSettings'

const TabContent = ({ side }) => {
  let { actions, selected, printingMode } = useSettings()
  return (
    <div className="tab-content">
      <div className="block-wrapper" onClick={() => actions.setSelected(null)}>
        <Block
          selected_id={selected?.id}
          onclick={(id) => {
            actions.setSelected(id)
          }}
          subclass={printingMode === 'grid' ? 'grid-block' : 'sublime-block'}
          index={0}
          side={side}
        />
      </div>
      <NeedPrint
        onchange={(newProp) => {
          actions.changeSideNeedPrint(newProp)
        }}
      />
      <PrintingModePicker
        onchange={(mode) => {
          actions.setPrintingMode(mode)
        }}
      />
      <div className="all-picker-wrapper">
        {selected?.type === 'barcode' && <BarcodeSettings />}
        {selected?.type === 'txt' && <TxtSettings />}
        {selected?.type === 'qrcode' && <QRCodeSettings />}
      </div>
    </div>
  )
}

export default TabContent
