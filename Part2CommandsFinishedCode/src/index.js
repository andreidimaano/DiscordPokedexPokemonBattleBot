require("dotenv").config();
const { Client, Intents, Collection} = require("discord.js");
const fs = require("fs");

let setCommands = (client) => {
  client.commands = new Collection();

  const commandFiles = fs
    .readdirSync("./src/commands")
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
  }
}

const main = async () => {
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_VOICE_STATES,
    ],
  });
  setCommands(client);
  await client.login(process.env.DISCORDTOKEN);
  console.log(`logged in as ${client.user.tag}`)
  await client.user.setActivity({
    type: "LISTENING",
    name: "to IU",
  });
  

  client.once('ready', async () => {
    console.log("ready")
  });

  client.on('messageCreate', async (message) => {
    // 1. console log the message to find out what it is
    console.log(message);

    if(message.author.bot) return;

    // 2. reply to the command if it says cutie
    if(message.content.toLowerCase() == "cutie") {
      await message.reply("yes, andrei is indeed a cutie :^)");
      console.log(message.guildId)
    }
    // 3. create your own command
      
    if(message.content.toLowerCase() == 'discrete math')
      await message.reply(":pensive:")
  })
  
  client.on('interactionCreate', async interaction => {
    // 1. use the documentation or console log interaction
    console.log(interaction)

    // 2. only reply to the interaction if it's a command
    if(!interaction.isCommand()) return;

    // 3. use your commands collection to find the command
    // 4. if the command doesn't exist do nothing
    const { commandName } = interaction;
    if (!client.commands.has(commandName)) return;

    // 5. otherwise execute
    try {
      await client.commands.get(commandName).execute(interaction);
    } catch (error) {
      console.error(error);
      return interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  });
}


main();