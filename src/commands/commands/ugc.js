const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "ugc",
        description: "Get a random Pressure UGC",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const ugcsJsonData = await fs.readFile("data/ugc.json", {encoding: "utf8"});
      const ugcsMap = JSON.parse(ugcsJsonData);
      const ugcs = ugcsMap["ugc"];
      const ugc = ugcs[Math.floor(Math.random() * ugcs.length)];

      const embed = new EmbedBuilder()
      .setColor(`#bbc3cd`)
      .setTitle(`${ugc.name}`)
      .setDescription(`${ugc.description}`)
      .setThumbnail(`https://cdn.sylvee.xyz/pressureugc${ugc.num}.png`)
      .addFields({ name: '\u200b', value: `<:Robux:1400684315674935346> ${ugc.price}` })

      await interaction.reply({ embeds: [embed] });
    },
};