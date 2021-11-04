const { SlashCommandBuilder } = require("@discordjs/builders");
const { time } = require("@discordjs/builders");

let execute = async (interaction) => {
  await interaction.reply({
    target: interaction.user,
    embeds: [
      {
        title: "Oh no! Our Table ... it's broken :(",
        image: {
          url: "https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif",
        },
        color: "BLACK",
        timestamp: time(new Date()),
      },
    ],
    ephemeral: false,
  });
};
module.exports = {
  data: new SlashCommandBuilder()
    .setName("table")
    .setDescription("i'm sorry to hear about you table"),
  execute: execute,
};
