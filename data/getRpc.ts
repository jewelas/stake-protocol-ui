import sample from "lodash/sample"

export const nodes: { [ chain: number ]: Array<string> } = {
  56: [
    "https://bsc-dataseed.binance.org/",
    "https://bsc-dataseed1.defibit.io/",
    "https://bsc-dataseed1.ninicoin.io/",
  ],
  97: [
    "https://data-seed-prebsc-1-s1.binance.org:8545/",
    "https://data-seed-prebsc-2-s1.binance.org:8545/",
    "https://data-seed-prebsc-1-s2.binance.org:8545/",
    "https://data-seed-prebsc-2-s2.binance.org:8545/",
  ],
};

export function getRpcUrl(chainId: number)
{
  return sample(nodes[ chainId ]);
}
