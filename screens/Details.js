import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class Details extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', null)
    }
  }

  render() {
    return (
      <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text> DETAILS!!!</Text>
      </View>
    )
  }
}

export default Details
