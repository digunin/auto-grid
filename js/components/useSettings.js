import { useContext } from 'react'
import Context from '../store/settingContext'

const useSettings = (side = null, save = false) => {
  const context = useContext(Context)
  let {
    actions,
    cards_count,
    active_settings_tab,
    active_settings_side,
    entities,
    frontImage,
    backImage,
    systemFonts,
    printingMode,
    needPrint,
    data_source,
  } = context

  let selected = context.entities.filter((entity) => {
    return entity.side == active_settings_side && entity.selected
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
  let copy = {}
  if (save) {
    copy = {
      ...context,
      frontImage: context.frontImage ? { ...context.frontImage } : null,
      backImage: context.backImage ? { ...context.backImage } : null,
    }
    if (copy.frontImage) {
      if (!copy.frontImage.content.startsWith('data:image')) {
        copy.frontImage.content = localStorage.getItem('front')
      }
    }
    if (copy.backImage) {
      if (!copy.backImage.content.startsWith('data:image')) {
        copy.backImage.content = localStorage.getItem('back')
      }
    }
    delete copy.actions
  }
  copy = JSON.stringify(copy)
  return {
    actions,
    entities,
    cards_count,
    active_settings_tab,
    active_settings_side,
    selected,
    bgImage,
    barcodes,
    txt,
    qrcodes,
    systemFonts,
    printingMode,
    needPrint,
    stateStringify: copy,
    data_source,
  }
}

export default useSettings
