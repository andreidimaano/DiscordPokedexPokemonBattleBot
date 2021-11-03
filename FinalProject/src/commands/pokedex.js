const { SlashCommandBuilder } = require("@discordjs/builders");
const axios = require('axios');
const { MessageAttachment, MessageEmbed } = require('discord.js');

let execute = async (interaction) => {
    // 1. install axios (top)
    let name = interaction.options._hoistedOptions[0].value

    // 2. use the pokedex api to get information about a pokemon
    let pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    if(!pokemonData) await interaction.reply("Pokemon not found")
    
    // 3. console log the data you receive
    // console.log("pokemon data:");console.log(pokemonData.data)

    // console.log(pokemonData.data.name)

    // console.log(pokemonData.data.types)

    let stats = []

    pokemonData.data.stats.forEach(stat => {
        stats.push({name: stat.stat.name, value: stat.base_stat.toString()});
    })
    
    // 3. reply with an embed of pokemon information
    await interaction.reply({
        target: interaction.user,
        embeds: [
          {
            title: `${pokemonData.data.name}`,
            image: {
              url: pokemonData.data.sprites["front_default"],
            },
            thumbnail: {
              url: pokemonData.data.sprites["back_default"],
            },
            color: "RANDOM",
            fields : stats
          },
        ],
        ephemeral: false
    });
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pokedex")
    .setDescription("look up info of pokemon")
    .addStringOption(option => 
        option.setName('name').setDescription('Pokemon name').setRequired(true)
    ),
    execute: execute
}