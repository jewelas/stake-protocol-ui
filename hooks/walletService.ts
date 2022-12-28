import { init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import trezorModule from '@web3-onboard/trezor'
import ledgerModule from '@web3-onboard/ledger'
import walletConnectModule from '@web3-onboard/walletconnect'
import walletLinkModule from '@web3-onboard/walletlink'
import portisModule from '@web3-onboard/portis'
import magicModule from '@web3-onboard/magic'
import fortmaticModule from '@web3-onboard/fortmatic'
import torusModule from '@web3-onboard/torus'
// import keepkeyModule from '@web3-onboard/keepkey'
import gnosisModule from '@web3-onboard/gnosis'

const injected = injectedModule()
const walletLink = walletLinkModule()
const walletConnect = walletConnectModule()
const trezorOptions = {
  email: 'test@test.com',
  appUrl: 'https://www.blocknative.com'
}
const trezor = trezorModule(trezorOptions)
const torus = torusModule()
const ledger = ledgerModule()
// const keepkey = keepkeyModule()
const gnosis = gnosisModule()
const magic = magicModule({
  apiKey: 'pk_live_02207D744E81C2BA'
})
const fortmatic = fortmaticModule({
  apiKey: 'pk_test_886ADCAB855632AA'
})
const portis = portisModule({
  apiKey: 'b2b7586f-2b1e-4c30-a7fb-c2d1533b153b'
})

export const initWeb3Onboard = init({
  wallets: [
    injected,
    ledger,
    walletLink,
    trezor,
    walletConnect,
    gnosis,
    magic,
    fortmatic,
    // keepkey,
    portis,
    torus
  ],
  chains: [
    {
      id: '0x38',
      token: 'BNB',
      label: 'Binance Smart Chain',
      rpcUrl: 'https://bsc-dataseed.binance.org/'
    },
    {
      id: '0x38',
      token: 'BNB',
      label: 'Binance Smart Chain',
      rpcUrl: 'https://bsc-dataseed.binance.org/'
    },
    {
      id: '0xfa',
      token: 'FTM',
      label: 'Fantom Mainnet',
      rpcUrl: 'https://rpc.ftm.tools/'
    }
  ],
  appMetadata: {
    name: 'Blocknative Web3-Onboard',
    icon: '/logos/Logo_1.png',
    logo: '/logos/Logo_1.png',
    description: 'Demo app for Web3-Onboard',
    recommendedInjectedWallets: [
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      { name: 'MetaMask', url: 'https://metamask.io' }
    ]
  }
})

