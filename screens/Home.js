import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Tasks',
  }

  render() {
    return (
      <View style={{ flex:1, flexDirection:'column' }}>
        <View style={ styles.filterRow }>
          <Text style={{ flexGrow:1, alignSelf:'center' }}>ACTIVE</Text>
          <Button title='BTN'/>
          <Text style={{ alignSelf:'center' }}>FILTER</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  filterRow: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 18,
    marginRight: 18
  }
})
