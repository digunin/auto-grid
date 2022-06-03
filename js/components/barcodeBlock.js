import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Barcode from './barcode'
import { changeEntity } from '../redux/reducers/datasetReducer'
import { useDispatch } from 'react-redux'

const BarcodeBlock = ({ barcodes, selected_id, onclick, index, inSetting }) => {
  const dispatch = useDispatch()
  return (
    <>
      {barcodes.map((barcode) => {
        let printBarcode =
          (barcode.data[index] !== undefined && barcode.data[index] !== '') ||
          inSetting
        return (
          printBarcode && (
            <ErrorBoundary
              key={`id${barcode.id}`}
              fallback={
                <div className={`barcode ${barcode.id}`}>
                  <button
                    onClick={() => {
                      dispatch(changeEntity(barcode.id, { format: 'code128' }))
                    }}
                  >
                    Сброс
                  </button>
                  <div
                    style={{
                      backgroundColor: 'white',
                      padding: '3px',
                      fontSize: '10px',
                    }}
                  >
                    Некорректное значение. Поменяйте формат штрих-кода или
                    исправьте значение. Если настройки пропали - нажмите сброс.
                  </div>
                  <button
                    onClick={() => {
                      dispatch(changeEntity(barcode.id, { format: 'code128' }))
                    }}
                  >
                    Сброс
                  </button>
                </div>
              }
              resetKeys={[barcode.format]}
            >
              <Barcode
                onclick={(e) => {
                  e.stopPropagation()
                  onclick(barcode.id)
                }}
                subclass={`${barcode.id}${
                  barcode.id === selected_id ? ' selected' : ''
                }`}
                key={barcode.id}
                value={
                  barcode.data.length === 0
                    ? '000000000000'
                    : barcode.data[index]
                }
                barcode={barcode}
              />
            </ErrorBoundary>
          )
        )
      })}
    </>
  )
}

export default BarcodeBlock
