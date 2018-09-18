import React from "react"
import { withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import core from '../assets/styles/core'

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
    return (
      <View style = { [core.border, style.card] }>
        <TouchableOpacity
          onPress = {() => this.props.navigation.push('DetailsScreen', { taskData: this.props.item })}>
          <View style = { style.cardRow }>
            <Text style = { core.border }>{ this.props.item.estimate }</Text>
            <Text style = { core.border }>{ this.props.item.title }</Text>
            <Button title = "A" onPress = {() => { this.setState({expand : !this.state.expand}) } }></Button>
          </View>
          { this.state.expand && <View style = { style.cardRow }>
            <Button title = "DONE" onPress = {() => (null)}></Button>
            <Button title = "ADVANCE+" onPress = {() => (null)}></Button>
            <Text style = {[core.border,{ marginLeft: 'auto', marginTop: 'auto' }]}>3h left</Text>
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

export default withNavigation(TaskCell)
