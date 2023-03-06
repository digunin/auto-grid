import { useState } from 'react'

const useWrapper = (viewModeNames) => {
  const [viewMode, setViewMode] = useState(viewModeNames.default)
  const [previewPosition, setPreviewPosition] = useState({})

  const mouseEnterHandler = (event) => {
    const { top } = event.target.getBoundingClientRect()
    const { clientX } = event
    const { scrollX, scrollY, innerHeight } = window
    setPreviewPosition({
      left: `${clientX + scrollX}px`,
      bottom: `${innerHeight - scrollY - top + 5}px`,
    })
    setViewMode(viewModeNames.preview)
  }
  const mouseLeaveHandler = (event) =>
    viewMode !== viewModeNames.fullview && setViewMode(viewModeNames.default)
  const clickHandler = (event) => {
    setViewMode(viewModeNames.fullview)
    setPreviewPosition({})
  }
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
