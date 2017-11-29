import { combineReducers } from 'redux'
import {
  TA_TASK_ONCLICK,
  TA_CLOSE_MODAL_ONCLICK,
  TA_MODAL_ONCONFIRM,
  TA_MODAL_ONNOTKEEP,
  TA_MODAL_ONKEEP,
  TA_TAB_ONCLICK,
  // TA_ADVANCED_SEARCH_ONCLICK,
  TA_TASK_SORT_TIME_FORWARD,
  TA_TASK_SORT_TIME_BACKWARD,
  TA_CHANGE_PAGE,
  TA_ADD_TASK_ONCLICK,
  TA_DELETE_TASK_ONCLICK,
  TA_COLLAPSE_ONCLICK,
  TA_NODE_ONCLICK,
  TA_CLEAR_SELECTED_SEARCH,
  TA_CLEAR_ALL_SEARCH,
  TA_FAST_SEARCH_ONCLICK,
  TA_ADVANCED_SEARCH_ONCONFIRM,
  TA_ADVANCED_SEARCH_ONCANCEL,
  TP_INIT,
} from '../../action'

function modal(state = { visible: false },action: any) {
  switch (action.type) {
    case TA_TASK_ONCLICK:
    case TA_ADD_TASK_ONCLICK:
      return true;
    case TP_INIT:
    case TA_CLOSE_MODAL_ONCLICK:
    case TA_MODAL_ONCONFIRM:
    case TA_MODAL_ONNOTKEEP:
    case TA_MODAL_ONKEEP:
    case TA_COLLAPSE_ONCLICK:
    case TA_NODE_ONCLICK:
    case TA_CLEAR_SELECTED_SEARCH:
    case TA_CLEAR_ALL_SEARCH:
    case TA_FAST_SEARCH_ONCLICK:
    case TA_ADVANCED_SEARCH_ONCONFIRM:
    case TA_ADVANCED_SEARCH_ONCANCEL:
    case TA_TAB_ONCLICK:
    case TA_TASK_SORT_TIME_FORWARD:
    case TA_TASK_SORT_TIME_BACKWARD:
    case TA_CHANGE_PAGE:
    case TA_DELETE_TASK_ONCLICK:
      return false
    default:
      return state
  }
}

export default combineReducers({
  modal,
})
