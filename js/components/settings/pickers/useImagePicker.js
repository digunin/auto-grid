import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFilePicker } from 'use-file-picker'
import separatedEntitiesSelector from '@/redux/selectors/separatedEntitiesSelector'
import { putImage } from '@/redux/reducers/commonReducer'

const useImagePicker = (side) => {
  const dispatch = useDispatch()
  const [showError, setShowError] = useState(true)

  const { bgImage } = useSelector(separatedEntitiesSelector())

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: false,
  })

  useEffect(() => {
    if (filesContent.length != 0) {
      dispatch(putImage(filesContent[0]))
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
    onDelete: () => dispatch(putImage(null)),
    errorMessage,
  }
}

export default useImagePicker
