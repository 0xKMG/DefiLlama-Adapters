const { staking } = require("../helper/staking");
const { tvl } = require("./helper/index");
const {
  LP_STAKING,
  JPEG,
  STAKING_CONTRACT,
  JPEG_WETH_SLP,
  PETH_ETH_F,
  PUSD_USD_F,
} = require("./helper/addresses");

module.exports = {
  methodology: `Counts the floor value of all NFTs supplied in the protocol vaults`,
  ethereum: {
    tvl,
    staking: staking(STAKING_CONTRACT, JPEG),
    pool2: staking(LP_STAKING, [JPEG_WETH_SLP, PETH_ETH_F, PUSD_USD_F, ]),
  },
  hallmarks: [
    [1666003500, "pETH borrows"],
    [1669551000, "JPEG LTV boost"],
    [1670518800, "APE staking"],
    [1674669600, "Autoglyphs & Fidenza support"],
  ],
};
