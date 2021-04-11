"use strict";

const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();
const Constants = require('discord.js/src/util/Constants.js');
Constants.DefaultOptions.ws.properties.$browser = "Discord iOS";

const prefix = ".";
const token = "TOKEN";

console.log("LOADING");
client.login(token).catch(console.error);

client.on("ready", function() {
	client.user.setActivity("on mobile", {type: "PLAYING", browser: "DISCORD IOS"});
    console.log("READY");
});

client.on("message", async function(message) {

	const args = message.content.toLowerCase().split(" ");

	if(args[0] === prefix + "ping"){
        message.channel.send("Online");
	}
	
});