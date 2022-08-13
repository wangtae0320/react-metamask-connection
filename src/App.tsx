import React from "react";
import { CustomButton } from "./common";
import { useMetaMask } from "metamask-react";

function App() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>;

  if (status === "unavailable") return <div>MetaMask not available :(</div>;

  if (status === "notConnected") return <CustomButton onClick={connect}>Connect to MetaMask</CustomButton>;

  if (status === "connecting") return <div>Connecting...</div>;

  if (status === "connected")
    return (
      <div>
        Connected account {account} on chain ID {chainId}
      </div>
    );

  return null;
}

export default App;
