import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Picker } from 'react-native'
import SvgUri from 'react-native-svg-uri'

import { Filters, setFilter } from '.././store/actions'

class FilterBar extends React.Component {

  render() {
    const pickerItems = []
    let index = 0;
    for (var item in Filters) {
      pickerItems.push(<Picker.Item key = { index++ } label = { Filters[item] }  value = { Filters[item] } ></Picker.Item>)
    }
    console.log(this.props.wholeState)

    return (
      <View style = {{ flex:1, flexDirection:'column' }}>
        <View style = { styles.row }>
          <View
            style = { styles.marginRight } >
            <SvgUri width="25" height="25" source={require('.././assets/icons/filter.svg')} />
          </View>
          <Picker
            selectedValue = { this.props.currentFilter }
            onValueChange = {(item) => this.props.setFilter(item)}
            style = {{ height: 25, width: 160 }} >
            { pickerItems }
          </Picker>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
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
  return { currentFilter: state.filter, wholeState: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: filter => {
      dispatch(setFilter(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
