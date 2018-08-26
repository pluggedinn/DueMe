import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SvgUri from 'react-native-svg-uri'

class Home extends Component {
  static navigationOptions = {
    title: 'Tasks',
  }

  render() {
    return (
      <View style = {{ flex:1, flexDirection:'column' }}>
        <View style = { styles.filterRow }>
          <Text style = {{ flexGrow:1, alignSelf:'center' }}>{ this.props.filter }</Text>
            <TouchableOpacity
              style = {{marginRight:4}}
              onPress = { ()=> { console.log('hi') }}>
              <SvgUri width="25" height="25" source={require('.././assets/icons/filter.svg')} />
            </TouchableOpacity>
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

const mapStateToProps = (state) => {
  return { filter: state.filter }
}

export default connect(mapStateToProps)(Home)
