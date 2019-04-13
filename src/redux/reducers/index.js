import { combineReducers } from "redux";
import courses from "./CourseReducer";

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
