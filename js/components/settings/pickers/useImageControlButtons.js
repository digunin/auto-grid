import { useDispatch, useSelector } from 'react-redux'
import {
  setBlockInsideBlockWrapperScale,
  setImageFit,
} from '@/redux/reducers/commonReducer'
import printingSelector from '@/redux/selectors/printingSelector'
import getImageStyleSelector from '@/redux/selectors/getImageStyleSelector'

export default () => {
  const scales = [1, 1.5, 2, 2.5, 3]
  const fits = [
    {
      description: 'Уместить',
      value: 'contain',
    },
    {
      description: 'Заполнить',
      value: 'cover',
    },
  ]

  const dispatch = useDispatch()

  const { active_settings_side: side } = useSelector(printingSelector)

  const currentScale = useSelector(
    (state) => state.common.blockInsideBlockWrapperScale
  )

  const { frontStyle, backStyle } = useSelector(getImageStyleSelector)
  const { fit: currentFit } = side === 'front' ? frontStyle : backStyle

  return {
    scales,
    fits,
    currentScale,
    currentFit,
    handleScale: (scale) => dispatch(setBlockInsideBlockWrapperScale(scale)),
    handleFit: (fit) => dispatch(setImageFit(fit)),
  }
}
