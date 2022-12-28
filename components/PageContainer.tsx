import { useState, useCallback, ReactNode, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainDrawer from "./MainDrawer";
import MainHeader from "./MainHeader";
// import ConnectDlg from "./common/ConnectDlg";
import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import { nodes } from "data/getRpc";
import { useAuth, ConnectorNames } from "hooks/useAuth";
import { useMediaQuery } from 'react-responsive';

const drawerWidth = 240;
const injected = injectedModule();
const walletConnect = walletConnectModule();

const onboard = Onboard({
  wallets: [ injected, walletConnect ],
  chains: [
    {
      id: "0x61",
      token: "BNB",
      label: "BSC Testnet",
      rpcUrl: nodes[ 97 ][ 0 ],
    },
    {
      id: "0x38",
      token: "BNB",
      label: "Binance Smart Chain",
      rpcUrl: "https://bsc-dataseed.binance.org/",
    },
    // {
    //   id: "0xfa",
    //   token: "FTM",
    //   label: "Fantom Mainnet",
    //   rpcUrl: "https://rpc.ftm.tools/",
    // },
  ],
  appMetadata: {
    name: "staking app",
    icon: "/logos/Logo_1.png",
    logo: "/logos/Logo_2.png",
    description: "My app using Onboard",
  },
});

const PageContainer = (props: { children: ReactNode }) =>
{
  // const [{ chains, connectedChain, settingChain }, setChain] = useSetChain('0x61');
  const [ mobileOpen, setMobileOpen ] = useState<boolean>(true);
  // const [openConnectDlg, setOpenConnectDlg] = useState<boolean>(false);
  const [ userAccount, setUserAccount ] = useState<any>();
  const handleDrawerToggle = useCallback(() =>
  {
    setMobileOpen((p) => !p);
  }, [ setMobileOpen ]);

  const connectWallet = async () =>
  {
    const wallets = await onboard.connectWallet();
    setUserAccount(wallets[ 0 ]);
  };

  //Eager connect
  const walletsSub = onboard.state.select("wallets");
  const { unsubscribe } = walletsSub.subscribe((wallets) =>
  {
    const connectedWallets = wallets.map(({ label }) => label);
    window.localStorage.setItem(
      "connectedWallets",
      JSON.stringify(connectedWallets)
    );
  });

  const { login } = useAuth()

  useEffect(() =>
  {
    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem("connectedWallets") || "{}"
    );
    const connectWallet = async () =>
    {
      if (previouslyConnectedWallets) {
        const prevWallet = await onboard.connectWallet({
          autoSelect: {
            label: previouslyConnectedWallets[ 0 ],
            disableModals: true,
          },
        });
        setUserAccount(prevWallet[ 0 ]);
      }
    };
    connectWallet();
    const wallets: { [ key: string ]: any } = {
      'WalletConnect': ConnectorNames.WALLET_CONNECT,
      'MetaMask': ConnectorNames.INJECTED
    }
    previouslyConnectedWallets.length > 0 && wallets[ previouslyConnectedWallets[ 0 ] ] && login(wallets[ previouslyConnectedWallets[ 0 ] ])
  }, [ login ]);
  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <MainHeader
          userAccount={userAccount}
          toggleMenuOpen={handleDrawerToggle}
          connectWallet={() => connectWallet()}
        />
        <MainDrawer open={mobileOpen} toggleOpen={handleDrawerToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: isResp520?0:3,
            pt: '80px',
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {props.children}
        </Box>
      </Box>
    </>
  );
};
export default PageContainer;
