import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import FilterBar from '../components/FilterBar'
import FlatListTasks from '../components/FlatListTasks'
import SvgUri from 'react-native-svg-uri'
import styles from '../assets/styles/core'

export default class Home extends Component {
  static navigationOptions =  ({ navigation }) => ({
    title: 'Tasks',
    headerRight: (
      <TouchableOpacity
        style = {{ marginRight: 16 }}
        onPress = { () => {
          navigation.push('EditNewTaskScreen')
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
      <View style = { styles.columnContainer }>
        <FilterBar></FilterBar>
        <FlatListTasks></FlatListTasks>
      </View>
    )
  }
}
