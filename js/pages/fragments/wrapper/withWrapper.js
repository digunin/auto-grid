import React from "react";
import useWrapper from "./useWrapper";
import { Typography, Popover } from "@mui/material";

const withWrapper = (Fragment) => {
  const viewModeNames = {
    default: 0,
    preview: 1,
    fullview: 2,
  };
  function Wrapper({ children, ...props }) {
    const {
      viewMode,
      mouseEnterHandler,
      mouseLeaveHandler,
      clickHandler,
      anchorPosition,
      transformOrigin,
    } = useWrapper(viewModeNames);

    return (
      <>
        <Typography
          component="span"
          aria-owns={
            viewMode === viewModeNames.preview
              ? "mouse-over-popover"
              : undefined
          }
          aria-haspopup="true"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={clickHandler}
          className="media-fragment-link"
        >
          {children}
        </Typography>

        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={viewMode === viewModeNames.preview}
          anchorReference="anchorPosition"
          anchorPosition={anchorPosition}
          transformOrigin={transformOrigin}
          onClose={mouseLeaveHandler}
          disableRestoreFocus
        >
          <Typography
            sx={{
              backgroundColor: "rgba(28, 223, 64, 0.3)",
              padding: "3px",
            }}
            component="p"
          >
            Нажмите для просмотра
          </Typography>
        </Popover>
      </>
    );
  }
  return Wrapper;
};

export default withWrapper;
