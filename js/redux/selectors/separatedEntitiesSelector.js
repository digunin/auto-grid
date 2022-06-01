export default (side = null) => {
  return ({ common, dataSet }) => {
    let [bgImage, barcodes, txt, qrcodes] = [null, null, null, null]
    side = side ? side : common.active_settings_side
    bgImage = side == 'front' ? common.frontImage : common.backImage
    barcodes = dataSet.entities.filter((entity) => {
      return entity.side == side && entity.type == 'barcode'
    })
    txt = dataSet.entities.filter((entity) => {
      return entity.side == side && entity.type == 'txt'
    })
    qrcodes = dataSet.entities.filter((entity) => {
      return entity.side == side && entity.type == 'qrcode'
    })
    return { bgImage, txt, barcodes, qrcodes }
  }
}
