// $('.nav-item').click(function() {
//   var button_name = $(this).data('button');
  
//   $('.content').attr('class', 'column content');
//   $('.content').addClass(button_name);

//     $('.nav-item').removeClass('active');
//   $('.about-text').addClass('hide');

//     $(this).addClass('active'); 
// });

// $('.close-button').click(function() {
//   $('.nav-item').removeVlass('active');
//   if (button_name == 'ring') {
//  	 $('.ringpic').removeClass('hide');
//   }
// });


$('.option').click(function() {
	var img_to_show = $(this).data('target');

	$(img_to_show).removeClass('hide');

})