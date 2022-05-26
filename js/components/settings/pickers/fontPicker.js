import React, { useEffect } from 'react'
import { possibleFonts, Detector } from '../../../utils'
import useSettings from '../../useSettings'

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

  const alignOptions = [
    ['left', 'По левому краю'],
    ['center', 'По центру'],
    ['right', 'По правому краю'],
  ]

  return (
    <div className="picker-wrapper">
      <div
        style={{
          display: 'flex',
          flexFlow: 'flow',
          gap: '5px',
          alignItems: 'end',
        }}
      >
        <label>
          Шрифт
          <br />
          <select
            style={{ width: '150px' }}
            name="select"
            value={selected.fontFamily}
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
        <label>
          Размер шрифта
          <br />
          <input
            value={selected.fontSize}
            type="number"
            name="spiner"
            min="0"
            max="50"
            step="0.1"
            onChange={(e) => {
              onchange({ fontSize: e.target.value })
            }}
          />
        </label>
        <label>
          Выравнивание
          <br />
          <select
            style={{ width: '150px' }}
            name="select"
            value={selected.align}
            onChange={(e) => onchange({ align: e.target.value })}
          >
            {alignOptions.map(([value, text]) => {
              return (
                <option key={value} value={value}>
                  {text}
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
