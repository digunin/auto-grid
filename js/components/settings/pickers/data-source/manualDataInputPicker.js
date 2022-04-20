import React, { useEffect, useRef } from 'react'

const ManualDataInputPicker = ({ onchange, generated_data }) => {
  const textArea = useRef()
  useEffect(() => {
    if (generated_data) {
      let str = generated_data.join('\n')
      textArea.current.value = str
      onchange(str)
    }
  }, [generated_data])
  return (
    <div>
      <textarea
        ref={textArea}
        rows={20}
        cols={40}
        onChange={(e) => onchange(e.target.value)}
      ></textarea>
    </div>
  )
}

export default ManualDataInputPicker
