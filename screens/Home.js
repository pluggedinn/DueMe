import React, { Component } from 'react'
import { View, Button } from 'react-native'
import FilterBar from '../components/FilterBar'

export default class Home extends Component {
  static navigationOptions =  ({ navigation }) => ({
    title: 'Tasks',
    headerRight: (
      <Button
        title = 'NEW TASK'
        onPress = { () => {
          navigation.push('NewTaskScreen')
        }}
      />
    )
  })

  constructor() {
    super()
    console.log("Home")
  }

  render() {
    return (
      <View>
        <FilterBar></FilterBar>
      </View>
    )
  }
}
