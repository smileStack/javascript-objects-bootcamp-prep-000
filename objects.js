var playlist = {song: "my"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  var obj = Object.assign({},playlist);
  console.log(obj);
  delete obj[artistName];
  
}

removeFromPlaylist(playlist,"song");
console.log("end");
console.log(obj);
