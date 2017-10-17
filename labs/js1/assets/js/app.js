
var cash = 10000;
$('.cash').html(cash);


$(".item").click(function() {
	var item = $(this).data('item');
	var amount =$(this). data('amount');
 

 charge_card(amount, item);
	

	




});









function charge_card(amount,item){
	//only going to work if we have the money 
  
	if (cash >= amount){
		cash = cash - amount;
		update_wallet();
		$('.closet-items'). append(item + ','); 
		
	       
	} else {
		alert('not enough money.');
	}

}

function update_wallet(){
	$('.cash').html(cash);
}










