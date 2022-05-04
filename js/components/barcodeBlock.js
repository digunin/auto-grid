import React from 'react'
import Barcode from './barcode'
import { ErrorBoundary } from 'react-error-boundary'
import useSettings from './useSettings'

const BarcodeBlock = ({ barcodes, selected_id, onclick, index, inSetting }) => {
  const { actions } = useSettings()
  return (
    <>
      {barcodes.map((barcode) => {
        let printBarcode = barcode.data[index] !== undefined || inSetting
        return (
          printBarcode && (
            <ErrorBoundary
              key={`id${barcode.id}`}
              fallback={
                <div className={`barcode ${barcode.id}`}>
                  <button
                    onClick={() => {
                      actions.changeEntity(barcode.id, { format: 'code128' })
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
                      actions.changeEntity(barcode.id, { format: 'code128' })
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
