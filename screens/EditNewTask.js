import React from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import t from 'tcomb-form-native'
import SvgUri from 'react-native-svg-uri'

import { Priorities, addTask } from '../store/actions'

const Form = t.form.Form

/* Forms */
var options = {
  fields: {
    due: {
      mode: 'date'
    }
  }
};
var Priority = t.enums({
  ...Priorities
})
const Task = t.struct({
  title: t.String,
  description: t.maybe(t.String),
  due: t.Date,
  priority: Priority,
  estimate: t.Number
})

class EditNewTask extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'New task'),
    headerLeft: (
      <TouchableOpacity
        style = {{ marginLeft: 16 }}
        onPress = {() => navigation.goBack() }>
        <SvgUri
          width = '25'
          height = '25'
          source = { require('../assets/icons/clear.svg') } />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style = {{ marginRight: 21 }}
        onPress = {() => navigation.state.params.handleSave() }>
        <Text>
          SAVE
        </Text>
      </TouchableOpacity>
    )
  })

  constructor() {
    super()
    console.log("New taska")
    this.formRef = React.createRef()
  }

  saveForm() {
    let task = this.formRef.current.getValue()
    this.props.navigation.getParam('taskData') ? this.props.editTask(task) : this.props.addTask(task)
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.saveForm.bind(this) })
  }

  render() {
    const taskData = this.props.navigation.getParam('taskData', null)

    return (
      <KeyboardAwareScrollView>
        <View style = { styles.container } >
          <Form
            type = { Task }
            options = { options }
            ref = { this.formRef }
            value = { taskData } />
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

/* Style */
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20
  }
})
//
/* Redux methods */
const mapStateToProps = (state) => {
  return { wholeState: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: task => {
      dispatch(addTask(task))
    },
    editTask: task => {
      dispatch(editTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNewTask)
