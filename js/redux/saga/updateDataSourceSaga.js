import { put, select } from 'redux-saga/effects'
import { selectDataFromSource } from '../../utils'

export function* updateDataSourceSaga(action) {
  // set entities data with entity.data_source_id = action.payload.name
}

export function* updateDataSourcePropsSaga(action) {
  let dataSource = yield select((state) => state.dataSet)
  Object.keys(dataSource.sources).forEach((source_name) => {
    // set entities data with entity.data_source_id = source_name
  })
}
