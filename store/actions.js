export const ADD_TASK = 'ADD_TASK'
export const EDIT_TASK_DETAILS = 'EDIT_TASK_DETAILS'
export const ADD_TASK_HOURS = 'ADD_TASK_HOURS'
export const COMPLETE_TASK = 'COMPLETE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const SET_FILTER = 'SET_FILTER'

export const Filters = {
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_EXPIRED: 'SHOW_EXPIRED'
}

let nextTaskId = 0
export function addTask (data) {
  return {
    type: ADD_TASK,
    id: nextTaskId++,
    title: data.title,
    description: data.description,
    due: data.due,
    priority: data.priority,
    hours: data.hours
  }
}

export function editTask (taskid, data) {
  return {
    type: EDIT_TASK_DETAILS,
    id: taskid,
    title: data.title,
    description: data.description,
    due: data.due,
    priority: data.priority,
    hours: data.hours
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