import React from 'react';
import { withRouter } from 'react-router-dom';



function Login() {
  return (
      <div className="login">
      <h1>I'm The Login</h1> 
      <LoginNow/ >      
      </div> 
  );
}

function LoginNow(){
const Button = withRouter(({history}) => (
    <button
    type='button'
    onClick={() => { history.push('/user')}}
    >Login</button>
));
return <Button/ >
}


export default Login;