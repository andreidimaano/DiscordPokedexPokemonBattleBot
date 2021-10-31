require("dotenv").config();
const { Client, Intents } = require("discord.js");

const main = async () => {
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_VOICE_STATES,
    ],
  });
  await client.login(process.env.DISCORDTOKEN);
  console.log(`logged in as ${client.user.tag}`)
  await client.user.setActivity({
    type: "LISTENING",
    name: "to IU",
  });
  

  client.once('ready', async () => {
    console.log("ready")
  });

  /*

    Replying to commands

    1. look at the documentation to find out how to reply to commands
    2. instead of ping and pong, create your own command
    
    For Example:
    if command == 'Discrete Math'
      reply sad emoji (btw bots can access emojis!)

    if command == 'pickles'
      reply do not belong on burgers

    if command == 'amogus'
      reply sus

    make sure you change the commands array in src/register.js accordingly
  */
}


main();