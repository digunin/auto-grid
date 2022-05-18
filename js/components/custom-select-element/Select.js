import React from 'react'
import Option from './Option'
import useSelect from './useSelect'

function Select({
  options = [],
  selectedValues = [],
  size = 20,
  multiple = true,
  disabled = false,
  onchange,
}) {
  const { onclick } = useSelect(selectedValues, onchange, multiple, disabled)
  return (
    <div
      style={{
        height: `calc(${size} * var(--option-height)`,
        overflowY: 'auto',
      }}
      className={disabled ? 'select-input select-disabled' : 'select-input'}
      id="select-input-element"
      onClick={(e) => {
        if (e.target.attributes.id?.nodeValue === 'select-input-element') return
        onclick(+e.target.attributes.value.value, e.shiftKey)
      }}
    >
      {options.map((value, i) => {
        let className = selectedValues.includes(i)
          ? 'option-element option-selected'
          : 'option-element'
        return (
          <Option
            key={`${i}-${value}`}
            value={i}
            text={`${`${i + 1}`.padEnd(10, '\u00A0')}${value}`}
            className={className}
          />
        )
      })}
    </div>
  )
}

export default Select
