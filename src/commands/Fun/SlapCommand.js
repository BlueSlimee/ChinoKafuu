const Command = require("../../structures/command")
const NekosLife = require('nekos.life')
const neko = new NekosLife()
const { RichEmbed } = require('discord.js')
module.exports = class PatCommand extends Command {
    constructor (client) {
        super (client, {
            name: 'slap',
            category: 'fun',
            aliases:['tapa'],
            UserPermission: null,
            ClientPermission: null,
            OnlyDevs: false,
            hidden: false
        })
    }
    async execute({message, args, server}, t) {
        let member = message.mentions.users.first() || this.client.users.get(args[0])
        if (!member) return message.chinoReply('error', t('commands:mention-null'))
        let img = await neko.sfw.slap()
        const embed = new RichEmbed()
        .setColor(this.client.colors.action)
        .setDescription(t('commands:slap', {author: message.author, member: member}))
        .setImage(img.url)
        
        message.channel.send(embed)
    }
}