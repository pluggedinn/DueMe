import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, Picker } from 'react-native'
import { Filters } from '.././store/actions'
import SvgUri from 'react-native-svg-uri'

class Home extends Component {
  static navigationOptions = {
    title: 'Tasks',
  }

  constructor() {
    super()
    console.log(Filters)
    console.log("helloooo")
  }

  render() {
    const pickerItems = []
    for (var item in Filters) {
      pickerItems.push(<Picker.Item label = { Filters[item] }  value = { Filters[item] } ></Picker.Item>)
    }

    return (
      <View style = {{ flex:1, flexDirection:'column' }}>
        <View style = { styles.filterRow }>
          <View
            style = { styles.marginRight, styles.border } >
            <SvgUri width="25" height="25" source={require('.././assets/icons/filter.svg')} />
          </View>
          <Picker
            selectedValue = { this.props.currentFilter }
            style = {[{ height: 25, width: 130 }, styles.border]} >
            { pickerItems }
          </Picker>
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
  },
  border: {
    borderWidth: 1,
    borderColor: 'black'
  },
  marginRight: {
    marginRight: 4
  }
})

const mapStateToProps = (state) => {
  return { currentFilter: state.filter }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: filter => {
      dispatch(setFilter(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
