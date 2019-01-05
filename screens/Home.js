import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
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
          source = { require('.././assets/icons/add_white.svg') } />
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
        <TouchableOpacity
          style = {{ marginRight: 16 }}
          onPress = { () => {
            this.props.navigation.push('DisplayTasksScreen', { period: '1' })
          }}>
          <Text>less than 1 hour</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {{ marginRight: 16 }}
          onPress = { () => {
            this.props.navigation.push('DisplayTasksScreen', { period: '4' })
          }}>
          <Text>less than 4 hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {{ marginRight: 16 }}
          onPress = { () => {
            this.props.navigation.push('DisplayTasksScreen', { period: 'day' })
          }}>
          <Text>all day</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
