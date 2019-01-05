import React from "react"
import { withNavigation } from 'react-navigation'
import Dialog from "react-native-dialog"
import SvgUri from 'react-native-svg-uri'
import { connect } from "react-redux"
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import core from '../assets/styles/core'
import { completeTask, addHoursTask } from '.././store/actions'
import { percentProgress } from '.././store/selectors'

// props:
// - index | Integer: the priority number
// - item | Object: data that contains all about the task 
class TaskCell extends React.Component {
  constructor() {
    super()
    // console.log('TaskCell')

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
    let hoursLeft = (this.props.item.estimate - this.props.item.progress).toFixed(1)
    let progress = percentProgress(this.props.item)

    return (
      <View elevation={3} style={ style.card }>
        <Dialog.Container visible={ this.state.dialog }>
          <Dialog.Title>How many hours did you do?</Dialog.Title>
          <Dialog.Input onChangeText={(text) => this.setState({ hoursAmount: text })} />
          <Dialog.Button label="Nevermind" onPress={() => this.setState({ dialog: false, hoursAmount: 0})} />
          <Dialog.Button label="Add" onPress={() => this.handleAdd()}/>
        </Dialog.Container>
        <TouchableOpacity
          onPress={() => this.props.navigation.push('DetailsScreen', { taskId: this.props.item.id })}>
          <View style={ style.cardRow }>
            <Text style={ style.priorityNumber }>#{ this.props.index + 1 }</Text>
            <Text style={ style.title }>{ this.props.item.title }</Text>
            <TouchableOpacity onPress={() => { this.setState({expand : !this.state.expand}) }}
              style={{ marginLeft: 'auto' }}>
              <SvgUri width='25' height='25' source={ require('.././assets/icons/caret_down.svg') }/>
            </TouchableOpacity>
          </View>
          { this.state.expand && <View style={ style.cardRow }>
            <TouchableOpacity onPress={() => this.props.setCompleted(this.props.item.id)}>
              <Text style={ style.doneBtn }>DONE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ dialog: true})}>
              <Text style={ style.advanceBtn }>ADVANCE+</Text>
            </TouchableOpacity>
            <Text style={ style.timeLeft }>{ hoursLeft > 1 ? hoursLeft + ' hs left' : hoursLeft + ' h left' }</Text>
          </View> }
        </TouchableOpacity>
        <View style={ [style.progressBar] }>
          <View style={{ flex: progress, backgroundColor: 'green' }}></View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  card: {
    marginBottom: 13,
    backgroundColor: 'white',
    borderRadius: 2
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 16,
    paddingLeft: 16
  },
  progressBar: {
    flexDirection: 'row',
    height: 2.5,
    backgroundColor: 'red',
    borderRadius: 4
  },
  timeLeft: {
    fontSize: 23,
    marginLeft: 'auto',
    opacity: 0.87
  },
  title: {
    fontSize: 22
  },
  priorityNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 18
  },
  doneBtn: {
    color: '#09AF00',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0
  },
  advanceBtn: {
    color: '#0D47A1',
    padding: 10
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
