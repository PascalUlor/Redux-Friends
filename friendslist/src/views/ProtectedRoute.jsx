import React, { useEffect }from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { fetchData } from '../actions';
import FriendsPage from '../components/FriendsPage';
import FriendsForm from '../components/Form';


export function ProtectedRoute(props) {
  const { fetchData,friends,fetching } = props;
  
  useEffect(()=>{
    fetchData()
  },[fetchData]);

  if (fetching) {
    return (<div>
<Loader type="Circles" color="green" height="100" width="100" />
    </div>);
  }

  return (
  <div>
  <h1>Friend List</h1>
<Link to='/add-form'>Add Friends</Link>
  {friends.map(fr=>{
    return (
      <FriendsPage friend={fr} key={fr.id}/>
      )
  })}
  <FriendsForm />
  {/* <Route
  exact
  path='/add-form'
  render={props=> <FriendsForm {...props}/>}
/> */}
  </div>
  )

}

const mapStateToProps =(state)=>{
  return {
    friends: state.friendList.friends,
    fetching: state.friendList.fetching
  };
}

export default connect(
  mapStateToProps, { fetchData}
)(ProtectedRoute);
