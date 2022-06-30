var creditsEnabled = false;

if(document.location.href.endsWith("?credits=true"))
{
  creditsEnabled = true;
  credits.classList.remove("credits-disabled");
}

function toggleCredits(){
  var credits = document.getElementById("credits");
  if (creditsEnabled){
    credits.classList.add("credits-disabled");
  }
  else {
    credits.classList.remove("credits-disabled");
  }
  creditsEnabled = !creditsEnabled;
}

var specsEnabled = false;

if(document.location.href.endsWith("?specs=true"))
{
  specsEnabled = true;
  specs.classList.remove("specs-disabled");
}

function toggleSpecs(){
  var specs = document.getElementById("specs");
  if (specsEnabled){
    specs.classList.add("specs-disabled");
  }
  else {
    specs.classList.remove("specs-disabled");
  }
  specsEnabled = !specsEnabled;
}

window.onload = function () {
  var hakierCounter = 0;
  var obamaCounter = 0;
  var creditsCounter = 0;

  window.onkeydown = function (gfg) {
    // hakier
    if (hakierCounter === 0 && gfg.keyCode === 72) { // h
      hakierCounter++;
    }
    else if (hakierCounter === 1 && gfg.keyCode === 65) { // a
      hakierCounter++;
    }
    else if (hakierCounter === 2 && gfg.keyCode === 75) { // k
      hakierCounter++;
    }
    else if (hakierCounter === 3 && gfg.keyCode == 73) { // i
      hakierCounter++;
    }
    else if (hakierCounter === 4 && gfg.keyCode === 69) { // e
      hakierCounter++;
    }
    else if (hakierCounter === 5 && gfg.keyCode === 82) { // r
      hakierCounter++;

      console.log("hakier");
      document.location = "/fileserver";

      hakierCounter = 0;
    }
    // obama
    else if (obamaCounter === 0 && gfg.keyCode === 79) { // o
      obamaCounter++;
    }
    else if (obamaCounter === 1 && gfg.keyCode === 66) { // b
      obamaCounter++;
    }
    else if (obamaCounter === 2 && gfg.keyCode === 65) { // a
      obamaCounter++;
    }
    else if (obamaCounter === 3 && gfg.keyCode == 77) { // m
      obamaCounter++;
    }
    else if (obamaCounter === 4 && gfg.keyCode === 65) { // a
      obamaCounter++;

      console.log("obama");
      document.location = "/obama.html";

      obamaCounter = 0;
    }
    // credits
    else if (creditsCounter === 0 && gfg.keyCode === 67) { // c
      creditsCounter++;
    }
    else if (creditsCounter === 1 && gfg.keyCode === 82) { // r
      creditsCounter++;
    }
    else if (creditsCounter === 2 && gfg.keyCode === 69) { // e
      creditsCounter++;
    }
    else if (creditsCounter === 3 && gfg.keyCode == 68) { // d
      creditsCounter++;
    }
    else if (creditsCounter === 4 && gfg.keyCode == 73) { // i
      creditsCounter++;
    }
    else if (creditsCounter === 5 && gfg.keyCode == 84) { // t
      creditsCounter++;
    }
    else if (creditsCounter === 6 && gfg.keyCode === 83) { // s
      creditsCounter++;

      console.log("credits");
      toggleCredits();

      creditsCounter = 0;
    }
    else{
      hakierCounter = 0;
      obamaCounter = 0;
      creditsCounter = 0;
    }
  };
};

const discordId = "468701667081322506";
function updateDiscord(data) {
  const { username, discriminator, avatar } = data.discord_user;
  const status = data.discord_status;
  const spotStatus = data.listening_to_spotify;
  const avatarUrl = `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png`;
  // const discord = document.getElementById('discord');
  // discord.innerHTML = `discord: ${username}#${discriminator}`;
  // const statusDot = document.getElementById('status');
  // statusDot.className = status;
  // if (status === 'online') {
  //   discord.classList.remove('yellow-text');
  //   discord.classList.remove('red-text');
  //   discord.classList.add('green-text');
  //   discord.classList.add('bold-text');
  // }
  // else if (status === 'idle') {
  //   discord.classList.remove('green-text');
  //   discord.classList.remove('red-text');
  //   discord.classList.add('yellow-text');
  //   discord.classList.add('bold-text');
  // }
  // else if (status === 'dnd') {
  //   discord.classList.remove('green-text');
  //   discord.classList.remove('yellow-text');
  //   discord.classList.add('red-text');
  //   discord.classList.add('bold-text');
  // }
  // else {
  //   discord.classList.remove('green-text');
  //   discord.classList.remove('yellow-text');
  //   discord.classList.remove('red-text');
  //   discord.classList.remove('bold-text');
  // }
  const statusBar = document.getElementById('status-bar');
  const statuses = {
    online: "Online",
    idle: "Z/w",
    dnd: "Nie przeszkadać",
    offline: "Offline",
  };
  statusBar.innerHTML = statuses[status];
  const statusDot = document.getElementById('status');
  statusDot.className = `status_${status}`;
  // const spotifyDot = document.getElementById('spotstatus');
  // if(spotStatus === true){
  //   spotifyDot.className = "online";
  // }
  // else{
  //   spotifyDot.className = "offline";
  // }
  // const spotify = document.getElementById('spotify');
  const spotifyBar = document.getElementById('spotify-bar');
  const spotifyBarLink = document.getElementById('spotify-bar-link');
  if(spotStatus === true){
    // spotify.classList.add("green-text");
    // spotify.classList.add("bold-text");

    spotifyBar.innerText = `${data.spotify.artist} - ${data.spotify.song}`;
    spotifyBarLink.setAttribute("href", `https://open.spotify.com/track/${data.spotify.track_id}`)
  }
  else{
    // spotify.classList.remove("green-text");
    // spotify.classList.remove("bold-text");

    spotifyBar.innerText = "Nic nie slucha";
    spotifyBarLink.setAttribute("href", `https://open.spotify.com/user/alc9rq7lz45r891daauz0dkpr`)
  }
  // discord.setAttribute("href", `https://discordapp.com/users/${discordId}`);
  const motdElement = document.getElementById('motd');
  motdElement.innerHTML = `MOTD: ${data.kv.motd}`
}

lanyard({
    userId: discordId,
    socket: true,
    onPresenceUpdate: updateDiscord
})

