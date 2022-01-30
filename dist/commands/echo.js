"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingCommand = void 0;
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
class PingCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'echo',
            aliases: ['say'],
            description: 'ping pong'
        });
    }
    async messageRun(message, args) {
        const text = await args.pick('string');
        await (0, plugin_editable_commands_1.send)(message, { content: text });
    }
}
exports.PingCommand = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9lY2hvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUFvRDtBQUVwRCxpRkFBMEQ7QUFFMUQsTUFBYSxXQUFZLFNBQVEsbUJBQU87SUFDdEMsWUFBbUIsT0FBd0IsRUFBRSxPQUF3QjtRQUNuRSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2IsR0FBRyxPQUFPO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDaEIsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBZ0IsRUFBRSxJQUFVO1FBQ2hELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4QyxNQUFNLElBQUEsK0JBQUksRUFBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFkTCxrQ0FjSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQsIEFyZ3MgfSBmcm9tICdAc2FwcGhpcmUvZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5pbXBvcnQgeyBzZW5kIH0gZnJvbSAnQHNhcHBoaXJlL3BsdWdpbi1lZGl0YWJsZS1jb21tYW5kcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGluZ0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoY29udGV4dDogQ29tbWFuZC5Db250ZXh0LCBvcHRpb25zOiBDb21tYW5kLk9wdGlvbnMpIHtcclxuICAgIHN1cGVyKGNvbnRleHQsIHtcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgbmFtZTogJ2VjaG8nLFxyXG4gICAgICBhbGlhc2VzOiBbJ3NheSddLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ3BpbmcgcG9uZydcclxuICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYXN5bmMgbWVzc2FnZVJ1bihtZXNzYWdlOiBNZXNzYWdlLCBhcmdzOiBBcmdzKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IGFyZ3MucGljaygnc3RyaW5nJylcclxuICAgICAgYXdhaXQgc2VuZChtZXNzYWdlLCB7IGNvbnRlbnQ6IHRleHQgfSk7XHJcbiAgICAgIH1cclxuICAgIH0iXX0=