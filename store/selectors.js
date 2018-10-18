import { Filters, Priorities } from './actions'

export function getTasksCurrentFilter (state) {
  return state.tasks.filter((task) => {
    var today = new Date()
    var taskDue = new Date(task.due)
    if (state.filter === Filters.SHOW_ACTIVE) {
      return (taskDue.getTime() >= today.getTime() && !task.completed)
    } else if (state.filter === Filters.SHOW_COMPLETED) {
      return task.completed
    } else {
      return taskDue.getTime() < today.getTime()
    }
  })
}

export function percentProgress (task) {
  return 1 - ((task.estimate - task.progress) / task.estimate)
}
function compareTimeAsc (a, b) {
  if (a.due.getTime() < b.due.getTime()) {
    return -1
  } else if (a.due.getTime() > b.due.getTime()) {
    return 1
  }
  return 0
}

export function sortByPriorityDueProgress (tasks) {
  let almostDoneHigh = []
  let notAlmostDoneHigh = []

  let highTasks = tasks.filter((task) => task.priority === Priorities.HIGH)
  highTasks.forEach((task) => {
    (percentProgress(task) >= 0.85 ? almostDoneHigh : notAlmostDoneHigh).push(task)
  })
  almostDoneHigh.sort((a, b) => {
    if (percentProgress(a) < percentProgress(b)) { return -1 }
    else if (percentProgress(a) > percentProgress(b)) { return 1 }
    return 0
  })
  notAlmostDoneHigh.sort(compareTimeAsc)
  let mediumTasks = tasks.filter((task) => task.priority === Priorities.MEDIUM)
  mediumTasks.sort(compareTimeAsc)
  let lowTasks = tasks.filter((task) => task.priority === Priorities.LOW)
  lowTasks.sort(compareTimeAsc)

  return [...almostDoneHigh, ...notAlmostDoneHigh, ...mediumTasks, ...lowTasks]
}
