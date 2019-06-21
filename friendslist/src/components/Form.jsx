import React, { createRef } from 'react';
import { connect } from 'react-redux';
// import Loader from "react-loader-spinner";
import { addData } from '../actions';


export const FriendsForm =(props)=>{
console.log('---', props)
const { addData } = props;
  const name = createRef()
  const age = createRef()
  const email = createRef()

  const onAddFriend = (e) => {
      e.preventDefault()
    addData({
      name: name.current.value,
      age: age.current.value,
      email: email.current.value,
    });
    name.current.value = '';
    age.current.value = '';
    email.current.value = '';
  }

return(
    <form onSubmit={()=> onAddFriend}>
    <div>Name</div>
        <input 
        ref={name} 
        type="text"
        />
        <div>age</div>
        <input 
        ref={age} 
        type="text" />
        <div>email</div>
        <input 
        ref={email} 
        type="email" />

<button onClick={onAddFriend}>Add Quote</button>
    </form>
)
}



const mapStateToProps =(state)=>{
    return {
      friends: state.friendList.friends,
      fetching: state.friendList.fetching
    };
  }
  
  export default connect(
    mapStateToProps, {addData}
  )(FriendsForm);
  