import React from "react";
import { ColorPicker as Picker, createColor } from "material-ui-color";

const ColorPicker = ({ onchange, color, title = "Выберите цвет" }) => {
  return (
    <div className="picker-wrapper">
      <span>{title}</span>
      <Picker
        value={createColor(color)}
        onChange={(value) => {
          onchange({ color: `#${value.hex}` });
        }}
      />
    </div>
  );
};

export default ColorPicker;
