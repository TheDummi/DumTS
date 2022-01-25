import { SapphireClient } from '@sapphire/framework';
import { token } from './data/config.json';

const client = new SapphireClient({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.login(token);