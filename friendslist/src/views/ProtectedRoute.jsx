import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { fetchData } from '../actions';
import FriendPage from '../components/FrienPage';


export function ProtectedRoute(props) {
  console.log('$$$$$$',props)
  const { fetchData,friendList,fetching } = props;
  console.log('+++++++++',fetching);
  
  useEffect(()=>{
    fetchData()
  },[fetchData]);

  if (fetching) {
    return (<div>
<Loader type="Circles" color="green" height="100" width="100" />
    </div>);
  }

  return (<div>
  <h1>Friend List</h1>
  {friendList.friends.map(fr=>{
    return <FriendPage friend={fr} key={fr.id}/>
  })}
  </div>)

}

const mapStateToProps =(state)=>{
  return {
    friendList: state.friendList,
    fetching: state.friendList.fetching
  };
}

export default connect(
  mapStateToProps, { fetchData}
)(ProtectedRoute);
