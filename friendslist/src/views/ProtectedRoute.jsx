import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import FriendPage from '../components/FrienPage';


export function ProtectedRoute(props) {
  console.log('$$$$$$',props)
  const { fetchData, friendList } = props;
  console.log('+++++++++',friendList);
  useEffect(()=>{
    fetchData()
  },[fetchData]);
  return (<div>
  <h1>Friend List</h1>
  {friendList.friends.map(fr=>{
    return <FriendPage friend={fr} key={fr.id}/>
  })}
  </div>)
}

const mapStateToProps =(state)=>{
  return {
    friendList: state.friendList
  };
}

export default connect(
  mapStateToProps, { fetchData}
)(ProtectedRoute);
