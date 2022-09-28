
const { Client, GatewayIntentBits, version } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on("ready", () => {
    console.log("Navy is up !");
    console.log("Version " + version);
});

client.login("MTAyMzI0OTY4OTI1NDA1NTk3OA.GdDJ00.ZlYUmF5txCNVsI4RloPpnyHosCIt396MXuJz7I"); // Navy's Token

client.on("messageCreate", message => {
    if (message.author.bot) return; // Not consider Navy or others bots' messages

    console.log(message)


    if (message.content == "ping") 
    {
        message.reply("pong"); // For replying to a message
        message.channel.send("pang"); // For just sending a message
    }
    else if (message.content == "help")
    {
        message.reply("To see all Navy's useful commands, go check our website : \n:globe_with_meridians: https://www.snircdf.fr");
    }
    else if (message.content == "mention")
    {
        message.channel.send("This is an User Mention : <@" + message.author.id + ">") // @ the message author
        message.channel.send("This is an Channel Mention : <#" + message.channel.id + ">") // Mentions the message's channel

    }
});