import React from 'react'
import { connect } from 'react-redux'
import { View, Picker } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import core from '../assets/styles/core'

import { Filters, setFilter } from '.././store/actions'

class FilterBar extends React.Component {

  render() {
    const pickerItems = []
    let index = 0;
    for (var item in Filters) {
      pickerItems.push(<Picker.Item key = { index++ } label = { Filters[item] }  value = { Filters[item] } ></Picker.Item>)
    }
    // console.log(this.props.wholeState)

    return (
        <View style = { core.row }>
          <View
            style = { core.marginRight } >
            <SvgUri width="25" height="25" source={require('.././assets/icons/filter.svg')} />
          </View>
          <Picker
            selectedValue = { this.props.currentFilter }
            onValueChange = {(item) => this.props.setFilter(item)}
            style = {{ height: 25, width: 160 }} >
            { pickerItems }
          </Picker>
        </View>
    )
  }
}

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
