import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native'
import { Filters } from '.././store/actions'
import SvgUri from 'react-native-svg-uri'

class Home extends Component {
  static navigationOptions = {
    title: 'Tasks',
  }

  constructor() {
    super()
    console.log(Filters)
  }

  render() {
    const pickerItems = []
    for (var item in Filters) {
      pickerItems.push(<Picker.Item label = { Filters[item] }  value = { Filters[item] } ></Picker.Item>)
    }

    return (
      <View style = {{ flex:1, flexDirection:'column' }}>
        <View style = { styles.filterRow }>
          <Text style = {{ flexGrow:1, alignSelf:'center' }}>{ this.props.filter }</Text>
            <TouchableOpacity
              style = {{marginRight:4}}
              onPress = { ()=> { console.log('hi') }}>
              <SvgUri width="25" height="25" source={require('.././assets/icons/filter.svg')} />
            </TouchableOpacity>
            <Picker
              selectedValue = { this.props.filter }
              style = {{ height: 50, width: 100 }} >
              { pickerItems }
            </Picker>
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
