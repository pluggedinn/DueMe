import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Picker } from 'react-native'
import { Filters, setFilter } from '.././store/actions'
import SvgUri from 'react-native-svg-uri'

class FilterBar extends Component {

  render() {
    const pickerItems = []
    let index = 0;
    for (var item in Filters) {
      pickerItems.push(<Picker.Item key = { index++ } label = { Filters[item] }  value = { Filters[item] } ></Picker.Item>)
    }

    return (
      <View style = {{ flex:1, flexDirection:'column' }}>
        <View style = { styles.filterRow }>
          <View
            style = { styles.marginRight } >
            <SvgUri width="25" height="25" source={require('.././assets/icons/filter.svg')} />
          </View>
          <Picker
            selectedValue = { this.props.currentFilter }
            onValueChange = {(item) => this.props.setFilter(item)}
            style = {[{ height: 25, width: 160 }, styles.border]} >
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
