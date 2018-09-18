export const ADD_TASK = 'ADD_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const ADD_TASK_HOURS = 'ADD_TASK_HOURS'
export const COMPLETE_TASK = 'COMPLETE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const SET_FILTER = 'SET_FILTER'

export const Filters = {
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed',
  SHOW_EXPIRED: 'Expired'
}

export const Priorities = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
}

let nextTaskId = 2
export function addTask (data) {
  return {
    type: ADD_TASK,
    id: nextTaskId++,
    title: data.title,
    description: data.description,
    due: data.due,
    priority: data.priority,
    estimate: data.estimate,
    progress: 0,
    completed: false
  }
}

export function editTask (taskid, data) {
  console.log(data)
  return {
    type: EDIT_TASK,
    id: taskid,
    title: data.title,
    description: data.description,
    due: data.due,
    priority: data.priority,
    estimate: data.estimate,
    progress: data.progress,
    completed: data.completed
  }
}

export function addHoursTask (taskid, hoursup) {
  return {
    type: ADD_TASK_HOURS,
    taskid,
    hoursup
  }
}

export function completeTask (taskid) {
  return {
    type: COMPLETE_TASK,
    taskid
  }
}

export function deleteTask (taskid) {
  return {
    type: DELETE_TASK,
    taskid
  }
}

export function setFilter (filter) {
  return {
    type: SET_FILTER,
    filter
  }
}
