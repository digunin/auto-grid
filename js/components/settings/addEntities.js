import React from 'react'
import useSettings from '../useSettings'

const AddEntities = () => {
  const {
    selected,
    actions: { addEntity, deleteEntity },
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
      {selected && (
        <button
          style={{
            color: 'red',
            backgroundColor: 'white',
            border: '1px solid red',
            marginLeft: '1em',
          }}
          onClick={() => deleteEntity(selected.id)}
        >
          Удалить выбранный элемент
        </button>
      )}
    </div>
  )
}

export default AddEntities
