import DisordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DisordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES    
    ]
})

client.on('ready', () => {
    console.log('the bot is ready!')

    const guildId = '894170702289186869'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    }   else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Replies with pong.',
    })

    commands?.create({
        name: 'add',
        description: 'Adds two numbers',
        options: [
        {
            name: 'num1',
            description: 'The first number',
            required: true,
            type: DisordJS.Constants.ApplicationCommandOptionTypes.NUMBER
        },
        {
            name: 'num2',
            description: 'The second number',
            required: true,
            type: DisordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
        }    
        ]
    })
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const { commandName, options } = interaction

    if (commandName === 'ping') {
        interaction.reply({
            content: 'pong',
            ephemeral: false,
        })
    }   else if (commandName === 'add') {
        const num1 = options.getNumber('num1')!
        const num2 = options.getNumber('num2')!

        interaction.reply({
            content: `the sum is ${num1 + num2}`,
            ephemeral: false,
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        })
    }
})

client.login(process.env.TOKEN)