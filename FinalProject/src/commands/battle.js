const { SlashCommandBuilder } = require("@discordjs/builders");
const axios = require('axios');
const { MessageAttachment, MessageEmbed } = require('discord.js');

let execute = async (interaction) => {
    // 1. get arguments
    let name1 = interaction.options._hoistedOptions[0].value
    let name2 = interaction.options._hoistedOptions[1].value
    let hp1 = interaction.options._hoistedOptions[2].value
    let hp2 = interaction.options._hoistedOptions[3].value

    if(name1 == "deoxys") {
        name1 = "deoxys-normal"
    }


    if(name2 == "deoxys") {
        name2 = "deoxys-normal"
    }

    // 2. call api
    let response = await axios.get(`http://127.0.0.1:5000/battleimg?pokemon1=${name1}&pokemon2=${name2}&rem1=${hp1}&rem2=${hp2}`)
    
    const file = new MessageAttachment('./api/newim.png')

    if(response.status == 404 || response.status == 500) await interaction.reply("Pokemon not found")
    
    // 3. reply with an embed of pokemon information
    await interaction.reply({
        target: interaction.user,
        embeds: [
          {
            title: `Pokemon Battle: ${name1} vs ${name2}`,
            image: {
                url: 'attachment://newim.png'
            },
            color: "RANDOM",
            fields : [{name: `Pokemon1: ${name1}`, value: `HP: ${hp1.toString()}`}, {name: `Pokemon2: ${name2}`, value: `HP%: ${hp2.toString()}`}]
          },
        ],
        files:[file],
        ephemeral: false
    });
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName("battle")
    .setDescription("pokemon battle between 2 pokemon")
    .addStringOption(option => 
        option.setName('pokemon1name').setDescription('Pokemon1 name').setRequired(true)
    )
    .addStringOption(option => 
        option.setName('pokemon2name').setDescription('Pokemon2 name').setRequired(true)
    )
    .addIntegerOption(option => 
        option.setName('remhp1').setDescription('Pokemon1 remaining HP percentage').setRequired(true)
    )
    .addIntegerOption(option => 
        option.setName('remhp2').setDescription('Pokemon2 remaining HP percentage').setRequired(true)
    ),
    execute: execute
}