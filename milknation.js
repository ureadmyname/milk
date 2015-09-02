(function () {

function extend() {
if (!window.bot) {
return setTimeout(extend, 1 * 1000);
}

var autoa = true;
var autob = true;
var autoc = true;
var autod = true;
var autoe = true;
var autof = true;
var bot = window.bot;

bot.retrieveSettings();

setInterval(function () {
if(autoa === true) {
API.sendChat("!a");
}
},
1000 * 3);

setInterval(function () {
if(autob === true) {
API.sendChat("!b");
}
},
1000 * 14);
        
setInterval(function () {
if(autoc === true) {
API.sendChat("!c");
}
},
1000 * 5);
        
setInterval(function () {
if(autod === true) {
API.sendChat("!d");
}
},
1000 * 9);

setInterval(function () {
if(autoe === true) {
API.sendChat("!e");
}
},
1000 * 11);

setInterval(function () {
if(autof === true) {
API.sendChat("!f");
}
},
1000 * 6);

bot.commands.autoa = {
command: ['autoa'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoa = !autoa;
API.sendChat("/me a now set to " + autoa);}}};

bot.commands.autob = {
command: ['autob'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autob = !autob;
API.sendChat("/me b now set to " + autob);}}};
                    
bot.commands.autoc = {
command: ['autoc'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoc = !autoc;
API.sendChat("/me c now set to " + autoc);}}};

bot.commands.autod = {
command: ['autod'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autod = !autod;
API.sendChat("/me d message now set to " + autod);}}};

bot.commands.autoe = {
command: ['autoe'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoe = !autoe;
API.sendChat("/me autoe message now set to " + e);}}};

bot.commands.autof = {
command: ['autof'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autof = !autof;
API.sendChat("/me autof message now set to " + f);}}};

bot.commands.a { 			
command: 'a', 			
rank: 'user', 			
type: 'exact', 			
functionality: function (chat, cmd) { 			
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 			
if (!bot.commands.executable(this.rank, chat)) return void (0); 			
else {API.sendChat("/me https://plug.dj/its-a-trap-and-edm");}}}; 

bot.commands.b { 			
command: 'b', 			
rank: 'user', 			
type: 'exact', 			
functionality: function (chat, cmd) { 			
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 			
if (!bot.commands.executable(this.rank, chat)) return void (0); 			
else {API.sendChat("/me http://lemonparty.org/");}}}; 

bot.commands.c { 			
command: 'c', 			
rank: 'user', 			
type: 'exact', 			
functionality: function (chat, cmd) { 			
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 			
if (!bot.commands.executable(this.rank, chat)) return void (0); 			
else {API.sendChat("/me :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface:");}}}; 

bot.commands.d { 			
command: 'd', 			
rank: 'user', 			
type: 'exact', 			
functionality: function (chat, cmd) { 			
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 			
if (!bot.commands.executable(this.rank, chat)) return void (0); 			
else {API.sendChat("/me http://gfycat.com/SelfishMixedAcornbarnacle");}}}; 

bot.commands.e { 			
command: 'e', 			
rank: 'user', 			
type: 'exact', 			
functionality: function (chat, cmd) { 			
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 			
if (!bot.commands.executable(this.rank, chat)) return void (0); 			
else {API.sendChat("/me http://cdn.makeagif.com/media/7-05-2015/-xEI03.gif");}}}; 

bot.commands.f { 			
command: 'f', 			
rank: 'user', 			
type: 'exact', 			
functionality: function (chat, cmd) { 			
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 			
if (!bot.commands.executable(this.rank, chat)) return void (0); 			
else {API.sendChat("/me FUCK YOU!");}}}; 

bot.loadChat();}
localStorage.setItem("basicBotsettings", JSON.stringify({

botName: "trollbot",
language: "english",
chatLink: "https://rawgit.com/ureadmyname/basicBot/master/lang/en.json",
scriptLink: "https://rawgit.com/ureadmyname/milk/master/basicbot.js",
roomlock: false,
startupCap: 1,
startupVolume: 0,
startupEmoji: false,
autowoot: true,
autoskip: false,
smartSkip: true,
cmdDeletion: true,
maximumAfk: 120,
afkRemoval: true,
maximumDc: 180,
bouncerPlus: false,
blacklistEnabled: true,
lockdownEnabled: false,
lockGuard: false,
maximumLocktime: 10,
cycleGuard: false,
maximumCycletime: 10,
voteSkip: false,
voteSkipLimit: 10,
historySkip: false,
timeGuard: true,
maximumSongLength: 10,
autodisable: true,
commandCooldown: 15,
usercommandsEnabled: true,
skipPosition: 1,
skipReasons: [
["theme", "This song does not fit the room theme. "],
["op", "This song is on the OP list. "],
["history", "This song is in the history. "],
["sound", "The song you played had bad sound quality or no sound. "],
["nsfw", "The song you contained was NSFW (image or sound). "],
["unavailable", "The song you played was not available for some users. "]],
afkpositionCheck: 15,
afkRankCheck: "ambassador",
motdEnabled: false,
motdInterval: 5,
motd: "Temporary Message of the Day",
filterChat: false,
etaRestriction: false,
welcome: true,
opLink: "http://git.io/vOTmj",
rulesLink: "http://goo.gl/5SNSgo",
themeLink: "Community Theme: http://en.wikipedia.org/wiki/List_of_electronic_music_genres",
fbLink: "No FB link at the moment.",
youtubeLink: "No YT link at the moment.",
website: "No website at the moment.",
intervalMessages: [],
messageInterval: 30,
songstats: false,
commandLiteral: "!",
blacklists: {
NSFW: "https://rawgit.com/ureadmyname/basicBot-customization/master/ExampleNSFWlist.json",
OP: "https://rawgit.com/ureadmyname/basicBot-customization/master/ExampleOPlist.json",
BANNED: "https://rawgit.com/ureadmyname/basicBot-customization/master/ExampleBANNEDlist.json"}}));
$.getScript("https://rawgit.com/ureadmyname/milk/master/basicbot.js", extend);
}).call(this);
