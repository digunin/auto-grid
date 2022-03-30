import React from 'react'

const DataPicker = ({ mode, name = '' }) => {
  return (
    <div>
      {mode == 'gen' && 'Сгенерировать последовательность'}
      {mode == 'man' && 'Ручной ввод'}
      {mode == 'edit' && `Редактировать: ${name}`}
    </div>
  )
}

export default DataPicker
