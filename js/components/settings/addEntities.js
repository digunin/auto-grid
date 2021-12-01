import React from 'react'
import reducer from '../../store/reducer'
import useSettings from '../useSettings'

const AddEntities = () => {
  const {
    actions: { addEntity },
  } = useSettings()
  return (
    <div className="picker-wrapper">
      <button onClick={() => addEntity('barcode')}>Добавить штрих-код</button>

      <button
        style={{ marginRight: '1em', marginLeft: '1em' }}
        onClick={() => addEntity('txt')}
      >
        Добавить текстовое поле
      </button>
      <button onClick={() => addEntity('qrcode')}>Добавить qr-код</button>
    </div>
  )
}

export default AddEntities
