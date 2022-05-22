import { useEffect, useState } from 'react'
import { useFilePicker } from 'use-file-picker'
import useSettings from '../../useSettings'

const useImagePicker = (side) => {
  const [showError, setShowError] = useState(true)

  const {
    bgImage,
    actions: { setImageFile },
  } = useSettings(side)

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: false,
    limitFilesConfig: { max: 2 },
    // minFileSize: 1,
    maxFileSize: 1.7, // in megabytes
  })

  useEffect(() => {
    if (filesContent.length != 0) {
      setImageFile(filesContent[0])
    }
  }, [filesContent])

  useEffect(() => {
    if (showError) setShowError(false)
  }, [side, bgImage])

  useEffect(() => {
    setShowError(true)
  }, [errors])

  let errorMessage = ''
  if (errors.length > 0 && showError) {
    for (let error of errors) {
      if ('fileSizeToolarge' in error) {
        errorMessage =
          'Слишком большой файл. Максимальный размер примерно 1.7 Мб. Рекомендуемый размер - как можно меньше'
        break
      }
      errorMessage = 'Не удалось открыть файл'
    }
  }

  return {
    openFileSelector,
    bgImage,
    setImageFile,
    errorMessage,
  }
}

export default useImagePicker
