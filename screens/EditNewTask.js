import React from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import t from 'tcomb-form-native'
import SvgUri from 'react-native-svg-uri'

import { Priorities, addTask, editTask } from '../store/actions'

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
    title: navigation.getParam('taskData', null) ? navigation.getParam('taskData', null).title : 'New Task',
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
    console.log("New taske")
    this.formRef = React.createRef()
    this.state = { formattedData: null }
  }
  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.saveForm.bind(this) })
    var loadedData = this.props.navigation.getParam('taskData',null)
    if (loadedData) this.setState({ formattedData: Object.assign({}, loadedData, { due: new Date(loadedData.due) })})
  }

  saveForm() {
    let task = this.formRef.current.getValue()
    console.log(task)
    this.props.navigation.getParam('taskData') ? this.props.editTask(this.state.formattedData.id, task) : this.props.addTask(task)
    this.props.navigation.goBack()
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style = { styles.container } >
          <Form
            type = { Task }
            options = { options }
            ref = { this.formRef }
            value = { this.state.formattedData } />
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
    editTask: (id, task) => {
      dispatch(editTask(id, task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNewTask)
