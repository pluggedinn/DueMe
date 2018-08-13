import _ from underscore
import { ADD_TASK,
       EDIT_TASK_DETAILS,
       ADD_TASK_HOURS,
       COMPLETE_TASK,
       DELETE_TASK,
       SET_FILTER,
       Filters } from './actions'

const initialState = {
  filter: Filters.SHOW_ACTIVE,
  tasks: []
}

function duemeApp(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, ...state, { filter: action.filter })
    case ADD_TASK:
      return Object.assign({}, ...state, {
        tasks: [
          ...state.tasks,
          _.omit(action, 'type')
          ]
      })
    case EDIT_TASK:
      return Object.assign({}, ...state, { tasks:
        state.tasks.map(task => {
          if (task.id === action.id) {
            return _.omit(action, 'type')
          }
          return item
        })
      })
    case
    default:
      return state
  }
  return state
}
