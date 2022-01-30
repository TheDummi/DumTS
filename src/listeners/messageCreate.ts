import { Listener } from '@sapphire/framework';
import type { Client, Message } from 'discord.js';

export class MessageCreateListener extends Listener {
  public run(client: Client, message: Message) {
    if (message?.author?.id == client?.user?.id) return;
  }
}