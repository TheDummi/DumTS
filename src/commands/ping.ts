import { Command } from '@sapphire/framework';
import { Message } from 'discord.js';
import { send } from '@sapphire/plugin-editable-commands';
export class PingCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: 'ping',
      aliases: ['pong'],
      description: 'ping pong'
    });
    }
    
    public async messageRun(message: Message) {
      const msg = await send(message, { content: 'Ping?' });
    
        const content = `Pong from JavaScript! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`;
    
        return msg.edit(content);
      }
    }