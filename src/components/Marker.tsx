import { type } from '@testing-library/user-event/dist/type'
import React, { Component } from 'react'

type MyProps = {
    lng:Number,
    lat: Number
}

type MyState = {};

export default class Marker extends Component <MyProps, MyState> {
  render() {
    return (
      <div>Marker</div>
    )
  }
}
