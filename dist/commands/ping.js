"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingCommand = void 0;
const framework_1 = require("@sapphire/framework");
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
        const msg = await message.channel.send('Ping?');
        const content = `Pong from JavaScript! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`;
        return msg.edit(content);
    }
}
exports.PingCommand = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUE4QztBQUc5QyxNQUFhLFdBQVksU0FBUSxtQkFBTztJQUN0QyxZQUFtQixPQUF3QixFQUFFLE9BQXdCO1FBQ25FLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDYixHQUFHLE9BQU87WUFDVixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDLENBQUM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFnQjtRQUNwQyxNQUFNLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhELE1BQU0sT0FBTyxHQUFHLHFDQUFxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQzVGLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsZ0JBQ2pDLEtBQUssQ0FBQztRQUVOLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFuQkwsa0NBbUJLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ0BzYXBwaGlyZS9mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcydcclxuXHJcbmV4cG9ydCBjbGFzcyBQaW5nQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDb21tYW5kLkNvbnRleHQsIG9wdGlvbnM6IENvbW1hbmQuT3B0aW9ucykge1xyXG4gICAgc3VwZXIoY29udGV4dCwge1xyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgICBuYW1lOiAncGluZycsXHJcbiAgICAgIGFsaWFzZXM6IFsncG9uZyddLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ3BpbmcgcG9uZydcclxuICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYXN5bmMgbWVzc2FnZVJ1bihtZXNzYWdlOiBNZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgbWVzc2FnZS5jaGFubmVsLnNlbmQoJ1Bpbmc/Jyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gYFBvbmcgZnJvbSBKYXZhU2NyaXB0ISBCb3QgTGF0ZW5jeSAke01hdGgucm91bmQodGhpcy5jb250YWluZXIuY2xpZW50LndzLnBpbmcpfW1zLiBBUEkgTGF0ZW5jeSAke1xyXG4gICAgICAgICAgbXNnLmNyZWF0ZWRUaW1lc3RhbXAgLSBtZXNzYWdlLmNyZWF0ZWRUaW1lc3RhbXBcclxuICAgICAgICB9bXMuYDtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBtc2cuZWRpdChjb250ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSJdfQ==