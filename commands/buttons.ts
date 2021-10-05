import { MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";


export default {
    category: 'Testing',
    description: 'Testing',

    slash: true,
    testOnly: true,

    callback: async ({ interaction: msgInt, channel }) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('ban_yes')
            .setEmoji('🔨')
            .setLabel('Are you sure?')
            .setStyle('SUCCESS')
        )
        .addComponents(
            new MessageButton()
            .setCustomId('ban_no')
            .setEmoji('❌')
            .setLabel('Cancel')
            .setStyle('DANGER')
        )

        await msgInt.reply({
            content: 'Are you sure?',
            components: [row]
        })
    }
} as ICommand 

