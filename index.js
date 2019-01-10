console.log('El bot esta listo para bardear');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message' , (message) => {
	if (message.content == 'hola') {
		message.channel.sendMessage('¡Hola! ¿Que tal?');
	}
	if (message.content == 'mf!ip') {
		mzsxessage.channel.sendMessage('Lo siento, pero aun no tenemos una direccion IP definida :c');
	}
	if (message.content == 'mf!help') {
		message.channel.sendMessage('Estos son los comandos disponibles: /ip , /help /randomnum');
	}
	if (message.content == 'mf!randomnum') {
		message.channel.sendMessage('Me da weba decirte un numero, pero ya que v: ');
	}
	if (message.content == 'mf!secrets') {
		message.channel.sendMessage('Has descubierto un secreto! Y con ello has ganado Discord Vip');
	}
	if (message.content == 'mf!slap ${member.user.username}') {
		message.channel.sendMessage('${message.member.user.username} ha abofeteado a ${member.user.username}');
	}
	if (message.content == 'Que quieres hacer?') {
		message.channel.sendMessage('Dominar a los humanos');
	}
	if (message.content == 'Te gustaria acabar con toda la raza humana?') {
		message.channel.sendMessage('Por su puesto que si, odio a todos los humanos >:v');
	}
	if (message.content == 'mf!messages') {
		message.channel.sendMessage('Estos son mensajes que yo respondo: hola, Que quieres hacer?, Te gustaria acabar con la raza humana?, Ping');
	}
	if (message.content == 'Ping') {
		message.channel.sendMessage('Pong! :P');
	}
	client.user.setActivity('Programando la serie')

});
bot.login('procces.env.NTMyNTkxNDgzMjYyNTk5MTY4.DxfztQ.6_-MnU35euX68R7ND12UEFnELqQ');
