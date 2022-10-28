import Discord from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Discord.Client({ intents: ['Guilds', 'GuildMessages'] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);
// client.destroy();
