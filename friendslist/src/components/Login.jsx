import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

export class Login extends React.Component {
  userRef = React.createRef()

  passRef = React.createRef()

  onLogin = () => {
    const username = this.userRef.current.value;
    const password = this.passRef.current.value;

    this.props.login(username, password);
    this.props.history.push('/');
  }

  render() {
    console.log('!!!!!!!!!',this.props)
    return (
      <div>
        <h3>Login</h3>
        <div>username <input type="text" ref={this.userRef} /></div>
        <div>password <input type="text" ref={this.passRef} /></div>

        <button onClick={this.onLogin}>Log in</button>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
    return{
        logedin: state.friendList.logedin
    }
}
export default connect(
    mapStateToProps,
  { login },
)(Login);
