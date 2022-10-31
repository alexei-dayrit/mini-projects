import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import { REST } from '@discordjs/rest';

dotenv.config();

const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const rest = new REST({ version: 10 }).setToken(TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('messageCreate', msg => {
  console.log(msg.author.tag);
  console.log(msg.createdAt.toDateString());
  console.log(msg.content);
});

client.login(TOKEN);
// client.destroy();
