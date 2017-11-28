$('.entrance').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'one') {
      $('.lightbox').removeClass('hide1');
      $('.homepage').addClass('hide1');
      
    } 


});




