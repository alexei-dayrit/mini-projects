import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('messageCreate', msg => {
  console.log(msg.author.tag);
  console.log(msg.createdAt.toDateString());
  console.log(msg.content);
});

client.login(process.env.TOKEN);
// client.destroy();
