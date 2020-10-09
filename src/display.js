import React from 'react';
import { connect } from 'react-redux';


const Display = ({userDetail}) => {
  return (
    <div className="App">
      {userDetail.map((det,index) => {
       return <div className="tile" key={index}>{index} {det.name} : {det.value}</div>
      })}
    </div>
  );
}

const mapStateToProps = state => ({
    userDetail : state.userReducer
})

export default connect(mapStateToProps)(Display);
