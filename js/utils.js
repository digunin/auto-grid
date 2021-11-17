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

export const getArrayWithIndexes = (count) => {
  let array_with_indexes = []
  let tmp = []
  for (let i = 0; i < count; i++) {
    tmp.push(i)
    if (tmp.length === 10) {
      array_with_indexes.push(tmp)
      tmp = []
    }
  }
  return array_with_indexes
}

export const mock_data_500 = [
  2300005000004, 2300005000011, 2300005000028, 2300005000035, 2300005000042,
  2300005000059, 2300005000066, 2300005000073, 2300005000080, 2300005000097,
  2300005000103, 2300005000110, 2300005000127, 2300005000134, 2300005000141,
  2300005000158, 2300005000165, 2300005000172, 2300005000189, 2300005000196,
]
