import React from 'react'
import { TouchableOpacity } from 'react-native'
import t from 'tcomb-form-native'
import SvgUri from 'react-native-svg-uri'

const Form = t.form.Form

var options = {
  fields: {
    dueDate: {
      mode: 'date'
    }
  }
};

var Priority = t.enums({
  L: 'LOW',
  M: 'MEDIUM',
  H: 'HIGH'
})

const Task = t.struct({
  title: t.String,
  description: t.maybe(t.String),
  dueDate: t.Date,
  priority: Priority,
  estimate: t.Number
})

export default class NewTask extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New task',
    headerLeft: (
      <TouchableOpacity
        onPress = { () => {
          navigation.goBack()
        }}>
        <SvgUri
          width = '25'
          height = '25'
          source = { require('.././assets/icons/clear.svg') } />
      </TouchableOpacity>
    )
  })

  constructor() {
    super()
    console.log("New task")
  }

  render() {
    return (
      <Form type = { Task } options = { options }/>
    )
  }
}
