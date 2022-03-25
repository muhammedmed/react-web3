import { Link } from "react-router-dom";

const Home = (props) => {
  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("Please install MetaMask!");
    }
    return provider;
  };

  const onLoginHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallet installed ?"
        );
      }
      await provider.request({
        method: "eth_requestAccounts",
      });
    }
    props.onLogin(provider);
  };
  return (
    <div>
      <Link to="/walletAdress">
        <button onClick={onLoginHandler} type="button">
          Connect MetaMask
        </button>
      </Link>
    </div>
  );
};

export default Home;
