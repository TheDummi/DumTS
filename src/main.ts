import { SapphireClient } from '@sapphire/framework';
import { token, prefix } from './data/config.json';

const client = new SapphireClient({
    intents: ['GUILDS', 'GUILD_MESSAGES'],
    defaultPrefix: prefix
});


client.login(token);