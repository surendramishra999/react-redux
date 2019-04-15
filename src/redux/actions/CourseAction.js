import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course
  };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(err => {
        throw Error(err);
      });
  };
}

function loadCourseSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

function updateCourseSuccess(courses) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    courses
  };
}

function createCourseSuccess(courses) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    courses
  };
}

export function saveCourses(course) {
  // eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(saveCourse => {
        course.id
          ? dispatch(updateCourseSuccess(saveCourse))
          : dispatch(createCourseSuccess(saveCourse));
      })
      .catch(err => {
        throw Error(err);
      });
  };
}
