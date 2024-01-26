// [!] This code hasn't been tested yet.
// It may work or may not!
// TODO: Find testers

const defaultLocale = "en-US";
const { MessageEmbed } = require('discord.js');

const locale =
  navigator.language ||
  (navigator.languages && navigator.languages[0]) ||
  defaultLocale;

if (locale.startsWith("vi")) {
  window.location.href = "/vn"; // vietnamese version
} else if (locale === "id-ID") {
  window.location.href = "/id"; // indonesian version
}

const embed = new MessageEmbed()
  .setTitle('Exebots Website')
  .setDescription('Description of your website')
  .setURL('https://exebot.vercel.app/')
  .setColor('#7289DA'); 

// Assuming 'message' is your Discord.js message object
message.channel.send(embed);

