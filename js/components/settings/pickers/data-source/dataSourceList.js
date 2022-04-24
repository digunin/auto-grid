import React from 'react'
import useDataSource from './useDataSource'

const DataSourceList = ({ onclick }) => {
  const { existingNames, editing_source_name } = useDataSource()

  const activeColor = 'var(--active-color)'

  return (
    <div>
      {existingNames.map((name, number) => {
        let bgcolor = name === editing_source_name ? activeColor : 'inherit'
        return (
          <div
            style={{
              textAlign: 'center',
              backgroundColor: bgcolor,
              padding: '0.5em',
              margin: '0.5em',
              borderRadius: '0.5em',
            }}
            key={`source_list_item_${number}`}
            onClick={() => onclick(name)}
          >{`${number + 1}. ${name}`}</div>
        )
      })}
      <button onClick={() => onclick()}>Создать источних данных</button>
    </div>
  )
}

export default DataSourceList
