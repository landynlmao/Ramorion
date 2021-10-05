"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Testing',
    description: 'Sends an embed',
    permissions: ['ADMINISTRATOR'],
    callback: function (_a) {
        var message = _a.message, text = _a.text;
        var embed = new discord_js_1.MessageEmbed()
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
            .addField('Rule Three:', 'No spam');
        return embed;
    }
};
