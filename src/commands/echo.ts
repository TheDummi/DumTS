import { Command, Args } from '@sapphire/framework';
import { Message } from 'discord.js';
import { send } from '@sapphire/plugin-editable-commands';

export class PingCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: 'echo',
      aliases: ['say'],
      description: 'ping pong'
    });
    }
    
    public async messageRun(message: Message, args: Args) {
        const text = await args.pick('string')
      await send(message, { content: text });
      }
    }