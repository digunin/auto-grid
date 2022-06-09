export default (state) => {
  let tmp = { common: { ...state.common }, dataSet: state.dataSet }
  delete tmp.common.systemFonts
  tmp.common.stateSaving = false
  console.log('save_state selector')
  return tmp
}
