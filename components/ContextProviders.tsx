import { ReactNode } from "react";
import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";

const ContextProviders = (props: { children: ReactNode }) => {
  const getLibrary = (provider: any): ethers.providers.Web3Provider => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {props.children}
    </Web3ReactProvider>
  );
};

export default ContextProviders;
