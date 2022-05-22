import React, { useEffect, useState } from 'react'
import useSettings from '../useSettings'
import { useFilePicker } from 'use-file-picker'

const SettingsSaveLoad = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const {
    actions: { setNewState },
    stateStringify,
  } = useSettings(null, true)
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
        setNewState(JSON.parse(filesContent[0].content))
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
      <a
        className="as-button"
        role="button"
        href={URL.createObjectURL(
          new Blob([stateStringify], { type: 'application/json' })
        )}
        download="example.json"
      >
        Сохранить настройки
      </a>
      {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
    </div>
  )
}

export default SettingsSaveLoad
