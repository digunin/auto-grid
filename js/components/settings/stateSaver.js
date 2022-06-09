import React, { useEffect } from 'react'
import getStateForSave from '@/redux/selectors/getStateForSave'
import { setStateSaving } from '@/redux/reducers/commonReducer'
import { useDispatch, useSelector } from 'react-redux'

const StateSaver = () => {
  const stateStringify = JSON.stringify(useSelector(getStateForSave))
  const dispatch = useDispatch()
  const href = URL.createObjectURL(
    new Blob([stateStringify], { type: 'application/json' })
  )

  useEffect(() => {
    let a = document.createElement('a')
    a.href = href
    a.download = 'PRINT.json'
    a.click()
    dispatch(setStateSaving(false))
  }, [])

  return <div display="none"></div>
}

export default StateSaver
