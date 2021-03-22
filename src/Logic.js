import React, { useState } from 'react';
import LoginForm from './LoginForm';
import {NavLink,Switch,Route} from 'react-router-dom';
import Home from './Home';
import Task from './Task';
import User from './User';
import './index.css';

function App () {
  const adminUser = {
    username: 'ankit',
    password: 'ankit123'
  }

  const [user, setUser] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  const Login = details => {
    console.log(details);
    if(details.name == adminUser.username && details.password == adminUser.password){
      // console.log("Authorised User");
      setUser ({
        name : details.name,
        password : details.password
      });
    }
    else{
      setError("Please check creditianls properly*")
      // console.log("Non Authorised User");
    }
  
  }

  const Logout = () => {
    console.log('Logout')
    setUser({ name: '', email: '' })
  }

  return (

    <>
    
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/task" component={Task} />
        <Route exact path="/user" component={User} />
        <Route component={Error} />
      </Switch>

    <div className='App'>
      {user.name != '' ? (
        <div className='Welcome'>
          {/* <h2>
            Welcome, <span>{user.name} </span>
          </h2> */}
          {/* <button onClick={Logout}>Logout</button> */}
          <Home />
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
    </>
  )
}

export default App;
