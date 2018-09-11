import React from 'react'
import { createStackNavigator  } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers'
import Home from './screens/Home'
import Details from './screens/Details'
import EditNewTask from './screens/EditNewTask'

const RootStack = createStackNavigator(
  {
    HomeScreen: Home,
    DetailsScreen: Details,
    EditNewTaskScreen: EditNewTask
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    }
  }
)

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store= { store }>
        <RootStack />
      </Provider>
    )
  }
}
