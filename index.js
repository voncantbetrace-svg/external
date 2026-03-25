import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

// Create the client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Event: bot ready
client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

// Event: message listener
client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === 'ping') {
    message.reply('Pong!');
  }
});

// Login
console.log("Loaded token:", process.env.TOKEN);
client.login(process.env.TOKEN).catch(err => {
  console.error("Login failed. Check your TOKEN:", err);
});
