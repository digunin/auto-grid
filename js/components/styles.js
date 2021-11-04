import React, { useContext } from 'react'
import Context from '../store/settingContext'

const Styles = () => {
  const { data_set } = useContext(Context)
  const style = data_set.txt.txt1

  const style_str = `.numbering {
      color: ${style.color};
      font-size: ${style.fontSize};
      text-align: ${style.align};
      top: ${style.top}mm;
      left: ${style.left}mm
  };`

  return <style>{style_str}</style>
}

export default Styles
