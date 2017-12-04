$('.box').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'tokyo') {
      $('.lightbox').removeClass('hide1');
      $('.homepage').addClass('hide1');
      
    } 


});

