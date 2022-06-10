import { useDispatch, useSelector } from 'react-redux'
import {
  setBlockInsideBlockWrapperScale,
  setImageFit,
  setImagePosition,
} from '@/redux/reducers/commonReducer'
import printingSelector from '@/redux/selectors/printingSelector'
import getImageStyleSelector from '@/redux/selectors/getImageStyleSelector'

export default () => {
  const scales = [1, 1.5, 2]
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
  const positions = [
    'top left',
    'top',
    'top right',
    'left',
    'center',
    'right',
    'bottom left',
    'bottom',
    'bottom right',
  ]

  const dispatch = useDispatch()

  const { active_settings_side: side } = useSelector(printingSelector)

  const currentScale = useSelector(
    (state) => state.common.blockInsideBlockWrapperScale
  )

  const { frontStyle, backStyle } = useSelector(getImageStyleSelector)
  const { fit: currentFit, position: currentPosition } =
    side === 'front' ? frontStyle : backStyle

  return {
    scales,
    fits,
    positions,
    currentScale,
    currentFit,
    currentPosition,
    handleScale: (scale) => dispatch(setBlockInsideBlockWrapperScale(scale)),
    handleFit: (fit) => dispatch(setImageFit(fit)),
    handlePosition: (pos) => dispatch(setImagePosition(pos)),
  }
}
