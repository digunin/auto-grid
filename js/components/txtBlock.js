import React from 'react'

const TxtBlock = ({ txt, selected_id, onclick, index, inSetting }) => {
  return (
    <>
      {txt.map((text) => {
        let printText = text.data[index] !== undefined || inSetting
        console.log(printText)
        return (
          printText && (
            <div
              onClick={(e) => {
                e.stopPropagation()
                onclick(text.id)
              }}
              key={text.id}
              className={`numbering ${text.id} ${
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
