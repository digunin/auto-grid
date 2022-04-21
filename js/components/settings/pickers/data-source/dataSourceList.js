import React from 'react'

const DataSourceList = ({ names, editing_source_name, onclick }) => {
  return (
    <div>
      {names.map((name, number) => {
        let bgcolor =
          name === editing_source_name ? 'var(--active-color)' : 'inherit'
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
