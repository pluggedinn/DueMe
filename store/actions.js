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

export function addTask (data) {
  return {
    type: ADD_TASK,
    title: data.title,
    description: data.description,
    due: data.due,
    priority: data.priority,
    hours: data.hours
  }
}

export function editTask (data) {
  return {
    type: EDIT_TASK_DETAILS,
    title: data.title,
    description: data.description,
    due: data.due,
    priority: data.priority,
    hours: data.hours
  }
}

export function addHoursTask (data) {
  return {
    type: ADD_TASK_HOURS
  }
}
