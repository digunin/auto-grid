import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEntity, deleteEntity } from '@/redux/reducers/datasetReducer'
import getSelectedEntitySelector from '@/redux/selectors/getSelectedEntitySelector'
import printingSelector from '../../redux/selectors/printingSelector'

const AddEntities = () => {
  const dispatch = useDispatch()
  const selected = useSelector(getSelectedEntitySelector)
  const { active_settings_side: side } = useSelector(printingSelector)
  return (
    <div className="picker-wrapper">
      <button onClick={() => dispatch(addEntity('barcode', side))}>
        Добавить штрих-код
      </button>

      <button
        style={{ marginRight: '1em', marginLeft: '1em' }}
        onClick={() => dispatch(addEntity('txt', side))}
      >
        Добавить текстовое поле
      </button>
      <button onClick={() => dispatch(addEntity('qrcode', side))}>
        Добавить qr-код
      </button>
      {selected && (
        <button
          style={{
            color: 'red',
            backgroundColor: 'white',
            boxShadow: '0 0 5px red',
            marginLeft: '1em',
          }}
          onClick={() => dispatch(deleteEntity(selected.id))}
        >
          Удалить выбранный элемент
        </button>
      )}
    </div>
  )
}

export default AddEntities
