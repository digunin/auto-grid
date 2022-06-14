import React from 'react'
import useImageControlButtons from './useImageControlButtons'

const ImageControlButtons = () => {
  const { scales, fits, currentScale, currentFit, handleScale, handleFit } =
    useImageControlButtons()

  return (
    <div className="picker-wrapper">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {scales.map((scale) => {
            let style = {
              boxShadow:
                scale === currentScale
                  ? '0 0 5px 5px var(--active-color)'
                  : 'inherit',
            }
            return (
              <button
                key={`scale-button-${scale}`}
                style={style}
                onClick={() => handleScale(scale)}
              >{`x${scale}`}</button>
            )
          })}
        </div>
        <div>
          {fits.map(({ description, value }) => {
            let style = {
              boxShadow:
                value === currentFit
                  ? '0 0 5px 5px var(--active-color)'
                  : 'inherit',
            }
            return (
              <button
                key={`fit-button-${value}`}
                style={style}
                onClick={() => handleFit(value)}
              >
                {description}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ImageControlButtons
