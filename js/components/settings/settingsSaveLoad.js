import React, { useEffect, useState } from 'react'
import { useFilePicker } from 'use-file-picker'
import { loadState, setStateSaving } from '@/redux/reducers/commonReducer'
import { useDispatch, useSelector } from 'react-redux'
import StateSaver from './stateSaver'

const SettingsSaveLoad = () => {
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState(null)
  const isStateSaving = useSelector((state) => state.common.stateSaving)

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: 'Text', // availible formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
    accept: '.json',
    multiple: false,
    limitFilesConfig: { max: 2 },
    maxFileSize: 50,
  })

  useEffect(() => {
    if (filesContent.length != 0) {
      try {
        dispatch(loadState(JSON.parse(filesContent[0].content)))
        setErrorMessage(null)
      } catch {
        setErrorMessage(`Не удалось открыть файл ${filesContent[0].name}`)
      }
    }
  }, [filesContent])
  if (errors.length) {
    return <div style={{ color: 'red' }}>Error...</div>
  }
  return (
    <div className="picker-wrapper">
      <button onClick={() => openFileSelector()}>Загрузить настройки</button>
      <button onClick={() => dispatch(setStateSaving(true))}>
        Сохранить настройки
      </button>
      {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
      {isStateSaving ? <StateSaver /> : null}
    </div>
  )
}

export default SettingsSaveLoad
