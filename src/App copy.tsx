// Login.tsx
import React from "react";
import { CustomButton } from "./common";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

const App: React.FC = () => {
  // const injected = new InjectedConnector();

  const { chainId, account, active, activate, deactivate } = useWeb3React();

  // const handleConnect = () => {
  //   if (active) {
  //     deactivate();
  //     return;
  //   }
  //   activate(injected, (error) => {
  //     if ("/No Ethereum provider was found on window.ethereum/") {
  //       window.open("https://metamask.io/download.html");
  //     }
  //   });
  // };

  return (
    <div>
      <div>
        <p>Account: {account}</p>
        <p>ChainId: {chainId}</p>
      </div>
      <CustomButton>{active ? "disconnect" : "connect"}</CustomButton>
    </div>
  );
};

export default App;

// const App = () => {
//   const { chainId, account, active, activate, deactivate } = useWeb3React();
//   const handleConnect = () => {
//     if (active) {
//       deactivate();
//       return;
//     }
//     activate(injected, (error) => {
//       if ("/No Ethereum provider was found on window.ethereum/".test(err)) {
//         window.open("https://metamask.io/download.html");
//       }
//     });
//   };
//   return (
//     <div>
//       <div>
//         <p>Account: {account}</p>
//         <p>ChainId: {chainId}</p>
//       </div>
//       <div>
//         <button type="button" onClick={handleConnect}>
//           {active ? "disconnect" : "connect"}
//         </button>
//       </div>
//     </div>
//   );
// };
