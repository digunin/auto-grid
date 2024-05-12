import { useState } from "react";

const fragmentWidth = 250;
const halfFragmentWidth = fragmentWidth / 2;

const useWrapper = (viewModeNames) => {
  const [viewMode, setViewMode] = useState(viewModeNames.default);
  const [anchorPosition, setAnchorPosition] = useState({ top: 0, left: 0 });
  const [transformOrigin, setTransformOrigin] = useState({
    vertical: "top",
    horizontal: "left",
  });

  const mouseEnterHandler = (event) => {
    const { clientX, clientY } = event;
    const { scrollX, innerWidth } = window;
    console.log(top);
    const [top, vertical] =
      clientY < 70 ? [clientY + 2, "top"] : [clientY - 2, "bottom"];
    setAnchorPosition({
      left: Math.max(
        0,
        Math.min(
          clientX + scrollX - halfFragmentWidth,
          innerWidth - fragmentWidth
        )
      ),
      top,
    });
    setTransformOrigin({ horizontal: "left", vertical });
    setViewMode(viewModeNames.preview);
  };

  const mouseLeaveHandler = (event) => {
    viewMode !== viewModeNames.fullview && setViewMode(viewModeNames.default);
  };

  const clickHandler = (event) => {
    setViewMode(viewModeNames.fullview);
  };

  const fullviewClickHandler = (event) => {
    setViewMode(viewModeNames.default);
  };

  return {
    mouseEnterHandler,
    mouseLeaveHandler,
    clickHandler,
    fullviewClickHandler,
    viewMode,
    anchorPosition,
    transformOrigin,
  };
};

export default useWrapper;
