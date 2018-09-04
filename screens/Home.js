import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import FilterBar from '../components/FilterBar'
import SvgUri from 'react-native-svg-uri'

export default class Home extends Component {
  static navigationOptions =  ({ navigation }) => ({
    title: 'Tasks',
    headerRight: (
      <TouchableOpacity
        style = {{ marginRight: 16 }}
        onPress = { () => {
          navigation.push('NewTaskScreen')
        }}>
        <SvgUri
          width = '25'
          height = '25'
          source = { require('.././assets/icons/add.svg') } />
      </TouchableOpacity>
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
