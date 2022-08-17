import React from "react";
import { CustomButton } from "./common";
import { useMetaMask } from "metamask-react";
import styled from "styled-components";

function App() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  // if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>;

  // if (status === "unavailable") return <div>MetaMask not available :(</div>;

  // if (status === "notConnected") return <CustomButton onClick={connect}>Connect to MetaMask</CustomButton>;

  // if (status === "connecting") return <div>Connecting...</div>;

  // if (status === "connected")
  //   return (
  //     <div>
  //       Connected account {account} on chain ID {chainId}
  //     </div>
  //   );

  return (
    <>
      {status === "connected" ? (
        <MainContainer>
          <BorderLine>
            <ContantsWrap>
              <TextWrap>Account : {account}</TextWrap>
              <TextWrap>Chain ID : {chainId}</TextWrap>
              <TextWrap>hi</TextWrap>
            </ContantsWrap>
          </BorderLine>
        </MainContainer>
      ) : (
        <CustomButton style={{ justifyContent: "center" }} onClick={connect}>
          Connect to MetaMask
        </CustomButton>
      )}
    </>
  );
}

export default App;

const MainContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: lightblue;
`;

const BorderLine = styled.div`
  border: 1px solid black;
  border-radius: 5px;
`;

const ContantsWrap = styled.div`
  margin: 20px;
`;

const TextWrap = styled.div`
  margin: 20px;
`;
