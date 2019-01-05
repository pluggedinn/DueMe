import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import FlatListTasks from '../components/FlatListTasks'
import SvgUri from 'react-native-svg-uri'
import styles from '../assets/styles/core'
import { colors } from '../assets/styles/variables'

// props:
// - period | String: defines how much time does the user have
//    "1": 1 hour
//    "3": 3 hours
//    "day": whole day
export default class DisplayTasks extends Component {
  static navigationOptions =  ({ navigation }) => ({
    title: navigation.state.params ? navigation.state.params.title : 'Less than 1 hour',
    headerStyle: {
      backgroundColor: navigation.state.params ? navigation.state.params.bgColor : '#673AB7'
    },
    headerTintColor: 'white',
    headerRight: (
      <TouchableOpacity
        style = {{ marginRight: 16 }}
        onPress = { () => {
          navigation.push('EditNewTaskScreen')
        }}>
        <SvgUri
          width = '25'
          height = '25'
          source = { require('.././assets/icons/add_white.svg') } />
      </TouchableOpacity>
    )
  })

  constructor() {
    super()
    console.log("DisplayTasks")
  }

  componentDidMount() {
    if (this.props.navigation.getParam('period', '').includes('1'))  {
      this.props.navigation.setParams({ title: 'Less than 1 hour', bgColor: colors.primaryPurple })
    } else if (this.props.navigation.getParam('period', '').includes('4')) {
      this.props.navigation.setParams({ title: 'Around 4 hours', bgColor: colors.orange })
    } else {
      this.props.navigation.setParams({ title: 'All day', bgColor: 'black' })
    }
  }

  render() {
    return (
      <View style = { styles.columnContainer }>
        {/* <FilterBar></FilterBar> */}
        <FlatListTasks period={ this.props.navigation.getParam('period', '') }></FlatListTasks>
      </View>
    )
  }
}
