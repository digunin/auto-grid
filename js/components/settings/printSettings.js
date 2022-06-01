import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Block from '../block'
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

const PrintSettings = () => {
  const dispatch = useDispatch()
  let { printingMode, active_settings_side } = useSelector(printingSelector)
  const selected = useSelector(getSelectedEntitySelector)
  return (
    <>
      <div className="static-pickers-wrapper">
        <div
          className="block-wrapper"
          onClick={() => dispatch(setSelected(null, active_settings_side))}
        >
          <Block
            selected_id={selected?.id}
            onclick={(id) => {
              dispatch(setSelected(id, active_settings_side))
            }}
            subclass={printingMode === 'grid' ? 'grid-block' : 'sublime-block'}
            index={0}
            inSetting={true}
            side={active_settings_side}
          />
        </div>
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
