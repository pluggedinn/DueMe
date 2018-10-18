import React, { Component } from 'react'
import Dialog from "react-native-dialog"
import SvgUri from 'react-native-svg-uri'
import _ from 'underscore'
import { connect } from "react-redux"
import { completeTask, addHoursTask, deleteTask } from '.././store/actions'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import core from '../assets/styles/core'

export class Details extends Component {
  static navigationOptions = ({ navigation }) => {
    return ({
      title: navigation.state.params.taskData ? navigation.state.params.taskData.title : '',
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
    this.state = {
      hoursAmount: 0,
      dialog: false
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ taskData: this.props.task })
  }
  componentDidUpdate(prevProps) {
    if (this.props.task) {
      if (!_.isEqual(this.props.task.title, prevProps.task.title)) {
        this.props.navigation.setParams({ taskData: this.props.task })
      }
    }
  }

  handleComplete() {
    this.props.setCompleted(this.props.task.id)
    this.props.navigation.goBack()
  }
  handleDelete() {
    this.props.deleteTask(this.props.task.id)
    this.props.navigation.goBack()
  }
  handleAdd() {
    this.props.addHoursTask(this.props.task.id, this.state.hoursAmount)
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style = { core.columnContainer }>
        <Dialog.Container visible = { this.state.dialog }>
          <Dialog.Title>How many hours did you do?</Dialog.Title>
          <Dialog.Input onChangeText = {(text) => this.setState({ hoursAmount: text })} />
          <Dialog.Button label = "Nevermind" onPress = {() => this.setState({ dialog: false, hoursAmount: 0})} />
          <Dialog.Button label = "Add" onPress = {() => this.handleAdd()}/>
        </Dialog.Container>
        <TouchableOpacity
          style = { core.row }
          onPress = {() => this.handleComplete()}>
          <SvgUri
            width = '25'
            height = '25'
            source = { require('../assets/icons/done.svg') } />
          <Text>Set done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = { core.row }
          onPress = {() => { this.setState({dialog : !this.state.dialog}) }}>
          <SvgUri
            width = '25'
            height = '25'
            source = { require('../assets/icons/add.svg') } />
          <Text>Add hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = { core.row }
          onPress = {() => this.handleDelete()}>
          <SvgUri
            width = '25'
            height = '25'
            source = { require('../assets/icons/delete.svg') } />
          <Text>Delete task</Text>
        </TouchableOpacity>
        <Text style = { [core.row, styles.title] }>Description</Text>
        <Text style = { core.row }>
          { this.props.task ? this.props.task.description : 'N/A' }
        </Text>
        <View style = { [core.row, { justifyContent: 'space-between' }] }>
          <Text style = { styles.title }>Current Rank in List</Text>
        </View>
        <View style = { [core.row, { justifyContent: 'space-between' }] }>
          <Text style = { styles.title }>Current Hours Done</Text>
          <Text>{ this.props.task ? this.props.task.progress : '' } hours</Text>
        </View>
        <View style = { [core.row, { justifyContent: 'space-between' }] }>
          <Text style = { styles.title }>Priority</Text>
          <Text>{ this.props.task ? this.props.task.priority : '' }</Text>
        </View>
        <View style = { [core.row, { justifyContent: 'space-between' }] }>
          <Text style = { styles.title }>Due date</Text>
          <Text>{ this.props.task ? this.props.task.due.toString() : '' }</Text>
        </View>
        <View style = { [core.row, { justifyContent: 'space-between' }] }>
          <Text style = { styles.title }>Estimate</Text>
          <Text>{ this.props.task ? this.props.task.estimate : '' } hours</Text>
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
const mapDispatchToProps = (dispatch) => {
    return {
      setCompleted: (taskid) => {
        dispatch(completeTask(taskid))
      },
      addHoursTask: (taskid, amount) => {
        dispatch(addHoursTask(taskid, amount))
      },
      deleteTask: (taskid) => {
        dispatch(deleteTask(taskid))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
