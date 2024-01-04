const config = require('./config.json');

const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
    const invite = `https://discord.com/api/oauth2/authorize?client_id=${readyClient.user.id}&permissions=0&scope=bot%20applications.commands`
    console.log(`Connected as ${readyClient.user.id}\n${invite}`);
});

client.login(config.DISCORD_TOKEN);