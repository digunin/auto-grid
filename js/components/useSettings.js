import { useContext } from 'react'
import Context from '../store/settingContext'

const useSettings = (side = null) => {
  const context = useContext(Context)
  let {
    actions,
    cards_count,
    active_settings_tab,
    entities,
    frontImage,
    backImage,
    systemFonts,
    printingMode,
    needPrint,
  } = context

  let selected = context.entities.filter((entity) => {
    return entity.side == active_settings_tab && entity.selected
  })
  selected = selected[0]

  let [bgImage, barcodes, txt, qrcodes] = [null, null, null, null]
  if (side) {
    bgImage = side == 'front' ? frontImage : backImage
    barcodes = entities.filter((entity) => {
      return entity.side == side && entity.type == 'barcode'
    })
    txt = entities.filter((entity) => {
      return entity.side == side && entity.type == 'txt'
    })
    qrcodes = entities.filter((entity) => {
      return entity.side == side && entity.type == 'qrcode'
    })
  }
  let copy = { ...context }
  delete copy.actions
  copy = JSON.stringify(copy)
  return {
    actions,
    entities,
    cards_count,
    active_settings_tab,
    selected,
    bgImage,
    barcodes,
    txt,
    qrcodes,
    systemFonts,
    printingMode,
    needPrint,
    stateStringify: copy,
  }
}

export default useSettings
