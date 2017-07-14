var xhr = new XMLHttpRequest();

$(document).ready(function() {
  $.get("https://lit-fortress-6467.herokuapp.com/object", function(data) {
    console.log(data);
    console.log(data.results[0].cover_art);
    var albums = data['results'];
    console.log(albums);
    var coverArt = [];
    for (var i = 0; i < albums.length; i++) {
      //console.log(albums[i].cover_art);
      coverArt.push(albums[i].cover_art);
      console.log(coverArt);
      var imgScroller = document.createElement('img');
      imgScroller.innerHTML = "<img src ='images/" + coverArt[i] + "'>";
      document.querySelector('#albumCoverScroll').appendChild(imgScroller)
      // document.getElementById("albumCoverScroll").innerHTML = ('<img src="' + 'images/' + coverArt[i] + '" width="250px">')
    }

  })


  image = new Array();
  image[0] = "21.jpg";
  image[1] = 'division_bell.jpg';
  image[2] = 'ghost_in_the_machine.jpg';
  image[3] = 'red.jpg';
  image[4] = 'thriller.jpg';

  function getRandomImage() {
    var num = Math.floor(Math.random() * 5);
    var img = image[num];
    document.getElementById("randImage").innerHTML = ('<img src="' + 'images/' + img + '" width="250px">')

  }

  function getRandomImage1() {
    var num = Math.floor(Math.random() * 5);
    var img = image[num];
    document.getElementById("randImage1").innerHTML = ('<img src="' + 'images/' + img + '" width="250px">')

  }

  function getRandomImage2() {
    var num = Math.floor(Math.random() * 5);
    var img = image[num];
    document.getElementById("randImage2").innerHTML = ('<img src="' + 'images/' + img + '" width="250px">')

  }

  function pageChange() {
    return window.location.href = "playlist.html";
  }


})
