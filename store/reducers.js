import _ from 'underscore'
import { ADD_TASK,
        EDIT_TASK,
        SET_FILTER,
        ADD_TASK_HOURS,
        COMPLETE_TASK,
        DELETE_TASK,
        Filters } from './actions'
import debugTasks from './debugTasks'

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
    case ADD_TASK_HOURS:
      return Object.assign({}, state, { tasks:
        state.tasks.map(task => {
          if (task.id === action.taskid) {
            task.progress += action.amount
            return task
          }
          return task
        })
      })
    case COMPLETE_TASK:
      return Object.assign({}, state, { tasks:
        state.tasks.map(task => {
          if (task.id === action.taskid) {
            task.completed = true
            return task
          }
          return task
        })
      })
    case DELETE_TASK:
      return Object.assign({}, state, { tasks:
        state.tasks.filter(task => {
          if (task.id === action.taskid) {
            return false
          }
          return true
        })
      })
    default:
      return state
  }
}

export default rootReducer
