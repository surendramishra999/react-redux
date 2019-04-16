import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { begainApiCall } from "./ApiStatusAction";

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course
  };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(begainApiCall());
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

function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course
  };
}

function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course
  };
}

export function saveCourse(course) {
  // eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(begainApiCall());
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
