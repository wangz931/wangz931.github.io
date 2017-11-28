$('.choice').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'one') {
      $('.lightbox').removeClass('hide1');
      $('.homepage').addClass('hide1');
      
    } 

     if (button_name == 'two') {
      $('.lightbox').removeClass('hide2');
      $('.homepage').addClass('hide2');
     
    }

    if (button_name == 'three') {
      $('.lightbox').removeClass('hide3');
      $('.homepage').addClass('hide3');
     
    }
});

$('.choice2').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'four') {
      $('.lightbox').removeClass('hide4');
      $('.three').addClass('hide4');
      
    } 


});