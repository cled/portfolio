$().ready(function(){

//Hide All Positions & Reset Z-index

var resetPos = function () {
  for (var i=1;i<=5;i++){
    $('div#p' +i +' img').hide();
    for(var j=1;j<=3;j++) {
      $('div.b'+i+'p'+j).hide();
      $('div#p' +i +'.p' +j).css('z-index','9'); 
    }
  }
}

//Toggle Note Helpers

var noteShow = 1;
$('div.positionbg > *').click(function(){
  if (noteShow === 0) 
    {
      $('div.noteOverlay').show();
      noteShow = 1;
    }
    else
    {
      noteShow = 0;
      $('div.noteOverlay').hide();
    }
});

//bind mouseover events to all of the possible mode positions

for (var i=1;i<=5;i++){
  for (var j=1;j<=3;j++){
    $('div#p' +i +'.p' +j +' > *')
      .mouseover(function(x, y) {
        return function(){
          setPosition(x, y);
        }
    }(i, j));

  }
}

// Show only the mode position the mouse is hovering over on the fretboard

var setPosition = function (newpos,octave) {
  resetPos();
  $('div#p' +newpos +'.p' +octave).css('z-index','7'); 
  $('div.b' +newpos +'p' +octave).show();
  $('div#p' +newpos +'.p' +octave +' img').show();
}

// Move the mode position when a musical key is selected

var slidePos = ['gn','gs','an','as','bn','cn','cs','dn','ds','en','fn','fs']
for (i=0;i<slidePos.length;i++){

  $('div.'+slidePos[i]).click(function(x){
      return function(){
        var slideN = -840 + (x*70);
        $('div.position').animate({left:slideN +'px'},350);
        $('div.n1').css('background','');
        $(this).css('background','#aaa');
      }
  }(i));
}

setPosition(1,2);
$('div.gn').css('background','#aaa');


});
