import { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { dataSelectorModeInfo } from '../../../../utils'
import {
  setEntitiesData,
  setCardsCount,
  setDataSource,
} from '@/redux/reducers/datasetReducer'

const useDataSelector = (selected, selectedDataSource) => {
  const dispatch = useDispatch()

  useEffect(() => {
    handleChildChange(selectedDataSource.data_selector_mode)
  }, [
    selected.id,
    selected.data_source_id,
    selectedDataSource.data_selector_mode,
    JSON.stringify(selectedDataSource.selected_indexes),
    JSON.stringify(selectedDataSource.diapason),
  ])

  const diapasonFocusedInput = useRef('from')

  const handleChildChange = (mode) => {
    let start = selectedDataSource.diapason?.from - 1 || 0
    let end = selectedDataSource.diapason?.to || selectedDataSource.data.length
    end = end < 0 ? 0 : end
    switch (mode) {
      // print-all
      case dataSelectorModeInfo[0][0]:
        dispatch(
          setEntitiesData(selected.data_source_id, selectedDataSource.data)
        )
        dispatch(setCardsCount())
        break
      // print-range
      case dataSelectorModeInfo[1][0]:
        dispatch(
          setEntitiesData(
            selected.data_source_id,
            selectedDataSource.data.slice(start, end)
          )
        )
        dispatch(setCardsCount())
        break
      // print-selected
      case dataSelectorModeInfo[2][0]:
        let tmp =
          selectedDataSource.selected_indexes?.map(
            (i) => selectedDataSource.data[i]
          ) || []
        dispatch(setEntitiesData(selected.data_source_id, tmp))
        dispatch(setCardsCount())
        break
    }
  }

  const onDiapasonChange = (from, to) => {
    if (from > to) {
      ;[from, to] = [to, from]
    }
    dispatch(setDataSource(selected.data_source_id, { diapason: { from, to } }))
  }

  const onSingleSelection = (arr) => {
    let index = arr[0] + 1
    let max = selectedDataSource.data.length
    let from = selectedDataSource.diapason?.from || 1
    let to = selectedDataSource.diapason?.to || max
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
    onReset: () =>
      dispatch(
        setDataSource(selected.data_source_id, { selected_indexes: [] })
      ),
  }
}

export default useDataSelector
