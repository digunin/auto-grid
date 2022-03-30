import React from 'react'

const DataSourceList = ({ names }) => {
  return (
    <div>
      {names.map((name, number) => {
        return (
          <div
            style={{ textAlign: 'center' }}
            key={`source_list_item_${number}`}
          >{`${number + 1}. ${name}`}</div>
        )
      })}
    </div>
  )
}

export default DataSourceList
