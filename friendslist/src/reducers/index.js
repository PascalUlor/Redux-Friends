import * as types from "../actions";

const initialState = {
  friends: [],
  fetching: false,
  error: null
};

export const FriendList = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING:
      return {
        ...state,
        fetching: action.payload
      }
    case types.ADD_FRIEND:
        return [...state, action.payload]
    case types.SUCCESS:
        return {
            ...state, friends: action.payload
        }
    case types.FAILURE:
        return {
            ...state, error: action.payload
        }
    case types.DELETE_FRIEND:
        return state.filter(friend=> friend.id !== action.payload)
    default:
        return state
  }
};

