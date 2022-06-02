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
}

export const getArrayWithIndexes = (count, shuffle = false) => {
  let array_with_indexes = []
  let tmp = []
  let baseArray = []
  for (let i = 0; i < count; i++) {
    baseArray.push(i)
  }
  if (!shuffle) return baseArray

  baseArray = shuffleForGrid(baseArray)
  for (let i in baseArray) {
    tmp.push(baseArray[i])
    if (tmp.length === 10) {
      array_with_indexes.push(tmp)
      tmp = []
    }
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
]

// Нельзя менять порядок элементов в массиве
export const dataSelectorModeInfo = [
  ['print-all', 'Печатать всё'],
  ['print-range', 'Указать диапазон'],
  ['print-selected', 'Печатать выбранные'],
]

export const selectDataFromSource = {
  [dataSelectorModeInfo[0][0]]: (arr) => arr,
  [dataSelectorModeInfo[1][0]]: (arr, from, to) => {
    //todo
  },
  [dataSelectorModeInfo[2][0]]: (arr, indexes) => {
    // todo
  },
}

export const Detector = function () {
  // a font will be compared against all the three default fonts.
  // and if it doesn't match all 3 then that font is not available.
  let baseFonts = ['monospace', 'sans-serif', 'serif']

  //we use m or w because these two characters take up the maximum width.
  // And we use a LLi so that the same matching fonts can get separated
  let testString = 'mmmmmmmmmmlli'

  //we test using 72px font size, we may use any size. I guess larger the better.
  let testSize = '72px'

  let h = document.getElementsByTagName('body')[0]

  // create a SPAN in the document to get the width of the text we use to test
  let s = document.createElement('span')
  s.style.fontSize = testSize
  s.innerHTML = testString
  let defaultWidth = {}
  let defaultHeight = {}
  for (let index in baseFonts) {
    //get the default width for the three base fonts
    s.style.fontFamily = baseFonts[index]
    h.appendChild(s)
    defaultWidth[baseFonts[index]] = s.offsetWidth //width for the default font
    defaultHeight[baseFonts[index]] = s.offsetHeight //height for the defualt font
    h.removeChild(s)
  }

  function detect(font) {
    let detected = false
    for (let index in baseFonts) {
      s.style.fontFamily = font + ',' + baseFonts[index] // name of the font along with the base font for fallback.
      h.appendChild(s)
      let matched =
        s.offsetWidth != defaultWidth[baseFonts[index]] ||
        s.offsetHeight != defaultHeight[baseFonts[index]]
      h.removeChild(s)
      detected = detected || matched
    }
    return detected
  }

  this.detect = detect
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

export const possibleFonts = [
  '@Arial Unicode MS',
  '@DFGothic-EB',
  '@DFMincho-SU',
  '@DFMincho-UB',
  '@DFPOP1-W9',
  '@MS Gothic',
  '@MS Mincho',
  '@MS PGothic',
  '@MS UI Gothic',
  '@Malgun Gothic',
  '@Malgun Gothic Semilight',
  '@Microsoft JhengHei',
  '@Microsoft JhengHei Light',
  '@Microsoft JhengHei UI',
  '@Microsoft JhengHei UI Light',
  '@Microsoft YaHei',
  '@Microsoft YaHei Light',
  '@Microsoft YaHei UI',
  '@Microsoft YaHei UI Light',
  '@MingLiU-ExtB',
  '@MingLiU_HKSCS-ExtB',
  '@NSimSun',
  '@PMingLiU-ExtB',
  '@SimSun',
  '@SimSun-ExtB',
  '@Yu Gothic',
  '@Yu Gothic Light',
  '@Yu Gothic Medium',
  '@Yu Gothic UI',
  '@Yu Gothic UI Light',
  '@Yu Gothic UI Semibold',
  '@Yu Gothic UI Semilight',
  '@ＤＦ中太楷書体',
  '@ＤＦ明朝体W5',
  'Agency FB',
  'Algerian',
  'Arabic Transparent',
  'Arial',
  'Arial Baltic',
  'Arial Black',
  'Arial CE',
  'Arial CYR',
  'Arial Cyr',
  'Arial Greek',
  'Arial Narrow',
  'Arial Rounded MT Bold',
  'Arial TUR',
  'Arial Unicode MS',
  'Bahnschrift',
  'Bahnschrift Condensed',
  'Bahnschrift Light',
  'Bahnschrift Light Condensed',
  'Bahnschrift Light SemiCondensed',
  'Bahnschrift SemiBold',
  'Bahnschrift SemiBold Condensed',
  'Bahnschrift SemiBold SemiConden',
  'Bahnschrift SemiCondensed',
  'Bahnschrift SemiLight',
  'Bahnschrift SemiLight Condensed',
  'Bahnschrift SemiLight SemiConde',
  'Baskerville Old Face',
  'Bauhaus 93',
  'Bebas Neue Bold',
  'Bebas Neue Book',
  'Bebas Neue Light',
  'Bebas Neue Regular',
  'Bebas Neue Thin',
  'Bell MT',
  'Berlin Sans FB',
  'Berlin Sans FB Demi',
  'Bernard MT Condensed',
  'Bison',
  'Bison Bold',
  'Bison Bold Itallic',
  'Bison Demi Bold',
  'Bison Demi Bold Itallic',
  'Bison Italic',
  'Bison Light',
  'Bison Light Italic',
  'Bison Thick Outline',
  'Bison Thick Outline Itallic',
  'Bison Thin Outline',
  'Bison Thin Outline Itallic',
  'Blackadder ITC',
  'Bodoni Bd BT',
  'Bodoni Bk BT',
  'Bodoni MT',
  'Bodoni MT Black',
  'Bodoni MT Condensed',
  'Bodoni MT Poster Compressed',
  'Book Antiqua',
  'Bookman Old Style',
  'Bookshelf Symbol 7',
  'Bradley Hand ITC',
  'Britannic Bold',
  'Broadway',
  'Brush Script MT',
  'Calibri',
  'Calibri Light',
  'Californian FB',
  'Calisto MT',
  'Cambria',
  'Cambria Math',
  'Candara',
  'Candara Light',
  'Castellar',
  'CentSchbkCyrill BT',
  'Centaur',
  'Century',
  'Century Gothic',
  'Century Schoolbook',
  'Century725 Cn BT',
  'Century751 BT',
  'Century751 No2 BT',
  'Century751 SeBd BT',
  'Chiller',
  'Clarendon BT',
  'Clarendon Blk BT',
  'Clarendon Lt BT',
  'Colonna MT',
  'Comic Sans MS',
  'Consolas',
  'Constantia',
  'Cooper Black',
  'Copperplate Gothic Bold',
  'Copperplate Gothic Light',
  'Corbel',
  'Corbel Light',
  'Courier',
  'Courier New',
  'Courier New Baltic',
  'Courier New CE',
  'Courier New CYR',
  'Courier New Cyr',
  'Courier New Greek',
  'Courier New TUR',
  'Curlz MT',
  'DFGothic-EB',
  'DFMincho-SU',
  'DFMincho-UB',
  'DFPOP1-W9',
  'DeVinne Txt BT',
  'Designball-Arrow-01',
  'Designball-Arrow-02',
  'Designball-Art-Design-01',
  'Designball-Art-Design-02',
  'Designball-Buildings-01',
  'Designball-Charts-01',
  'Designball-Communication-01',
  'Designball-Documents-01',
  'Designball-Documents-02',
  'Designball-Electronic-Device-01',
  'Designball-Electronic-Device-02',
  'Designball-Finance-01',
  'Designball-Location-01',
  'Designball-Social-01',
  'Designball-Users-01',
  'Designball-Users-02',
  'Designball-edu-01',
  'Designball-edu-02',
  'Designball-emotions-01',
  'Ebrima',
  'Edwardian Script ITC',
  'Elephant',
  'Embassy BT',
  'Engravers MT',
  'EngraversGothic BT',
  'Eras Bold ITC',
  'Eras Demi ITC',
  'Eras Light ITC',
  'Eras Medium ITC',
  'Exotc350 Bd BT',
  'Exotc350 DmBd BT',
  'Felix Titling',
  'Fixedsys',
  'Footlight MT Light',
  'Formular',
  'Forte',
  'Franklin Gothic Book',
  'Franklin Gothic Demi',
  'Franklin Gothic Demi Cond',
  'Franklin Gothic Heavy',
  'Franklin Gothic Medium',
  'Franklin Gothic Medium Cond',
  'Freehand521 BT',
  'Freestyle Script',
  'French Script MT',
  'Futura Bk BT',
  'Futura Md BT',
  'Gabriola',
  'Gadugi',
  'Garamond',
  'GeoSlab703 Md BT',
  'GeoSlab703 MdCn BT',
  'Geometr212 BkCn BT',
  'Geometr415 Blk BT',
  'Geometr706 BlkCn BT',
  'Georgia',
  'Gigi',
  'Gill Sans MT',
  'Gill Sans MT Condensed',
  'Gill Sans MT Ext Condensed Bold',
  'Gill Sans Ultra Bold',
  'Gill Sans Ultra Bold Condensed',
  'Gloucester MT Extra Condensed',
  'Goudy Old Style',
  'Goudy Stout',
  'Haettenschweiler',
  'Harlow Solid Italic',
  'Harrington',
  'High Tower Text',
  'HoloLens MDL2 Assets',
  'Humanst521 BT',
  'Humanst521 Lt BT',
  'Humnst777 BT',
  'Humnst777 Blk BT',
  'Humnst777 BlkCn BT',
  'Humnst777 Cn BT',
  'Humnst777 Lt BT',
  'Impact',
  'Imprint MT Shadow',
  'Informal Roman',
  'Ink Free',
  'Javanese Text',
  'Jokerman',
  'Juice ITC',
  'Kaufmann BT',
  'Kristen ITC',
  'Kunstler Script',
  'Leelawadee UI',
  'Leelawadee UI Semilight',
  'Lucida Bright',
  'Lucida Calligraphy',
  'Lucida Console',
  'Lucida Fax',
  'Lucida Handwriting',
  'Lucida Sans',
  'Lucida Sans Typewriter',
  'Lucida Sans Unicode',
  'MS Gothic',
  'MS Mincho',
  'MS Outlook',
  'MS PGothic',
  'MS Reference Sans Serif',
  'MS Reference Specialty',
  'MS Sans Serif',
  'MS Serif',
  'MS UI Gothic',
  'MT Extra',
  'MV Boli',
  'Magneto',
  'Maiandra GD',
  'Malgun Gothic',
  'Malgun Gothic Semilight',
  'Marlett',
  'Matura MT Script Capitals',
  'Microsoft Himalaya',
  'Microsoft JhengHei',
  'Microsoft JhengHei Light',
  'Microsoft JhengHei UI',
  'Microsoft JhengHei UI Light',
  'Microsoft New Tai Lue',
  'Microsoft PhagsPa',
  'Microsoft Sans Serif',
  'Microsoft Tai Le',
  'Microsoft YaHei',
  'Microsoft YaHei Light',
  'Microsoft YaHei UI',
  'Microsoft YaHei UI Light',
  'Microsoft Yi Baiti',
  'Mike Sans Free',
  'MingLiU-ExtB',
  'MingLiU_HKSCS-ExtB',
  'Mistral',
  'Modern',
  'Modern No. 20',
  'Mongolian Baiti',
  'Monotype Corsiva',
  'Montserrat',
  'Montserrat Black',
  'Montserrat ExtraBold',
  'Montserrat ExtraLight',
  'Montserrat Light',
  'Montserrat Medium',
  'Montserrat SemiBold',
  'Montserrat Thin',
  'Myanmar Text',
  'NSimSun',
  'News701 BT',
  'News706 BT',
  'NewsGoth BT',
  'NewsGoth Lt BT',
  'Niagara Engraved',
  'Niagara Solid',
  'Nirmala UI',
  'Nirmala UI Semilight',
  'Norwester',
  'OCR A Extended',
  'OCR-A BT',
  'OCR-B 10 BT',
  'Old English Text MT',
  'Onyx',
  'PF Bague Sans Pro',
  'PMingLiU-ExtB',
  'Palace Script MT',
  'Palatino Linotype',
  'Papyrus',
  'Parchment',
  'Peace Sans',
  'Perpetua',
  'Perpetua Titling MT',
  'Playbill',
  'Ponter S',
  'Poor Richard',
  'Pristina',
  'Rage Italic',
  'Ravie',
  'Roboto',
  'Roboto Bk',
  'Roboto Cn',
  'Roboto Lt',
  'Roboto Slab',
  'Roboto Th',
  'Rockwell',
  'Rockwell Condensed',
  'Rockwell Extra Bold',
  'Roman',
  'Schadow BT',
  'Script',
  'Script MT Bold',
  'Segoe MDL2 Assets',
  'Segoe Print',
  'Segoe Script',
  'Segoe UI',
  'Segoe UI Black',
  'Segoe UI Emoji',
  'Segoe UI Historic',
  'Segoe UI Light',
  'Segoe UI Semibold',
  'Segoe UI Semilight',
  'Segoe UI Symbol',
  'Showcard Gothic',
  'SimSun',
  'SimSun-ExtB',
  'Sitka Banner',
  'Sitka Display',
  'Sitka Heading',
  'Sitka Small',
  'Sitka Subheading',
  'Sitka Text',
  'Small Fonts',
  'Snap ITC',
  'Square721 BT',
  'Square721 Cn BT',
  'Stencil',
  'Swis721 BT',
  'Swis721 Blk BT',
  'Swis721 BlkCn BT',
  'Swis721 Cn BT',
  'Swis721 Hv BT',
  'Swis721 Lt BT',
  'Swis721 LtEx BT',
  'Swis721 WGL4 BT',
  'Sylfaen',
  'Symbol',
  'System',
  'Tahoma',
  'Tempus Sans ITC',
  'Terminal',
  'Times New Roman',
  'Times New Roman Baltic',
  'Times New Roman CE',
  'Times New Roman CYR',
  'Times New Roman Cyr',
  'Times New Roman Greek',
  'Times New Roman TUR',
  'Trebuchet MS',
  'Tw Cen MT',
  'Tw Cen MT Condensed',
  'Tw Cen MT Condensed Extra Bold',
  'TypoUpright BT',
  'Verdana',
  'Viner Hand ITC',
  'Vivaldi',
  'Vladimir Script',
  'Webdings',
  'Wide Latin',
  'Wingdings',
  'Wingdings 2',
  'Wingdings 3',
  'Yu Gothic',
  'Yu Gothic Light',
  'Yu Gothic Medium',
  'Yu Gothic UI',
  'Yu Gothic UI Light',
  'Yu Gothic UI Semibold',
  'Yu Gothic UI Semilight',
  'ＤＦ中太楷書体',
  'ＤＦ明朝体W5',
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
