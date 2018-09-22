import { Filters } from './actions'

const getFilteredTasks = (state) => {
  if (state.filter === Filters.SHOW_ACTIVE) {
    return state.tasks.reduce((task) => {
      var today = new Date()
      var taskDue = new Date(task.due)
      if (taskDue.getTime() >= today.getTime()) { return task }
    })
  } else if (state.filter === Filters.SHOW_COMPLETED) {
    return state.tasks.reduce(task => task.completed == true)
  } else {
    return state.tasks.reduce((task) => {
      var today = new Date()
      var taskDue = new Date(task.due)
      if (taskDue.getTime() < today.getTime()) { return task }
    })
  }
}
