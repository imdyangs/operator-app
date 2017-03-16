import {
  CHAT_TAG_CLIENT,
  CHAT_SET_ACTIVE,
  OPERATOR_SET_FILTER,
} from './constants';


export function tagClient (payload) {
  return {
    type: CHAT_TAG_CLIENT,
    payload,
  };
}

export function setActiveChat (payload) {
  return {
    type: CHAT_SET_ACTIVE,
    payload,
  };
}

export function setOperatorFilter (payload) {
  return {
    type: OPERATOR_SET_FILTER,
    payload,
  };
}
