import React from 'react'
import t from 'tcomb-form-native'

const Form = t.form.Form

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
  static navigationOptions = {
    title: 'New task',
  }

  constructor() {
    super()
    console.log("New task")
  }

  render() {
    return (
      <Form type = { Task } />
    )
  }
}
