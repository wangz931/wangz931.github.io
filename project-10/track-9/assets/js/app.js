
$('.butt').click(function() {
    var button_name = $(this).data('button');  
    if (button_name == 'gate') {
      $('.lightbox').removeClass('hide');
      $('.wrapper').addClass('hide');
  }

  });


$('.location').click(function() {
	var button_name = $(this).data('button');
       if (button_name == 'go') {
      $('.lightbox').removeClass('hide1');

}
     

});

$('.person').click(function() {
	var button_name = $(this).data('button');
       if (button_name == 'stole') {
      $('.lightbox').removeClass('hide2');

}
     

});

$('.spot').click(function() {
	var button_name = $(this).data('button');
       if (button_name == 'rocket') {
      $('.lightbox').removeClass('hide3');

}
     

});

$('.spot').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'rocket') {
      $('.lightbox').removeClass('hide3');
      $('.wrapper').addClass('hide3');
      
    } 


});

function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }

function play(){
       var audio = document.getElementById("audio1");
       audio.play();
                 }









