import { combineReducers } from "redux";
import courses from "./CourseReducer";
import authors from "./AuthorReducer";
import apiCallsInProgress from "./ApiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress
});

export default rootReducer;
