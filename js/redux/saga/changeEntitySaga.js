import { put } from 'redux-saga/effects'

function* changeEntityDataSourceID(action) {
  let { id, new_props } = action.payload
  if ('data_source_id' in new_props) {
    // put changeEntity with new data
  }
}

export default changeEntityDataSourceID
