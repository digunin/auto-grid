export default (state) => {
  return {
    frontStyle: state.common.imageStyle?.front,
    backStyle: state.common.imageStyle?.back,
  }
}
