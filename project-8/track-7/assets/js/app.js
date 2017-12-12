$('.one').click(function() {
    var button_name = $(this).data('button');  
    if (button_name == 'ok') {
      $('.lightbox').removeClass('hide');
      $('.outerspace').addClass('hide');
  }

  });


$('.hide').click(function() {
    var button_name = $(this).data('button');  
    if (button_name == 'hello') {
      $('.lightbox').removeClass('hide1');
      $('.one').addClass('hide1');
  }

  });
$('.hide1').click(function() {
    var button_name = $(this).data('button');  
    if (button_name == 'ok2') {
      $('.lightbox').removeClass('hide2');
      $('.one').addClass('hide2');
  }

  });
