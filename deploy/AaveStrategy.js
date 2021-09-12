const { weth, getBigNumber } = require("../test/utilities")

module.exports = async function (hre) {

  const { deployer, funder } = await hre.ethers.getNamedSigners()

  const chainId = await hre.getChainId()

  const polygon = {
    wmatic: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    lendingPool: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
    incentiveControler: "0x357D51124f59836DeD84c8a1730D72B749d8BC23",
    bentoBox: "",
    factory: "",
    weth: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    token: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", // usdc
    aToken: "0x1a13f4ca1d028320a707d99520abfefca3998b7f" // aUsdc
  }

  const kovan = {
    wmatic: "0x0000000000000000000000000000000000000000", // no incentives
    incentiveControler: "0x0000000000000000000000000000000000000000", // no incentives
    bentoBox: "0xd1037B0485aDAdA2C0169bBe53b0395309D21fD2",
    lendingPool: "0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe",
    factory: "0x0000000000000000000000000000000000000000",
    weth: "0x0000000000000000000000000000000000000000", // bridge token for rewards
    token: "0xd0A1E359811322d97991E03f863a0C30C2cF029C", // weth
    aweth: "0x87b1f4cf9BD63f7BBD3eE1aD04E8F52540349347" // aweth
  }

  let params;

  if (chainId == 137) { // polygon
    params = polygon;
  } else {
    params = kovan;
  }

  const strategy = await hre.deployments.deploy("AavePolygonStrategy", {
    from: deployer.address,
    args: [
      params.wmatic,
      params.lendingPool,
      params.incentiveControler,
      [
        params.token,
        params.bentoBox,
        "0x123B749C6aAE8761c4907a784bB8845e67991594",
        params.factory,
        params.weth
      ]
    ],
    log: true,
    deterministicDeployment: false,
  })

}