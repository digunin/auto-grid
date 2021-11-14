import { useContext } from 'react'
import Context from '../store/settingContext'

const useSettings = (side = null) => {
  const context = useContext(Context)
  let { actions, cards_count, active_settings_tab, front, back } = context

  let selected = context[active_settings_tab].selected
  let selectedKey = selected?.key || null
  let selectedType = selected?.type || null
  if (selected) {
    selected = context[active_settings_tab][selected.type][selectedKey]
  } else {
    selected = null
  }

  let tmp = {}
  if (side) tmp = context[side]
  let { bgImage, txt, barcodes } = tmp

  return {
    actions,
    cards_count,
    active_settings_tab,
    front,
    back,
    selected,
    selectedKey,
    selectedType,
    bgImage,
    barcodes,
    txt,
  }
}

export default useSettings
