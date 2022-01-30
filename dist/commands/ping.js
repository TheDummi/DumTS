"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingCommand = void 0;
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
class PingCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'ping',
            aliases: ['pong'],
            description: 'ping pong'
        });
    }
    async messageRun(message) {
        const msg = await (0, plugin_editable_commands_1.send)(message, { content: 'Ping?' });
        const content = `Pong from JavaScript! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`;
        return msg.edit(content);
    }
}
exports.PingCommand = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUE4QztBQUU5QyxpRkFBMEQ7QUFDMUQsTUFBYSxXQUFZLFNBQVEsbUJBQU87SUFDdEMsWUFBbUIsT0FBd0IsRUFBRSxPQUF3QjtRQUNuRSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2IsR0FBRyxPQUFPO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBZ0I7UUFDdEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLCtCQUFJLEVBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFcEQsTUFBTSxPQUFPLEdBQUcscUNBQXFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDO1FBRXRLLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFqQkwsa0NBaUJLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ0BzYXBwaGlyZS9mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcbmltcG9ydCB7IHNlbmQgfSBmcm9tICdAc2FwcGhpcmUvcGx1Z2luLWVkaXRhYmxlLWNvbW1hbmRzJztcclxuZXhwb3J0IGNsYXNzIFBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRleHQ6IENvbW1hbmQuQ29udGV4dCwgb3B0aW9uczogQ29tbWFuZC5PcHRpb25zKSB7XHJcbiAgICBzdXBlcihjb250ZXh0LCB7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIG5hbWU6ICdwaW5nJyxcclxuICAgICAgYWxpYXNlczogWydwb25nJ10sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAncGluZyBwb25nJ1xyXG4gICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhc3luYyBtZXNzYWdlUnVuKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcclxuICAgICAgY29uc3QgbXNnID0gYXdhaXQgc2VuZChtZXNzYWdlLCB7IGNvbnRlbnQ6ICdQaW5nPycgfSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gYFBvbmcgZnJvbSBKYXZhU2NyaXB0ISBCb3QgTGF0ZW5jeSAke01hdGgucm91bmQodGhpcy5jb250YWluZXIuY2xpZW50LndzLnBpbmcpfW1zLiBBUEkgTGF0ZW5jeSAke21zZy5jcmVhdGVkVGltZXN0YW1wIC0gbWVzc2FnZS5jcmVhdGVkVGltZXN0YW1wfW1zLmA7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gbXNnLmVkaXQoY29udGVudCk7XHJcbiAgICAgIH1cclxuICAgIH0iXX0=