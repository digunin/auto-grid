export const defaultState = {
  txt: {
    type: 'txt',
    selected: false,
    top: '45',
    left: '10',
    width: '45',
    height: '7',
    align: 'center',
    color: 'black',
    fontFamily: 'Arial',
    fontSize: '12',
    rotate: 0,
    data_sorce_id: '',
    data: ['Текстовое поле'],
  },
  qrcode: {
    type: 'qrcode',
    selected: false,
    level: 'M',
    margin: 7,
    scale: 1,
    pixelWwidth: 4,
    width: 12,
    top: '36',
    left: '67.5',
    darkColor: '#000',
    lightColor: '#FFF',
    rotate: 270,
    data_sorce_id: '',
    data: ['QR-code'],
  },
  barcode: {
    type: 'barcode',
    format: 'code128',
    selected: false,
    top: '36.6',
    left: '40.5',
    width: '43.6',
    height: '14.2',
    fontSize: '35',
    textPosition: 'bottom',
    displayValue: true,
    flat: false,
    barWidth: 2.5,
    rotate: 0,
    data_sorce_id: '',
    data: ['00000001'],
  },
}
