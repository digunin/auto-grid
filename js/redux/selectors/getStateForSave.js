export default (state) => {
  let tmp = { common: { ...state.common }, dataSet: state.dataSet }
  delete tmp.common.systemFonts
  return tmp
}
