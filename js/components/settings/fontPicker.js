import React, { useEffect } from 'react'
import { possibleFonts, Detector } from '../../utils'
import useSettings from '../useSettings'

const FontPicker = ({ onchange, selected }) => {
  let {
    actions: { setSystemFonts },
    systemFonts,
  } = useSettings()
  useEffect(() => {
    let detector = new Detector()
    let fonts = possibleFonts.filter((fontName) => detector.detect(fontName))
    setSystemFonts(fonts)
  }, [])
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
            {systemFonts.map((font_family) => {
              return (
                <option
                  style={{ fontFamily: `${font_family}` }}
                  key={font_family}
                  value={font_family}
                >
                  {font_family}
                </option>
              )
            })}
          </select>
        </label>
      </div>
    </div>
  )
}

export default FontPicker
