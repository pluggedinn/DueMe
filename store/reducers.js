import _ from 'underscore'
import { ADD_TASK,
        EDIT_TASK,
        SET_FILTER,
        Filters } from './actions'

let debugTasks = [{
  id: 0,
  title: 'Chiamare DMV',
  due: new Date,
  estimate: 1,
  priority: 'HIGH',
  description: null,
  progress: 0,
  completed: false
},
{
  id: 1,
  title: 'Scrivere a Jensen',
  due: new Date,
  estimate: 2,
  priority: 'MEDIUM',
  description: null,
  progress: 3,
  completed: true
}]

const initialState = {
  filter: Filters.SHOW_ACTIVE,
  tasks: debugTasks
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, { filter: action.filter })
    case ADD_TASK:
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          _.omit(action, 'type')
          ]
      })
    case EDIT_TASK:
      return Object.assign({}, state, { tasks:
        state.tasks.map(task => {
          if (task.id === action.id) {
            return _.omit(action, 'type')
          }
          return task
        })
      })
    default:
      return state
  }
}

export default rootReducer
