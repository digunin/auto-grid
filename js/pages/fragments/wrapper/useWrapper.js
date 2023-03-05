import { useState } from 'react'

const useWrapper = (viewModeNames) => {
  const [viewMode, setViewMode] = useState(viewModeNames.default)
  const [previewPosition, setPreviewPosition] = useState({})

  const mouseEnterHandler = (event) => {
    const { bottom } = event.target.getBoundingClientRect()
    const { clientX } = event
    const { scrollX, scrollY } = window
    setPreviewPosition({
      left: `${clientX + scrollX}px`,
      top: `${bottom + scrollY + 5}px`,
    })
    setViewMode(viewModeNames.preview)
  }
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
    previewPosition,
  }
}

export default useWrapper
