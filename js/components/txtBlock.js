import React from 'react'

const TxtBlock = ({ txt, selected_id, onclick, index }) => {
  return (
    <>
      {txt.map((text) => {
        return (
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
            {text.data[index]}
          </div>
        )
      })}
    </>
  )
}

export default TxtBlock
