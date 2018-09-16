import React from "react"
import { View, FlatList } from "react-native"
import { connect } from "react-redux"
import TaskCell from "./TaskCell"
import core from '../assets/styles/core'

class FlatListTasks extends React.Component {
  constructor(props) {
    super(props)
    console.log('FlatLista', this.props.tasks)
  }

  render() {
    return (
      <View style = { core.row }>
        <FlatList
          data = { this.props.tasks }
          keyExtractor = { item => 'task-'+item.id }
          renderItem = {({ item, index }) => ( <TaskCell item = { item } index = { index }></TaskCell> ) } />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(FlatListTasks)