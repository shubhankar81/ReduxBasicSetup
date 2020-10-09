import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setUserDetail, submitUserDetail } from "./Action/userAction"

const App = ({ setUserDetail,submitUserDetail }) => {
  return (
    <div className="App">
        <table>
          <tr>
            <td>Name : </td>
            <td>
              <input name="username" onChange={(e) => setUserDetail(e.target.name, e.target.value)}></input>
            </td></tr>
          <tr>
            <td>Age : </td>
            <td>
              <input name="age" onChange={(e) => setUserDetail(e.target.name, e.target.value)}></input>
            </td></tr>
          <tr>
            <td>Email : </td>
            <td>
              <input name="email" onChange={(e) => setUserDetail(e.target.name, e.target.value)}></input>
            </td></tr>
          <tr>
            <td>Designation : </td>
            <td>
              <input name="designation" onChange={(e) => setUserDetail(e.target.name, e.target.value)}></input>
            </td></tr>
          <tr><td></td><td><button onClick={(e)=> submitUserDetail()} > Submit </button></td></tr>
        </table>

      
    </div>
  );
}

export default connect(null, { setUserDetail, submitUserDetail })(App);
