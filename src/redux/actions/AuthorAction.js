import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthors() {
  return function(dispatch) {
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch(err => {
        throw Error(err);
      });
  };
}

function loadAuthorSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}
