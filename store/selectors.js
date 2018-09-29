import { Filters } from './actions'

export function getTasksCurrentFilter (state) {
  return state.tasks.filter((task) => {
    var today = new Date()
    var taskDue = new Date(task.due)
    if (state.filter === Filters.SHOW_ACTIVE) {
      return taskDue.getTime() >= today.getTime()
    } else if (state.filter === Filters.SHOW_COMPLETED) {
      return task.completed
    } else {
      return taskDue.getTime() < today.getTime()
    }
  })
}
