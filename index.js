require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

// Simple command
client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === 'earthrock') {
    message.reply('boom');
  }
});

client.login(process.env.TOKEN);
