import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';


export function MainView(props) {
  console.log('$$$$$$',props)
  const { fetchData, friendList } = props;
  console.log('+++++++++',friendList);
  useEffect(()=>{
    fetchData()
  },[fetchData]);
  return (<div>
  You Are Welcome
  {friendList.friends.map(fr=>{
    return <div>{fr.name}</div>
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
)(MainView);
