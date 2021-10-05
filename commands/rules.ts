import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Sends an embed',

    permissions: ['ADMINISTRATOR'],

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
            .setDescription("The Commandments of God")
            .setTitle("Rules")
            .setColor('GREEN')
            .setAuthor('Author: God himself')
            .setFooter('Moses was here 1271 BCE')
            .addFields([
                {
                    name: 'Rule One:',
                    value: 'No rascism',
                    inline: false
                },
                {
                    name: 'Rule Two:',
                    value: 'Respect Staff',
                    inline: false
                },
            ])
            .addField('Rule Three:', 'No spam')
            

        return embed
    }
} as ICommand
