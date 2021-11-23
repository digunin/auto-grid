import React from 'react'
import { possibleFonts, Detector } from '../../utils'

const FontPicker = ({ onchange, selected }) => {
  let detector = new Detector()
  return (
    <div className="picker-wrapper">
      <div
      // style={{
      //   display: 'grid',
      //   gap: '1em',
      //   gridTemplateColumns: '1fr 2fr 2fr',
      // }}
      >
        <label>
          Шрифт
          <br />
          <select
            name="select"
            defaultValue={selected.fontFamily}
            onChange={(e) => onchange({ fontFamily: e.target.value })}
          >
            {possibleFonts.map((font_family) => {
              return (
                detector.detect(font_family) && (
                  <option
                    style={{ fontFamily: `${font_family}` }}
                    key={font_family}
                    value={font_family}
                  >
                    {font_family}
                  </option>
                )
              )
            })}
          </select>
        </label>
      </div>
    </div>
  )
}

export default FontPicker
