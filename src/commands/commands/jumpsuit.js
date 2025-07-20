const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "jumpsuit",
        description: "Get a random jumpsuit from Pressure",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const suitsJsonData = await fs.readFile("data/suits.json", {encoding: "utf8"});
      const suitsMap = JSON.parse(suitsJsonData);
      const suits = suitsMap["suits"];
      const suit = suits[Math.floor(Math.random() * suits.length)];

      const embed = new EmbedBuilder()
      .setTitle(`${suit.name}`)
      .setDescription(`${suit.description}`)
      .setThumbnail(`https://cdn.sylvee.xyz/${suit.path}.png`)
      //.setFooter({ text: 'bage/price', iconURL: 'badge/kroner/robux' })

      await interaction.reply({ embeds: [embed] });
    },
};