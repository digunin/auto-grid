import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setDataSourceProps } from '@/redux/reducers/datasetReducer'

const useDataSelector = ({ selected, selectedDataSource, dataSourceProps }) => {
  const dispatch = useDispatch()

  const diapasonFocusedInput = useRef('from')

  const onDiapasonChange = (from, to) => {
    if (from > to) {
      ;[from, to] = [to, from]
    }
    dispatch(setDataSourceProps({ diapason: { from, to } }))
  }

  const onSingleSelection = (arr) => {
    let index = arr[0] + 1
    let max = selectedDataSource.data.length
    let from = dataSourceProps.diapason?.from || 1
    let to = dataSourceProps.diapason?.to || max
    if (diapasonFocusedInput.current === 'from') {
      from = index
    } else {
      to = index
    }
    onDiapasonChange(from, to)
  }

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(selected.data.join('\n'))
      .then(() => {
        console.log('Скопировано')
      })
      .catch((err) => {
        console.log('Something went wrong', err)
      })
  }
  return {
    onSingleSelection,
    onDiapasonChange,
    copyToClipboard,
    diapasonFocusedInput,
    onReset: () => dispatch(setDataSourceProps({ selected_indexes: [] })),
  }
}

export default useDataSelector
