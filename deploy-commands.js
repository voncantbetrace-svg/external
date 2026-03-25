import 'dotenv/config';
import { REST, Routes, SlashCommandBuilder } from 'discord.js';

// Define commands
const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')
    .toJSON(),

  new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Replies with a greeting!')
    .toJSON()
];

// Create REST instance
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// Deploy commands to your test server (guild)
(async () => {
  try {
    console.log(`⚡ Registering ${commands.length} slash commands...`);

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );

    console.log('✅ Successfully registered slash commands!');
  } catch (error) {
    console.error('❌ Failed to register commands. Check TOKEN, CLIENT_ID, and GUILD_ID:', error);
  }
})();
