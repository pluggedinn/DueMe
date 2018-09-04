import React from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, StyleSheet, View, Text, InteractionManager } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import t from 'tcomb-form-native'
import SvgUri from 'react-native-svg-uri'

import { Priorities, addTask } from '../store/actions'

const Form = t.form.Form

var options = {
  fields: {
    dueDate: {
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
  dueDate: t.Date,
  priority: Priority,
  estimate: t.Number
})

class NewTask extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New task',
    headerLeft: (
      <TouchableOpacity
        style = {{ marginLeft: 16 }}
        onPress = { () => {
          navigation.goBack()
        }}>
        <SvgUri
          width = '25'
          height = '25'
          source = { require('../assets/icons/clear.svg') } />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style = {{ marginRight: 21 }}
        onPress = { navigation.getParam('handleSave') }>
        <Text>
          SAVE
        </Text>
      </TouchableOpacity>
    )
  })

  constructor() {
    super()
    this.formRef = React.createRef()
    console.log("New taskea")
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.saveForm() })
  }

  saveForm() {
    console.log('hi')
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style = { styles.container } >
          <Form
            type = { Task }
            options = { options }
            ref = { this.formRef } />
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20
  }
})

const mapStateToProps = (state) => {
  return { wholeState: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: task => {
      dispatch(addTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask)
