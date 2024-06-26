export const lightMarkClasses = [
  'top-left-lm',
  'top-right-lm',
  'bottom-left-lm',
  'bottom-right-lm',
]

export const crossClasses = [
  'top-cross',
  'left-cross',
  'bottom-cross',
  'right-cross',
]

export const routesNames = {
  home: '/',
  setting: '/setting',
  print: '/print',
  about: '/about',
}

export const tabNames = [
  ['front', 'Лицевая сторона'],
  ['back', 'Обратная сторона'],
  ['data-source', 'Источник данных'],
]

export const getArrayWithIndexes = (count, shuffle = false) => {
  let baseArray = [...Array(count).keys()]
  if (!shuffle) return baseArray

  baseArray = shuffleForGrid(baseArray)
  let array_with_indexes = []
  while (baseArray.length > 0) {
    array_with_indexes.push(baseArray.splice(0, 10))
  }
  return array_with_indexes
}

const shuffleForGrid = (arr) => {
  let result = []
  while (true) {
    let chunk = arr.splice(0, 200)
    while (chunk.length % 10 > 0) chunk.push('X')
    let columnLength = chunk.length / 10
    for (let i = 0; i < columnLength; i++) {
      for (let j = 0; j < 10; j++) {
        result.push(chunk[i + columnLength * j])
      }
    }
    if (chunk.length < 200) return result
  }
}

export const barcodeFormats = [
  ['ean13', 'EAN-13'],
  ['code128', 'CODE128'],
  ['code128a', 'CODE128-A'],
  ['code128b', 'CODE128-B'],
  ['code128c', 'CODE128-C'],
  ['code39', 'CODE39'],
  ['ean8', 'EAN-8'],
  ['ean5', 'EAN-5'],
  ['ean2', 'EAN-2'],
  ['itf', 'ITF'],
  ['itf14', 'ITF 14'],
]

// Нельзя менять порядок элементов в массиве
export const dataSelectorModeInfo = [
  ['print-all', 'Печатать всё'],
  ['print-range', 'Указать диапазон'],
  ['print-selected', 'Печатать выбранные'],
]

export const imagePositions = [
  'top left',
  'top',
  'top right',
  'left',
  'center',
  'right',
  'bottom left',
  'bottom',
  'bottom right',
]

export const selectDataFromSource = {
  [dataSelectorModeInfo[0][0]]: (arr) => arr,
  [dataSelectorModeInfo[1][0]]: (arr, { diapason: { from, to } }) => {
    let out = []
    for (let i = from - 1; i < to; i++) {
      out.push([arr[i]])
    }
    return out || []
  },
  [dataSelectorModeInfo[2][0]]: (arr, { selected_indexes }) => {
    return selected_indexes.map((i) => arr[i])
  },
}

export const mock_data = [
  '100043101',
  '100043154',
  '100043198',
  '100043285',
  '100043304',
  '100043330',
  '100043339',
  '100043396',
  '100043459',
  '100043504',
  '100043505',
  '100043526',
  '100043540',
  '100043564',
  '100043579',
  '100043597',
  '100043600',
  '100043601',
  '100043604',
  '100043707',
]

export const barcode_font_size = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
]

export function toggleValue(arr, value) {
  let tmp = [...arr]
  let index = tmp.indexOf(value)
  if (index === -1) {
    tmp = insertSubarray(tmp, [value])
  } else {
    tmp.splice(index, 1)
  }
  return tmp
}

export function insertSubarray(arr, sub) {
  let tmp = [...arr]
  let [left, right] = [0, 0]
  let [start, end] = [sub[0], sub[sub.length - 1]]
  if (tmp.length > 0) {
    for (let i = 0; i < tmp.length; i++) {
      if (start > tmp[i]) {
        left = i + 1
      }
      if (end >= tmp[i]) {
        right = i + 1
      }
    }
  }
  tmp.splice(left, right - left, ...sub)
  return tmp
}

export function dataURLtoBlob(dataurl) {
  let arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

// примерно половина объема localStorage
export const maxDataURL_length = 2511000

export function getPageOffsetRect(elem) {
  var box = elem.getBoundingClientRect()
  var body = document.body
  var docElem = document.documentElement

  // поддержка IE
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
  var clientTop = docElem.clientTop || body.clientTop || 0
  var clientLeft = docElem.clientLeft || body.clientLeft || 0

  var x = box.left + scrollLeft - clientLeft
  var y = box.top + scrollTop - clientTop
  return {
    x: Math.round(x),
    y: Math.round(y),
    width: Math.round(box.width),
    height: Math.round(box.height),
  }
}

export function getNewEntityPos({ scale, startPoints, currentPoint }) {
  let pixelOffset = {
    x: currentPoint.x - startPoints.mouseStart.x,
    y: currentPoint.y - startPoints.mouseStart.y,
  }

  let mmOffset = {
    x: pixelOffset.x / scale,
    y: pixelOffset.y / scale,
  }

  let left = Number(startPoints.entityStart.x) + mmOffset.x
  let top = Number(startPoints.entityStart.y) + mmOffset.y

  return {
    left: left.toFixed(1),
    top: top.toFixed(1),
  }
}
