import { Client } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  intents: [
    'Guilds',
    'GuildMessages'
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('messageCreate', msg => {
  console.log(msg.content);
});

client.login(process.env.TOKEN);
// client.destroy();
