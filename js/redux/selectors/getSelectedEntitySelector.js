export default ({ common, dataSet }) => {
  let side = common.active_settings_side
  let entities = dataSet.entities
  let selected = entities
    .filter((entity) => entity.side === side)
    .filter((entity) => entity.selected)
  return selected[0]
}
