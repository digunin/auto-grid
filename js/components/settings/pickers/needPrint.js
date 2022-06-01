import React from 'react'
import { useSelector } from 'react-redux'
import printingSelector from '../../../redux/selectors/printingSelector'

const NeedPrint = ({ onchange }) => {
  const { needPrint } = useSelector(printingSelector)
  return (
    <div
      className="picker-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: '1em',
      }}
    >
      <label>
        <input
          onChange={(e) => {
            onchange({ front: !e.target.checked })
          }}
          checked={!needPrint.front}
          type="checkbox"
        />
        Не печатать лицо
      </label>
      <label>
        <input
          onChange={(e) => {
            onchange({ back: !e.target.checked })
          }}
          checked={!needPrint.back}
          type="checkbox"
        />
        Не печатать оборот
      </label>
    </div>
  )
}

export default NeedPrint
