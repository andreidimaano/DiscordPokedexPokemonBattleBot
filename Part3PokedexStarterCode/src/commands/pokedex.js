const { SlashCommandBuilder } = require("@discordjs/builders");

let execute = async (interaction) => {
  /*
        // 1. install axios
        // 2. Use axios to get information from this api endpoint "https://pokeapi.co/api/v2/pokemon/{id or name}/"
        // 3. console.log the response and format the data :D 
    */
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pokedex")
    .setDescription("look up info of pokemon"),
  // add string option

  execute: execute,
};
