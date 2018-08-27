import React, { Component } from 'react'
import FilterBar from '.././components/FilterBar'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Tasks',
  }

  constructor() {
    super()
    console.log("Home")
  }

  render() {
    return (
      <FilterBar></FilterBar>
    )
  }
}
