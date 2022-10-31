import dotenv from 'dotenv';
import { Client, Routes, GatewayIntentBits } from 'discord.js';
import { REST } from '@discordjs/rest';

dotenv.config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const rest = new REST({ version: 10 }).setToken(TOKEN);

client.on('ready', () => console.log(`Logged in as ${client.user.username}!`));

const main = async () => {
  const commands = [
    {
      name: 'test',
      description: 'Testing command'
    }
  ];
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands
    });
    client.login(TOKEN);
  } catch (err) {
    console.error(err);
  }
};

main();

// client.on('messageCreate', msg => {
//   console.log(msg.author.tag);
//   console.log(msg.createdAt.toDateString());
//   console.log(msg.content);
// });

// client.destroy();
