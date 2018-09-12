import React from "react"
import { View, Text, FlatList } from "react-native"
import { connect } from "react-redux"
import styles from '../assets/styles/core'

class FlatListTasks extends React.Component {
  constructor(props) {
    super(props)
    console.log('FlatLista', this.props.tasks)
  }

  render() {
    return (
      <View style = { styles.row }>
        <Text>Tasks:</Text>
        <FlatList
          data = { this.props.tasks }
          keyExtractor = { item => 'task-$(item.id)' }
          renderItem = {({ item }) => (
            <View style = { styles.row }>
              <Text>{ item.title }</Text>
              <Text>{ item.expected }</Text>
            </View>
          )} />
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
