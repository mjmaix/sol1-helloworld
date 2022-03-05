const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
    it("constructor should set the message correctly", async () => {
        let instance = await HelloWorld.deployed();
        let message = await instance.message();

        assert.equal(message, "Hello world constructor")
    })

    it("owner should be accounts[0]", async () => {
        let instance = await HelloWorld.deployed();
        let owner = await instance.owner();

        assert.equal(accounts[0], owner);
    })

    it("setMessage should change the message", async () => {
        const newMessage = "I was changed";
        let instance = await HelloWorld.deployed();
        
        await instance.setMessage(newMessage);
        let message = await instance.message();

        assert.equal(newMessage, message);
    })
})
