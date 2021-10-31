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
    // console.log(message);

    if(message.author.bot) return;

    if(message.content.toLowerCase() == "cutie") {
      await message.reply("yes, andrei is indeed a cutie :^)");
      // console.log(message.guildId)
    }
      
    if(message.content.toLowerCase() == 'discrete math')
      await message.reply(":pensive:")
  })
  
  client.on('interactionCreate', async interaction => {
    // console.log(interaction)

    if(!interaction.isCommand()) return;

    const { commandName } = interaction;
    if (!client.commands.has(commandName)) return;

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