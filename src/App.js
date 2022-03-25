import { useState } from "react";
import TokenPage from './TokenPage'
import Home from './Home'
import Profile from './Profile'
import Web3 from "web3";


import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  
  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      window.alert("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      const accBalanceEth = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );

      setBalance(accBalanceEth);
      setIsConnected(true);
    }
  };

  

  return (
    <div>
      <header className="main-header">
        <h1>React Web3</h1>
      </header>
        <Routes>
      <Route path="/" element={<Home onLogin={onLogin} isConnected={isConnected} balance={balance} />}/>
      <Route path="walletAdress" element={<TokenPage currentAccount={currentAccount} balance={balance}/>}/>
      <Route path="profile" element={<Profile />}/>

        </Routes>
    </div>
  );
}

export default App;