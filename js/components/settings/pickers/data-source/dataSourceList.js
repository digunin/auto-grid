import React from 'react'
import useDataSource from './useDataSource'

const DataSourceList = ({ onclick, ondelete }) => {
  const { existingNames, editing_source_name } = useDataSource()

  const activeColor = 'var(--active-color)'

  return (
    <div>
      {existingNames.map((name, number) => {
        let bgcolor = name === editing_source_name ? activeColor : 'inherit'
        return (
          <div
            onClick={() => onclick(name)}
            key={`source_list_item_${number}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: bgcolor,
              padding: '0.5em',
              margin: '0.5em',
              borderRadius: '0.5em',
            }}
          >
            <div>{`${number + 1}. ${name}`}</div>
            <button
              style={{ marginLeft: 'auto' }}
              onClick={(e) => {
                e.stopPropagation()
                ondelete(name)
              }}
            >
              Удалить
            </button>
          </div>
        )
      })}
      <button onClick={() => onclick()}>Создать источних данных</button>
    </div>
  )
}

export default DataSourceList
