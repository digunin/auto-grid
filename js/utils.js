import frontjpg from '../images/front.jpg'
import backjpg from '../images/back.jpg'

export const defaultSeting = {
  front_img: frontjpg,
  back_img: backjpg,
  data_set: {
    barcodes: {
      ean13: {
        top: 30,
        left: 40,
        width: 30,
        height: 20,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
    txt: {
      txt1: {
        top: 45,
        left: 10,
        right: 40,
        align: 'left',
        color: 'black',
        fontFamily: 'Arial',
        fontSize: '12px',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
  },
}

export const lightMarkClasses = [
  'top-left-lm',
  'top-right-lm',
  'bottom-left-lm',
  'bottom-right-lm',
]

export const crossClasses = [
  'top-cross',
  'left-cross',
  'bottom-cross',
  'right-cross',
]

export const routesNames = {
  home: '/',
  setting: '/setting',
  print: '/print',
}
