import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: (
      <Button title="Info" />
    )
  }

  render() {
    return (
      <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
        <Text> This is the home</Text>
        <Button onPress={() => this.props.navigation.navigate('DetailsScreen', {
          title: 'Dettagli'
        })} title="PRESSME"/>
      </View>
    )
  }
}
