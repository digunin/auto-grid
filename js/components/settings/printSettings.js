import React from 'react'
import Block from '../block'
import useSettings from '../useSettings'
import AddEntities from './addEntities'
import BarcodeSettings from './barcodeSettings'
import ImagePicker from './pickers/imagePicker'
import NeedPrint from './pickers/needPrint'
import PrintingModePicker from './pickers/printingModePicker'
import QRCodeSettings from './qrcodeSettings'
import SettingsSaveLoad from './settingsSaveLoad'
import TxtSettings from './txtSettings'

const PrintSettings = () => {
  let { actions, selected, printingMode, active_settings_side } = useSettings()
  return (
    <>
      <div className="static-pickers-wrapper">
        <div
          className="block-wrapper"
          onClick={() => actions.setSelected(null)}
        >
          <Block
            selected_id={selected?.id}
            onclick={(id) => {
              actions.setSelected(id)
            }}
            subclass={printingMode === 'grid' ? 'grid-block' : 'sublime-block'}
            index={0}
            inSetting={true}
            side={active_settings_side}
          />
        </div>
        <SettingsSaveLoad />
        <AddEntities />
        <ImagePicker side={active_settings_side} />
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
      </div>
      <div className="dynamic-pickers-wrapper">
        {selected?.type === 'barcode' && <BarcodeSettings />}
        {selected?.type === 'txt' && <TxtSettings />}
        {selected?.type === 'qrcode' && <QRCodeSettings />}
      </div>
    </>
  )
}

export default PrintSettings
