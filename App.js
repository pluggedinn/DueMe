import React from 'react'
import { createStackNavigator  } from 'react-navigation'
import Home from './screens/Home'
import Details from './screens/Details'

const RootStack = createStackNavigator(
  {
    HomeScreen: Home,
    DetailsScreen: Details,
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
