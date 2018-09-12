import React from "react"
import { View, Text, FlatList } from "react-native"
import { connect } from "react-redux"

class FlatListTasks extends React.Component {
  constructor(props) {
    super(props)
    console.log('FlatLista', this.props.tasks)
  }

  render() {
    return (
      <View style={{ flex:1, flexDirection:'column' }}>
        <Text>Tasks:</Text>
        <FlatList
          data = { this.props.tasks }
          keyExtractor = { item => 'task-$(item.id)' }
          renderItem = {({ item }) => (
            <View>
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
