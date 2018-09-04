import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
        style = {{ marginLeft: 16 }}
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
    console.log("New taskkk")
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View
          style = { styles.container } >
          <Form type = { Task } options = { options }/>
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
