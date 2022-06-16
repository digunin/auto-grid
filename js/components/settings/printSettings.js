import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddEntities from './addEntities'
import AllEntities from './allEntities'
import BarcodeSettings from './barcodeSettings'
import ImagePicker from './pickers/imagePicker'
import NeedPrint from './pickers/needPrint'
import PrintingModePicker from './pickers/printingModePicker'
import QRCodeSettings from './qrcodeSettings'
import SettingsSaveLoad from './settingsSaveLoad'
import TxtSettings from './txtSettings'
import { setSelected } from '@/redux/reducers/datasetReducer'
import {
  changeSideNeedPrint,
  setPrintingMode,
} from '@/redux/reducers/commonReducer'
import printingSelector from '@/redux/selectors/printingSelector'
import getSelectedEntitySelector from '@/redux/selectors/getSelectedEntitySelector'
import ImageControlButtons from './pickers/imageControlButtons'
import BlockWrapper from './blockWrapper'

const PrintSettings = () => {
  const dispatch = useDispatch()
  let { printingMode, active_settings_side } = useSelector(printingSelector)
  const selected = useSelector(getSelectedEntitySelector)
  return (
    <>
      <div className="static-pickers-wrapper">
        <ImageControlButtons />
        <BlockWrapper
          side={active_settings_side}
          subclass={printingMode === 'grid' ? 'grid-block' : 'sublime-block'}
          on_mouse_down={() =>
            dispatch(setSelected(null, active_settings_side))
          }
          onEntityMouseDown={(id, event) => {
            event.stopPropagation()
            if (event.button === 0) {
              dispatch(setSelected(id, active_settings_side))
            }
          }}
          selected_id={selected?.id}
        />
        <AllEntities />
        <SettingsSaveLoad />
        <AddEntities />
        <ImagePicker side={active_settings_side} />
        <NeedPrint
          onchange={(newProp) => {
            dispatch(changeSideNeedPrint(newProp))
          }}
        />
        <PrintingModePicker
          onchange={(mode) => {
            dispatch(setPrintingMode(mode))
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
