import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFilePicker } from 'use-file-picker'
import { setImageFile } from '@/redux/reducers/commonReducer'
import separatedEntitiesSelector from '@/redux/selectors/separatedEntitiesSelector'

const useImagePicker = (side) => {
  const dispatch = useDispatch()
  const [showError, setShowError] = useState(true)

  const { bgImage } = useSelector(separatedEntitiesSelector())

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: false,
    limitFilesConfig: { max: 2 },
    // minFileSize: 1,
    maxFileSize: 1.89, // in megabytes
  })

  useEffect(() => {
    if (filesContent.length != 0) {
      dispatch(setImageFile(filesContent[0]))
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
          'Слишком большой файл. Максимальный размер примерно 1.9 Мб. Рекомендуемый размер - как можно меньше'
        break
      }
      errorMessage = 'Не удалось открыть файл'
    }
  }

  return {
    openFileSelector,
    bgImage,
    onDelete: () => dispatch(setImageFile(null)),
    errorMessage,
  }
}

export default useImagePicker
