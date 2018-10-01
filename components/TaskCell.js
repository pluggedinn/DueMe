import React from "react"
import { withNavigation } from 'react-navigation'
import { connect } from "react-redux"
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import core from '../assets/styles/core'
import { completeTask } from '.././store/actions'

// props: expand: expands item showing buttons | boolean
//        item: data that contains all about the task | Object
class TaskCell extends React.Component {
  constructor() {
    super()
    console.log('TaskCell')
    this.state = {
      expand: null
    }
  }

  componentDidMount() {
    this.setState({ expand: this.props.index == 0 ? true : false})
  }

  render() {
    let hoursLeft = this.props.item.estimate - this.props.item.progress

    return (
      <View style = { [core.border, style.card] }>
        <TouchableOpacity
          onPress = {() => this.props.navigation.push('DetailsScreen', { taskId: this.props.item.id })}>
          <View style = { style.cardRow }>
            <Text style = { core.border }>{ this.props.item.estimate }</Text>
            <Text style = { core.border }>{ this.props.item.title }</Text>
            <Button title = "A" onPress = {() => { this.setState({expand : !this.state.expand}) } }></Button>
          </View>
          { this.state.expand && <View style = { style.cardRow }>
            <Button title = "DONE" onPress = {() => this.props.setCompleted(this.props.item.id)}></Button>
            <Button title = "ADVANCE+" onPress = {() => (null)}></Button>
            <Text style = {[core.border,{ marginLeft: 'auto', marginTop: 'auto' }]}>{ hoursLeft }h left</Text>
          </View> }
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  card: {
    marginBottom: 10
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 16
  }
})
const mapDispatchToProps = (dispatch) => {
    return {
      setCompleted: (taskid) => {
        dispatch(completeTask(taskid))
      }
    }
}

export default connect(null, mapDispatchToProps)(withNavigation(TaskCell))
