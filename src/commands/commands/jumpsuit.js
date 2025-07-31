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
      .setColor(`#bbc3cd`)
      .setTitle(`${suit.name}`)
      .setDescription(`${suit.description}`)
      .setThumbnail(`https://cdn.sylvee.xyz/pressurejumpsuit${suit.path}.png`)
      .addFields({ name: '\u200b', value: `${suit.price}` })

      await interaction.reply({ embeds: [embed] });
    },
};