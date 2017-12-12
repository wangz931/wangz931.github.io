$('.nav-bar1').hover(
	function() {
		$('.light.first').removeClass('hide1');
	}, function() {
		$('.light.first').addClass('hide1');
            
});




$('.nav-bar2').hover(
	function() {

$('.light.second').removeClass('hide3');
	    }, function() {
		$('.light.second').addClass('hide3');

});



$('.nav-bar1').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'first') {
      $('.lightbox').removeClass('hide2');
      $('.wrapper').addClass('hide2');
      
    } 


});

$('.nav-bar2').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'second') {
      $('.lightbox').removeClass('hide4');
      $('.wrapper').addClass('hide4');
      
    } 


});

$('.nav-bar3').hover(
	function() {

$('.light.third').removeClass('hide5');
	    }, function() {
		$('.light.third').addClass('hide5');

});

$('.nav-bar3').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'third') {
      $('.lightbox').removeClass('hide6');
      $('.wrapper').addClass('hide6');
      
    } 


});

$('.nav-bar4').hover(
	function() {

$('.light.fourth').removeClass('hide7');
	    }, function() {
		$('.light.fourth').addClass('hide7');

});

$('.nav-bar4').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'fourth') {
      $('.lightbox').removeClass('hide8');
      $('.wrapper').addClass('hide8');
      
    } 


});

$('.open').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'entrance') {
      $('.ok').removeClass('hide9');
      $('.lightbox.hide8').addClass('hide9');
      
    } 


});





























