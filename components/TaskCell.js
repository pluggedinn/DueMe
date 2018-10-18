import React from "react"
import { withNavigation } from 'react-navigation'
import Dialog from "react-native-dialog"
import { connect } from "react-redux"
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import core from '../assets/styles/core'
import { completeTask, addHoursTask } from '.././store/actions'
import { percentProgress } from '.././store/selectors'

// props: expand: expands item showing buttons | boolean
//        item: data that contains all about the task | Object
class TaskCell extends React.Component {
  constructor() {
    super()
    console.log('TaskCella')

    this.state = {
      expand: null,
      hoursAmount: 0,
      dialog: false
    }
  }

  componentDidMount() {
    this.setState({ expand: this.props.index == 0 ? true : false})
  }
  handleAdd() {
    this.props.addHoursTask(this.props.item.id, this.state.hoursAmount)
    this.setState({ dialog: false, hoursAmount: 0})
  }

  render() {
    let hoursLeft = this.props.item.estimate - this.props.item.progress
    let progress = percentProgress(this.props.item)

    return (
      <View style = { style.card }>
        <Dialog.Container visible = { this.state.dialog }>
          <Dialog.Title>How many hours did you do?</Dialog.Title>
          <Dialog.Input onChangeText = {(text) => this.setState({ hoursAmount: text })} />
          <Dialog.Button label = "Nevermind" onPress = {() => this.setState({ dialog: false, hoursAmount: 0})} />
          <Dialog.Button label = "Add" onPress = {() => this.handleAdd()}/>
        </Dialog.Container>
        <TouchableOpacity
          onPress = {() => this.props.navigation.push('DetailsScreen', { taskId: this.props.item.id })}>
          <View style = { style.cardRow }>
            <Text style = { core.border }>{ this.props.item.id }</Text>
            <Text style = { core.border }>{ this.props.item.title }</Text>
            <Button title = "A" onPress = {() => { this.setState({expand : !this.state.expand}) }}></Button>
          </View>
          { this.state.expand && <View style = { style.cardRow }>
            <Button title = "DONE" onPress = {() => this.props.setCompleted(this.props.item.id)}></Button>
            <Button title = "ADVANCE+" onPress = {() => this.setState({ dialog: true})}></Button>
            <Text style = {[core.border,{ marginLeft: 'auto', marginTop: 'auto' }]}>{ hoursLeft }h left</Text>
          </View> }
        </TouchableOpacity>
        <View style = { [style.progressBar] }>
          <View style = {{ flex: progress, backgroundColor: 'green' }}></View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 4
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 16
  },
  progressBar: {
    flexDirection: 'row',
    height: 2,
    backgroundColor: 'red'
  }
})
const mapDispatchToProps = (dispatch) => {
    return {
      setCompleted: (taskid) => {
        dispatch(completeTask(taskid))
      },
      addHoursTask: (taskid, amount) => {
        dispatch(addHoursTask(taskid, amount))
      }
    }
}

export default connect(null, mapDispatchToProps)(withNavigation(TaskCell))
