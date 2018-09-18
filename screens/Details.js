import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import core from '../assets/styles/core'


export class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('taskData', null) ? navigation.getParam('taskData', null).title : null,
    headerLeft: (
      <TouchableOpacity
        style = {{ marginLeft: 16 }}
        onPress = {() => navigation.goBack() }>
        <SvgUri
          width = '25'
          height = '25'
          source = { require('../assets/icons/clear.svg') } />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style = {{ marginRight: 21 }}
        onPress = {() => navigation.push('EditNewTaskScreen', { taskData: navigation.getParam('taskData', null) }) }>
        <SvgUri
          width = '25'
          height = '25'
          source = { require('../assets/icons/edit.svg') } />
      </TouchableOpacity>
    )
  })

  constructor(props) {
    super(props)
    this.state = { data: props.navigation.getParam('taskData', null) }
    console.log('Details')
  }

  render() {
    return (
      <View style = { core.columnContainer }>
        <TouchableOpacity
          style = { core.row }
          onPress = {(null) }>
          <SvgUri
            width = '25'
            height = '25'
            source = { require('../assets/icons/done.svg') } />
          <Text>Set done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = { core.row }
          onPress = {(null)}>
          <SvgUri
            width = '25'
            height = '25'
            source = { require('../assets/icons/add.svg') } />
          <Text>Add hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = { core.row }
          onPress = {(null)}>
          <SvgUri
            width = '25'
            height = '25'
            source = { require('../assets/icons/delete.svg') } />
          <Text>Delete task</Text>
        </TouchableOpacity>
        <Text style = { [core.row, styles.title] }>Description</Text>
        <Text style = { core.row }>
          { this.state.data.description ? this.state.data.description : 'N/A' }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  }
})

export default Details
