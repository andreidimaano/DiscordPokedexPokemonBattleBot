require("dotenv").config();
const { Client, Intents } = require("discord.js");

let setCommands = (client) => {
  // code here
}

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
  
  // message event listener
  client.on("messageCreate", async (message) => {
    /* 
      1. console log the message to find out what it is
      2. reply to the command if it says cutie
      3. create your own command
      
      For Example:
      if command == 'Discrete Math'
        reply sad emoji (btw bots can access emojis!)

      if command == 'pickles'
        reply do not belong on burgers

      if command == 'amogus'
        reply sus
    */
  })

  // interaction event listener
  client.on('interactionCreate', async interaction => {
    /*
      1. use the documentation or console log interaction
      2. only reply to the interaction if it's a command
      3. use your commands collection to find the command
      4. if the command doesn't exist do nothing
      5. otherwise execute
    */
  });
}


main();