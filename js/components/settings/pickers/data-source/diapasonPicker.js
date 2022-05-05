import React, { useState } from 'react'

const DiapasonPicker = ({ from = 1, to = 10, disabled = false }) => {
  return (
    <div>
      <span>{`С${'\t'}`}</span>
      <input type="number" defaultValue={from} disabled={disabled} />
      <br />
      <span>{`По${'\t'}`}</span>
      <input type="number" defaultValue={to} disabled={disabled} />
    </div>
  )
}

export default DiapasonPicker
