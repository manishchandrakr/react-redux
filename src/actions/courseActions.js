import * as types from './actionTypes';

export function createCourse(course) {
  // Action Creator: "CREATE_COURSE"
  // Action: "course"
  return {type: types.CREATE_COURSE, course};
}
