import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import core from '../assets/styles/core'

// props: expand: expands item showing buttons | boolean
//        item: data that contains all about the task | Object
class TaskCell extends React.Component {
  constructor() {
    super()
    console.log('TaskCella')
    this.state = {
      expand: null
    }
  }

  componentDidMount() {
    this.setState({ expand: this.props.index == 0 ? true : false})
  }

  render() {
    return (
      <View style = { [core.border, style.card] }>
        <View style = { style.cardRow }>
          <Text style = { core.border }>{ this.props.item.estimate }</Text>
          <Text style = { core.border }>{ this.props.item.title }</Text>
          <Button title = "A" onPress = {() => { this.setState({expand : !this.state.expand}) } }></Button>
        </View>
        { this.state.expand && <View style = { style.cardRow }>
          <Button title = "DONE"></Button>
          <Button title = "ADVANCE+"></Button>
          <Text style = {[core.border,{ marginLeft: 'auto', marginTop: 'auto' }]}>3h left</Text>
        </View> }
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

export default TaskCell
