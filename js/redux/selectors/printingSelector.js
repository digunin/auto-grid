export default (state) => {
  return {
    cards_count: state.dataSet.cardsCount,
    needPrint: state.common.needPrint,
    printingMode: state.common.printingMode,
    active_settings_side: state.common.active_settings_side,
  }
}
