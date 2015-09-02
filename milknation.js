(function () {

function extend() {
if (!window.bot) {
return setTimeout(extend, 1 * 1000);
}

var a = true;
var b = true;
var c = true;
var d = true;
var e = true;
var f = true;
var bot = window.bot;

bot.retrieveSettings();

setInterval(function () {
if(a === true) {
API.sendChat("https://plug.dj/its-a-trap-and-edm");
}
},
1000 * 60);

setInterval(function () {
if(b === true) {
API.sendChat("http://lemonparty.org/");
}
},
1000 * 1000);
        
setInterval(function () {
if(c === true) {
API.sendChat("FUCK YOU!");
}
},
1000 * 1000);
        
setInterval(function () {
if(d === true) {
API.sendChat(":trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface: :trollface:");
}
},
1000 * 1000);

setInterval(function () {
if(e === true) {
API.sendChat("http://gfycat.com/SelfishMixedAcornbarnacle");
}
},
1000 * 1000);

setInterval(function () {
if(f === true) {
API.sendChat("http://cdn.makeagif.com/media/7-05-2015/-xEI03.gif");
}
},
1000 * 1000);

bot.commands.a = {
command: ['a'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
a = !a;
API.sendChat("/me a now set to " + a);}}};

bot.commands.b = {
command: ['b'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
b = !b;
API.sendChat("/me b now set to " + b);}}};
                    
bot.commands.c = {
command: ['c'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
c = !c;
API.sendChat("/me c now set to " + c);}}};

bot.commands.d = {
command: ['d'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
d = !d;
API.sendChat("/me d message now set to " + d);}}};

bot.commands.e = {
command: ['e'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
e = !e;
API.sendChat("/me e message now set to " + e);}}};

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
