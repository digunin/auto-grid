import { useState } from 'react'

const useWrapper = (viewModeNames) => {
  const [viewMode, setViewMode] = useState(viewModeNames.default)
  const mouseEnterHandler = (event) => setViewMode(viewModeNames.preview)
  const mouseLeaveHandler = (event) =>
    viewMode !== viewModeNames.fullview && setViewMode(viewModeNames.default)
  const clickHandler = (event) => setViewMode(viewModeNames.fullview)
  const fullviewClickHandler = (event) => {
    if (event.target.tagName == 'SPAN') setViewMode(viewModeNames.default)
  }

  const viewModeClassname =
    viewMode !== viewModeNames.default
      ? viewMode == viewModeNames.preview
        ? 'preview-fragment'
        : 'fullview-fragment'
      : null
  return {
    mouseEnterHandler,
    mouseLeaveHandler,
    clickHandler,
    fullviewClickHandler,
    viewModeClassname,
    viewMode,
  }
}

export default useWrapper
