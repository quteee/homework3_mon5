import {types} from "./types";

export function changeTitleAction() {
  return {
  type: "CHANGE_TITLE"
  }
}
export function withParamsAction(title) {
  return {
    type: types.WITH_PARAMS,
    payload: title
  }
}
export function changeInputAction(value) {
  return {
    type: types.VALUE,
    payload: value
  }
}
export function addUserAction(name) {
  return {
    type: types.ADD_USER,
    payload:name
  }
}
export function deleteAction() {
  return {
    type: types.CHANGE_TITLE
  }
}
export function addNumberAction(number) {
  return {
    type: types.ADD_NUMBER,
    payload: number
  }
}
export function clearAllAction() {
  return {
    type: types.CLEAR_ALL
  }
}
