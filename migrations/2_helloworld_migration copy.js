const HelloWorld = artifacts.require("HelloWorld");
const HelloWorldPermanent = artifacts.require("HelloWorldPermanent");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld, "Hello world constructor")
    .then(async () => {
        let instance = await HelloWorld.deployed();
        let message = instance.hello();
        return deployer.deploy(HelloWorldPermanent, message)
    });
};
