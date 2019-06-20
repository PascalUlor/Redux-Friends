import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../components/Login';

const StyledContainer = styled.div`
  padding: 10px;
`;

export default function MainView() {
  return (
    <StyledContainer>
        <BrowserRouter>
          <Route exact path='/' render={pr => {
            if (localStorage.getItem('token')) {
              return (
                <>
                  <div>You are logged in</div>
                </>
              );
            }
            return <Redirect to='login' />;
          }} />


          <Route path='/login' component={Login} />
        </BrowserRouter>
    </StyledContainer>
  );
}
