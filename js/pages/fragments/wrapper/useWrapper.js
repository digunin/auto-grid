import { useState } from "react";

const fragmentWidth = 250;
const halfFragmentWidth = fragmentWidth / 2;

const useWrapper = (viewModeNames) => {
  const [viewMode, setViewMode] = useState(viewModeNames.default);
  const [previewPosition, setPreviewPosition] = useState({});

  const mouseEnterHandler = (event) => {
    const { top, bottom } = event.target.getBoundingClientRect();
    const { clientX } = event;
    const { scrollX, scrollY, innerHeight, innerWidth } = window;
    let tmp = {
      left: Math.max(
        0,
        Math.min(
          clientX + scrollX - halfFragmentWidth,
          innerWidth - fragmentWidth
        )
      ),
    };
    if (top < innerHeight / 2) {
      tmp.top = `${bottom + scrollY + 5}px`;
    } else {
      tmp.bottom = `${innerHeight - scrollY - top + 5}px`;
    }
    setPreviewPosition({
      ...tmp,
    });
    setViewMode(viewModeNames.preview);
  };
  const mouseLeaveHandler = (event) =>
    viewMode !== viewModeNames.fullview && setViewMode(viewModeNames.default);
  const clickHandler = (event) => {
    setViewMode(viewModeNames.fullview);
    setPreviewPosition({});
  };
  const fullviewClickHandler = (event) => {
    if (event.target.tagName == "SPAN") setViewMode(viewModeNames.default);
  };

  const viewModeClassname =
    viewMode !== viewModeNames.default
      ? viewMode == viewModeNames.preview
        ? "preview-fragment"
        : "fullview-fragment"
      : null;
  return {
    mouseEnterHandler,
    mouseLeaveHandler,
    clickHandler,
    fullviewClickHandler,
    viewModeClassname,
    viewMode,
    previewPosition,
  };
};

export default useWrapper;
