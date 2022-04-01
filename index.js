import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'

ReactDOM.render(
  <React.StrictMode>
       <div className="container">
          <div className="registerTable">
              <h1 className="title">Register Account</h1>
              <label htmlFor="name">Email</label><br />
              <input type="text" placeholder="Enter your email" name="email" id="email" required></input><br />
              <label htmlFor="psw">Password</label><br />
              <input type="password" placeholder="Enter your password" name="psw" id="psw" required></input><br />
              <label htmlFor="psw-confirm">Password Confirm</label><br />
              <input type="password" placeholder="Enter your password confirm" name="psw-confirm" id="psw-confirm" required></input><br />
              <button type="submit" className="registerbtn"><b>Register</b></button>
          </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


