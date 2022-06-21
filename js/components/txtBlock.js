import React from 'react'

const TxtBlock = ({
  txt,
  selected_id,
  onEntityMouseDown,
  index,
  inSetting,
}) => {
  return (
    <>
      {txt.map((text) => {
        let printText = text.data[index] !== undefined || inSetting
        return (
          printText && (
            <div
              onMouseDown={(e) => {
                onEntityMouseDown(text, e)
              }}
              key={text.id}
              className={`entity numbering ${text.id} ${
                selected_id === text.id ? 'selected' : ''
              }`}
            >
              <span>
                {text.data.length === 0 ? 'Текстовое поле' : text.data[index]}
              </span>
            </div>
          )
        )
      })}
    </>
  )
}

export default TxtBlock
