let imagePieces = [];

function draw() {

      var ctx = document.getElementById('canvas').getContext('2d');
      var img = new Image();

      img.onload = function() {
        for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 3; j++) {
            //ctx.drawImage(img, j * 50, i * 38, 32, 38);
            ctx.drawImage(img, j * 32, i * 32, 32, 32, j * 32, i * 32, 32, 32);
          }
        }
      };
      img.src = 'flakes32.png';




}

