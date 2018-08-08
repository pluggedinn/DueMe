import React from 'react';
import {  , Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: '#fff',
    width: 20,
    height: 20,
  }
});
