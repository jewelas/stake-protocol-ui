// Import ABI's to use
import TokenPresale from "abi/TokenPresale.json";

//
import { AbiItem } from "web3-utils";
/*
 * TESTNET: 97
 * MAINNET: 56
 */
export const contracts: { [key: string]: ContractSelect } = {
  TokenPresale: {
    56: {
      address: "0xf5C1de73D3e3E4727629DE0bD14865d90125eC15",
      abi: TokenPresale.abi,
    },
    97: {
      address: "0xB531E30A62464a44b712E8B80F8ceFCe6377D92C",
      abi: TokenPresale.abi,
    },
  },
};

export const getContracts = (
  contract: string,
  chainId?: number
): { address: string; abi: AbiItem | null } => {
  if (!chainId) return { address: "", abi: null };
  const data = contracts[contract][chainId];
  return {
    address: data?.address || "",
    abi: data?.abi || "",
  };
};
type ContractSelect = {
  [key: number]: {
    address: string;
    abi: any;
  };
};
