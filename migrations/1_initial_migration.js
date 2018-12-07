var Migrations = atrifacts.require("./Migrations.sol");

module.exports = function(deployer){
    deployer.deploy(Migrations);
};