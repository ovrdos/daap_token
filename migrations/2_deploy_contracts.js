var DaapCoin = artifacts.require("./DaapCoin.sol");
var DaapCoinSale = artifacts.require("./DaapCoinSale.sol");

module.exports = function(deployer) {
  deployer.deploy(DaapCoin, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(DaapCoinSale, DaapCoin.address, tokenPrice);
  });
};
