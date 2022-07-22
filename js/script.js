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
    // Discord
const discordId = "468701667081322506";
function updateDiscord(data) {
  const { username, discriminator, avatar } = data.discord_user;
  const status = data.discord_status;
  const spotStatus = data.listening_to_spotify;
  const avatarUrl = `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png`;
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
    // Spotify
  const spotifyBar = document.getElementById('spotify-bar');
  const spotifyBarLink = document.getElementById('spotify-bar-link');
  if(spotStatus === true){
    spotifyBar.innerText = `${data.spotify.artist} - ${data.spotify.song}`;
    spotifyBarLink.setAttribute("href", `https://open.spotify.com/track/${data.spotify.track_id}`)
  }
  else{
    spotifyBar.innerText = "Nic nie slucha";
    spotifyBarLink.setAttribute("href", `https://open.spotify.com/user/alc9rq7lz45r891daauz0dkpr`)
  }
  const motdElement = document.getElementById('motd');
  motdElement.innerHTML = `MOTD: ${data.kv.motd}`
}

lanyard({
    userId: discordId,
    socket: true,
    onPresenceUpdate: updateDiscord
})

