import React, { useEffect, useRef } from 'react'

const ManualDataInputPicker = ({ onchange, defaultData }) => {
  const textArea = useRef()
  useEffect(() => {
    if (defaultData) {
      let str = defaultData.join('\n')
      textArea.current.value = str
      onchange(str)
    }
  }, [defaultData])
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
