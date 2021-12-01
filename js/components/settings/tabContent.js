import React from 'react'
import Block from '../block'
import useSettings from '../useSettings'
import AddEntities from './addEntities'
import BarcodeSettings from './barcodeSettings'
import ImagePicker from './pickers/imagePicker'
import NeedPrint from './pickers/needPrint'
import PrintingModePicker from './pickers/printingModePicker'
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
      <AddEntities />
      <ImagePicker side={side} />
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
      {selected && (
        <button
          style={{
            color: 'red',
            backgroundColor: 'white',
            border: '1px solid red',
          }}
          onClick={() => actions.deleteEntity(selected.id)}
        >
          Удалить выбранный элемент
        </button>
      )}
    </div>
  )
}

export default TabContent
