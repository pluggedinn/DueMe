import React from "react"
import { View, FlatList } from "react-native"
import { connect } from "react-redux"
import { getTasksCurrentFilter, sortByPriorityDueProgress } from '../store/selectors'
import FilterBar from '../components/FilterBar'
import TaskCell from "./TaskCell"
import core from '../assets/styles/core'

class FlatListTasks extends React.Component {
  constructor(props) {
    super(props)
    console.log('FlatLista')
  }

  render() {
    return (
      <View style = { core.row }>
        <FlatList
          data = { this.props.tasks }
          keyExtractor = { item => 'task-'+item.id }
          contentContainerStyle={{ paddingBottom: 80}}
          ListHeaderComponent={ FilterBar }
          renderItem = {({ item, index }) => ( <TaskCell item = { item } index = { index }></TaskCell> ) } />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: sortByPriorityDueProgress(getTasksCurrentFilter(state))
  }
}

export default connect(mapStateToProps)(FlatListTasks)
