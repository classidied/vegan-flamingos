const { token } = require("./config.json");
// creating client object
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

/* 
- typed in mANUALLY BECAUSE INSTAGRAM DOESN'T LET YOU EXPORT STORY RESPONSES
- these are the verbatim responses from people (I wrote only the first and last messages); 
they were sent with the insta username of the person who wrote the message but that's been 
removed so it's harder to dox me that's right this is directed at you chinmay (also for their privacy I guess)
*/
const compliments = [
  "So this happened: https://cdn.discordapp.com/attachments/830861921716273163/893272651504693278/IMG_20210929_220244_942.jpg" + "\n" + "I quite literally meant it when I said 'through the day'. You'll get one about once every 19-20 mins during the next 12 hours :D Enjoy!",
  "IDK YOU BUT I LOVE THE NAME STELLAR", 
  "Ur one of the funniest people I know. I love talking to you and am very glad that we got close",
  "Your nostrils are attractively even.", 
  "I appreciate your earlobes", 
  "You are good at making people cry in arguments",
  "You are stellar",
  "Your outfits and hairstyles are ALWAYS on point",
  "I dont know her too well but she has nice hair",
  "Also, good taste in music", 
  "ur pretty stellar HAHA GET IT :heart_eyes: :heart_eyes:", 
  "Sheeeeesh", 
  "STELLAR idk how this works but ily have a big bday bonanza loser i reached the word limit fu", 
  "ur hair is so pretty but it would look better if you dyed it like a tomato for ur bday",  
  "ur feet are so moist can i please lick them (bday present??)",
  "u smell different when you're awake", 
  "HEY STELLAR u are such an amazing human being I love you hehe", 
  "Hi Stellar! Ms. Attwell is for sure proud of her smaller self. Happy birthday",
  "She has such a powerful and intimidating vibe and I'm here for it", 
  "thanks for being my fav vp of comps of orals dole whip tasted better with u there :heart: :heart:", 
  "Strangle Zhangle",
  "Your croswell roasts are always on point", 
  "Keep up the good work! Gaslight, gatekeep, girlboss your way through :)",
  "WAIT THIS IS SO CUTE um tell her that she's a great speaker and so interesting to listen to", 
  "IDK IF IM OVERSTEPPING THO I ONLY SPOKE TO HER IN GR 9 :sob:", 
  "Woah Stellar ur so cool :D", 
  "Smartest and most well spoken girl ik",
  "You're doing great so far!",
  "Your hair is very nice!", 
  "You are loved <3", 
  "You're hotter than the sun :smirk: very interstellar :weary:", 
  "You have a gorgeous gastrointestinal tract",
  "You are so cool ",  
  "You're so hot you denature my enzymes",
  "You're so FUNKY and absolutely cool! You got this!",
  "Stellar pog", 
  "https://cdn.discordapp.com/attachments/892933644832895059/894227841007386624/unknown.png",
  "Happy uterus expulsion anniversary zhangle :D hope this gift is acceptable"
]
client.once("ready", () => {
    console.log("Ready!");
    client.user.setActivity("Complimenting Stellar");

    // messaging function
    function compliment(i) {
      // make sure the bot shares at least one server with the recipient otherwise they aren't in cache
      client.users.fetch('stellars-discord-id', false).then((user) => {
        user.send(compliments[i]);
        // logging every time a message was sent to make sure it wasn't breaking
        var d = new Date();
        console.log("message sent: ", compliments[i], " at ", d.toLocaleTimeString());
      });
    }

    // determining start time
    function theFinalCountdown(){
      var d = new Date();
      return -d + d.setHours(9,0,0,0);
    }

    console.log("the first message will send in: ", theFinalCountdown()/60000, " minutes")

    // timing based on number of compliments for the robust dynamicness
    const totalMs = 1000 * 60 * 60 * 12; // 12 hrs; 9am-9pm
    const testMs = 1000 * 60 * 60 * 9;
    const time = totalMs / compliments.length; 
    
    // sending the first message at the appropriate time
    setTimeout(function() {
      var i = 0;
      compliment(i);
      i++
      // sending every x ms after the first one
      setInterval(function() {
        // no error catching so that I don't have to terminate the bot myself :D
        compliment(i);
        i++;
      }, time)
      // attempt to not have setInterval die while I'm idleee
      // **this probably was completely unnecessary; but I needed to set my computer to never sleep to ensure all the processes ran
      setInterval(function() {
        var d = new Date();
        // print this every minute
        console.log("time now: ", d.toLocaleTimeString());
      }, 60000)
    }, theFinalCountdown());
    
});
  
client.login(token);
