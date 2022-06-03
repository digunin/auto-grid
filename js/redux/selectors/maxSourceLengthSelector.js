export default ({
  dataSet: {
    dataSource: { sources },
  },
}) => {
  return Object.keys(sources).reduce((max, key) => {
    return max > sources[key].data.length ? max : sources[key].data.length
  }, 0)
}
