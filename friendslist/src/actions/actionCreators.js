import * as types from './actionTypes';
import axios from 'axios';
import axiosImproved from "../axios";


const baseUrl = "http://localhost:5000/api";

export const fetching = status => {
    return {
        type: types.FETCHING,
        payload: status
    }
}

export const success = data => {
    return {
        type: types.SUCCESS,
        payload: data
    }
}

export const failure = mssg =>{
    return {
        type: types.FAILURE,
        payload: mssg
    }
}

export const deleteFriend = id => {
    return {
        type: types.DELETE_FRIEND,
        payload: id
    }
}

export const updateFriend = id => {
    return {
        type: types.UPDATE_FRIEND,
    payload: id
}
}

export const saving = data => {
    return {
        type: types.SAVING,
        payload: data
    }
}


export const login = (username, password) => dispatch => {
    const credentials = { username, password };
    console.log(username, password)
    axios
      .post(`${baseUrl}/login`, credentials)
      .then(res => {
          console.log('*******',res);
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => {
        console.log("AUTH FAILED!!!", err);
      });
  };

export const fetchData = () => dispatch => {
    dispatch(fetching(true));
    axiosImproved()
      .get(`${baseUrl}/friends`)
      .then(res => {
        dispatch(success(res.data));
        dispatch(fetching(false));
      })
      .catch(err => {
        dispatch(failure(err.message));
        dispatch(fetching(false));
      });
  };