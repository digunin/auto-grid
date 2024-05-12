import React from "react";
import withWrapper from "./wrapper/withWrapper";

const ImageFragment = ({ src, width = "auto" }) => {
  return <img src={src} width={width} />;
};

export default withWrapper(ImageFragment);
