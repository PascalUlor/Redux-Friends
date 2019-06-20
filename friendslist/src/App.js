import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import ProtectedRoute from './views/ProtectedRoute';

const StyledContainer = styled.div`
  padding: 10px;
`;

export default function App() {
  return (
    <StyledContainer>
        <Router>
        <h1>Friends Logger</h1>
        <div>
        You Are Welcome
        <p>click link to view friends if you are logged in</p>
        <Link to='/login'>Home</Link>
        </div>
          <Route exact path='/' render={props => {
            if (localStorage.getItem('token')) {
              return (
                  <ProtectedRoute {...props}/>
              );
            }
            return <Redirect to='login' />;
          }} />


          <Route path='/login' component={Login} />
        </Router>
    </StyledContainer>
  );
}
