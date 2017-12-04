$('.entrance2').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'gate') {
      $('.lightbox').removeClass('hide1');
      $('.homepage').addClass('hide1');
      
    } 


});




 $('.big1').click(function() {
    var button_name = $(this).data('button');  
    if (button_name == 'jerry') {
      $('.lightbox').removeClass('hide2');
      $('.gate').addClass('hide2');
  }


  });


  $('.story').click(function() {
	var button_name = $(this).data('button');
       if (button_name == 'show') {
      $('.lightbox').removeClass('hide');

}
     

});

   $('.bossy').click(function() {
  var button_name = $(this).data('button');
       if (button_name == 'show2') {
      $('.lightbox').removeClass('hide3');

}
     

});


   $('.big2').click(function() {
  var button_name = $(this).data('button');
       if (button_name == 'rachel') {
      $('.lightbox').removeClass('hide4');
      $('.gate').addClass('hide4');

}
     

});

  
    $('.story1').click(function() {
  var button_name = $(this).data('button');
       if (button_name == 'show4') {
      $('.lightbox').removeClass('hide5');
      $('.hide4').addClass('hide5');

}
     

});


 $('.car').click(function() {
  var button_name = $(this).data('button');
       if (button_name == 'show5') {
      $('.lightbox').removeClass('hide6');
      $('.show4').addClass('hide6');

}
     

});

$('.choice2').click(function() {
  var button_name = $(this).data('button');
       if (button_name == 'show6') {
      $('.lightbox').removeClass('hide7');
      $('.show5').addClass('hide7');

}
     

});







 
