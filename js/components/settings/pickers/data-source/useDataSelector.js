import { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { dataSelectorModeInfo } from '../../../../utils'
import {
  setEntitiesData,
  setCardsCount,
  setDataSourceProps,
} from '@/redux/reducers/datasetReducer'

const useDataSelector = ({ selected, selectedDataSource, dataSourceProps }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    handleChildChange(dataSourceProps.data_selector_mode)
  }, [
    selected.id,
    selected.data_source_id,
    dataSourceProps.data_selector_mode,
    JSON.stringify(dataSourceProps.selected_indexes),
    JSON.stringify(dataSourceProps.diapason),
  ])

  const diapasonFocusedInput = useRef('from')

  const handleChildChange = (mode) => {
    let start = dataSourceProps.diapason?.from - 1 || 0
    let end = dataSourceProps.diapason?.to || selectedDataSource.data.length
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
          dataSourceProps.selected_indexes?.map(
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
