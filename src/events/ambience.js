const { PermissionFlagsBits } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
  name: "messageCreate",
  async execute(message) {

    if (message.author.bot || !message.guild) return;
    if (message.channel.id !== "1392760079878455401") return;
    if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        
    const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
    const voicelinesMap = JSON.parse(voicelinesJsonData);
    const voicelines = voicelinesMap["ambience"];
    const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];

    const chance = Math.random() * 750;
    if (chance < 748) {
      return;
    } else {
      message.channel.send(`<:HQ:1395288115601735714> ${voiceline}`);
    };
  },
};