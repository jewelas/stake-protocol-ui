// State
import { useState, useEffect, useCallback } from "react";
// Web3
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import {
  InjectedConnector,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  WalletConnectConnector,
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
} from "@web3-react/walletconnect-connector";
// data
import { getRpcUrl } from "data/getRpc";

const validChains = [56, 97];
const POLLING_INTERVAL = 12000;
// Login and Logout Hook -> Handles Wallet Connection
export const useAuth = () => {
  const { activate, deactivate, account, chainId } = useWeb3React();

  const login = useCallback(
    (specifiedConnector?: ConnectorNames) => {
      const connector = CONNECTORS[specifiedConnector || "injected"];
      if (connector)
        activate(connector, async (error) => {
          console.log("failed activation", error);
          if (
            error instanceof UserRejectedRequestErrorWalletConnect &&
            connector instanceof WalletConnectConnector
          )
            connector.walletConnectProvider = undefined;
          if (error)
            setTimeout(
              () => window.localStorage.setItem("connectorId", ""),
              1000
            );
        })
          .then((c) => {
            console.log("returned stuff", c);
            window.localStorage.setItem(
              "connectorId",
              specifiedConnector || ""
            );
          })
          .catch((e) => {
            console.log("failed to activate", e);
          });
    },
    [activate]
  );

  const logout = useCallback(() => {
    deactivate();
    if (window.localStorage.getItem("connectorId") == "walletConnect") {
      CONNECTORS.walletConnect.close();
      CONNECTORS.walletConnect.walletConnectProvider = null;
    }
    window.localStorage.setItem("connectorId", "");
  }, [deactivate]);

  return { login, logout, account, chainId };
};
// Automatically try to login if use has previously logged in
export const useEagerConnect = () => {
  const { login } = useAuth();

  useEffect(() => {
    const connector = window.localStorage.getItem(
      "connectorId"
    ) as ConnectorNames;
    if (!connector) return;
    setTimeout(() => login(connector), 1000);
  }, [login]);
};

const web3 = new Web3(Web3.givenProvider);

// easy import of a contract to interact with
export function useContract(abi: any, address: string): ContractHandles {
  const { chainId } = useWeb3React();
  const [contract, setContract] = useState(() =>
    [56, 97].indexOf(chainId || 0) > -1 && address
      ? new web3.eth.Contract(abi, address)
      : null
  );

  useEffect(() => {
    chainId &&
      setContract(() =>
        [56, 97].indexOf(chainId || 0) > -1 && address
          ? new web3.eth.Contract(abi, address)
          : null
      );
  }, [chainId, abi, address]);

  return { contract, methods: contract?.methods || null, web3 };
}

type ContractHandles = {
  contract: any;
  methods: any | null;
  web3: Web3;
};

export const CONNECTORS: { [connector in ConnectorNames]: any } = {
  injected: new InjectedConnector({ supportedChainIds: validChains }),
  walletConnect: new WalletConnectConnector({
    rpc: {
      56: getRpcUrl(56) || "",
      97: getRpcUrl(97) || "",
    },
    qrcode: true,
  }),
};
export enum ConnectorNames {
  INJECTED = "injected",
  WALLET_CONNECT = "walletConnect",
  // CLOVER_WALLET="clover",
}
