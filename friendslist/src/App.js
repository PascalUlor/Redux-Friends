import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import MainView from './views/MainView';

const StyledContainer = styled.div`
  padding: 10px;
`;

export default function App() {
  return (
    <StyledContainer>
        <BrowserRouter>
          <Route exact path='/' render={props => {
            if (localStorage.getItem('token')) {
              return (
                  <MainView {...props}/>
              );
            }
            return <Redirect to='login' />;
          }} />


          <Route path='/login' component={Login} />
        </BrowserRouter>
    </StyledContainer>
  );
}
