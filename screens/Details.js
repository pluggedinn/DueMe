import React, { Component } from 'react'
import { connect } from "react-redux"
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import core from '../assets/styles/core'


export class Details extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation.state.params.taskData)
    return ({
      title: 'mario',
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
          onPress = {() => navigation.push('EditNewTaskScreen', { taskData: navigation.state.params.taskData }) }>
          <SvgUri
            width = '25'
            height = '25'
            source = { require('../assets/icons/edit.svg') } />
        </TouchableOpacity>
      )
    })
  }

  constructor(props) {
    super(props)
    console.log('Detailss')
  }

  componentDidMount() {
    this.props.navigation.setParams({ taskData: this.props.task })
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
          { this.props.task.description ? this.props.task.description : 'N/A' }
        </Text>
        <View style = { [core.row, { justifyContent: 'space-between' }] }>
          <Text style = { styles.title }>Current Rank in List</Text>
        </View>
        <View style = { [core.row, { justifyContent: 'space-between' }] }>
          <Text style = { styles.title }>Current Hours Done</Text>
          <Text>{ this.props.task.progress } hours</Text>
        </View>
        <View style = { [core.row, { justifyContent: 'space-between' }] }>
          <Text style = { styles.title }>Priority</Text>
          <Text>{ this.props.task.priority }</Text>
        </View>
        <View style = { [core.row, { justifyContent: 'space-between' }] }>
          <Text style = { styles.title }>Due date</Text>
          <Text>{ this.props.task.due.toString() }</Text>
        </View>
        <View style = { [core.row, { justifyContent: 'space-between' }] }>
          <Text style = { styles.title }>Estimate</Text>
          <Text>{ this.props.task.estimate } hours</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  }
})

const mapStateToProps = (state, componentProps) => {
  let id = componentProps.navigation.getParam('taskId', 0)
  var task = state.tasks.filter(t => t.id === id)[0]
  return {
    task
  }
}

export default connect(mapStateToProps)(Details)
