import * as types from './actionTypes';
import axios from 'axios';
// import uuid from 'uuid';
import axiosWithAuth from "../axios";


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

export const logedin = status => {
    return {
        type: types.LOGIN,
        payload: status
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

export const saving = status => {
    return {
        type: types.SAVING,
        payload: status
    }
}

export const addFriend = (name, email, age) => {
    return {
        type: types.ADD_FRIEND,
        payload: {
            name,
            age,
            email 
        }
    }
}


export const login = (username, password) => dispatch => {
    const credentials = { username, password };
    dispatch(fetching(true));
    axios
      .post(`${baseUrl}/login`, credentials)
      .then(res => {
          console.log('*******',res);
        localStorage.setItem('token', res.data.payload);
        dispatch(fetching(false));
        dispatch(logedin(true));
      })
      .catch(err => {
        console.log("AUTH FAILED!!!", err);
      });
  };

export const fetchData = () => dispatch => {
    dispatch(fetching(true));
    axiosWithAuth()
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

  export const addData = ({name,age,email} ) => dispatch => {
    axiosWithAuth().post(`${baseUrl}/friends`, {name,age,email})
    .then(res=>{
        console.log('+++++++',res);
        dispatch(addFriend(res.data))
    }).catch(err =>{
        dispatch(failure(err.message));
      })
  }