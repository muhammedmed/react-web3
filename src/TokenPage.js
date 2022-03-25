import React from "react";

const TokenPage = (props) => {
  return (
    <div className="app-account">
      <h1>Welcome</h1>
      <p>User Adress : {props.currentAccount}</p>
      <p>Balance : {props.balance}</p>
      
    </div>
  );
};

export default TokenPage;
