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

  client.once('ready', async () => {
    console.log(`logged in as ${client.user.tag}`)

    await client.user.setActivity({
      type: "LISTENING",
      name: "to IU",
    });
  });

}

main();