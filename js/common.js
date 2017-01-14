
/*первый*/
	$(".option1").click(function(){
		if ( !($(".option1").hasClass("finalselected")) ) {
		$(".selected").removeClass("selected");
		$(".option1").addClass("selected");
		$(".finalselected").removeClass("finalselected");
		var ab2 =setTimeout(function () {
			$(".finalselected").removeClass("finalselected");
		$(".option1").addClass("finalselected");

								}, 1200);
	};
		if ( $(".option1").hasClass("finalselected") ) {
			$(".greened").removeClass("greened");
			$(".option1").addClass("greened");
			$(".sale_form").addClass("sale_form_show");
			$(".next").addClass("next_active");
			$(".option1").removeClass("finalselected");
			$(".anotherone").removeClass("anotherone_active");
			$(".skip, .another p").show();
			var bc =setTimeout(function () {
		$(".option1").removeClass("selected");
		$(".sale_form .sale span").text("1%");
								}, 1200);
			$(".greened_option").removeClass("greened_option");
			$(".option1").parent().addClass("greened_option");
			clearTimeout(ab1);
				}
	});
/*первый*/
	$(".option2").click(function(){
		if ( !($(".option2").hasClass("finalselected")) ) {
		$(".selected").removeClass("selected");
		$(".option2").addClass("selected");
		$(".finalselected").removeClass("finalselected");
		var ab2 =setTimeout(function () {
			$(".finalselected").removeClass("finalselected");
		$(".option2").addClass("finalselected");
								}, 1200);
	};
		if ( $(".option2").hasClass("finalselected") ) {
			$(".greened").removeClass("greened");
			$(".option2").addClass("greened");
			$(".sale_form").addClass("sale_form_show");
			$(".next").addClass("next_active");
			$(".option2").removeClass("finalselected");
			$(".anotherone").removeClass("anotherone_active");
			$(".skip, .another p").show();
			var bc =setTimeout(function () {
		$(".option2").removeClass("selected");
		$(".sale_form .sale span").text("1%");
								}, 1200);
			$(".greened_option").removeClass("greened_option");
			$(".option2").parent().addClass("greened_option");
			clearTimeout(ab1);
				}
	});
/*первый*/
	$(".option3").click(function(){
		if ( !($(".option3").hasClass("finalselected")) ) {
		$(".selected").removeClass("selected");
		$(".option3").addClass("selected");
		$(".finalselected").removeClass("finalselected");
		var ab2 =setTimeout(function () {
			$(".finalselected").removeClass("finalselected");
		$(".option3").addClass("finalselected");
								}, 1200);
	};
		if ( $(".option3").hasClass("finalselected") ) {
			$(".greened").removeClass("greened");
			$(".option3").addClass("greened");
			$(".sale_form").addClass("sale_form_show");
			$(".next").addClass("next_active");
			$(".option3").removeClass("finalselected");
			$(".anotherone").removeClass("anotherone_active");
			$(".skip, .another p").show();
			var bc =setTimeout(function () {
		$(".option3").removeClass("selected");
		$(".sale_form .sale span").text("1%");
								}, 1200);
			$(".greened_option").removeClass("greened_option");
			$(".option3").parent().addClass("greened_option");
			clearTimeout(ab1);
				}
	});
	/*первый*/
	$(".option4").click(function(){
		if ( !($(".option4").hasClass("finalselected")) ) {
		$(".selected").removeClass("selected");
		$(".option4").addClass("selected");
		$(".finalselected").removeClass("finalselected");
		var ab2 =setTimeout(function () {
			$(".finalselected").removeClass("finalselected");
		$(".option4").addClass("finalselected");
								}, 1200);
	};
		if ( $(".option4").hasClass("finalselected") ) {
			$(".greened").removeClass("greened");
			$(".option4").addClass("greened");
			$(".sale_form").addClass("sale_form_show");
			$(".next").addClass("next_active");
			$(".option4").removeClass("finalselected");
			$(".anotherone").removeClass("anotherone_active");
			$(".skip, .another p").show();
			var bc =setTimeout(function () {
		$(".option4").removeClass("selected");
		$(".sale_form .sale span").text("1%");
								}, 1200);
			$(".greened_option").removeClass("greened_option");
			$(".option4").parent().addClass("greened_option");
			clearTimeout(ab1);
				}
	});
	/*первый*/
	$(".option5").click(function(){
		if ( !($(".option5").hasClass("finalselected")) ) {
		$(".selected").removeClass("selected");
		$(".option5").addClass("selected");
		$(".finalselected").removeClass("finalselected");
		var ab2 =setTimeout(function () {
			$(".finalselected").removeClass("finalselected");
		$(".option5").addClass("finalselected");
								}, 1200);
	};
		if ( $(".option5").hasClass("finalselected") ) {
			$(".greened").removeClass("greened");
			$(".option5").addClass("greened");
			$(".sale_form").addClass("sale_form_show");
			$(".next").addClass("next_active");
			$(".option5").removeClass("finalselected");
			$(".anotherone").removeClass("anotherone_active");
			$(".skip, .another p").show();
			var bc =setTimeout(function () {
		$(".option5").removeClass("selected");
		$(".sale_form .sale span").text("1%");
								}, 1200);
			$(".greened_option").removeClass("greened_option");
			$(".option5").parent().addClass("greened_option");
			clearTimeout(ab1);
				}
	});
	/*первый*/
	$(".option6").click(function(){
		if ( !($(".option6").hasClass("finalselected")) ) {
		$(".selected").removeClass("selected");
		$(".option6").addClass("selected");
		$(".finalselected").removeClass("finalselected");
		var ab2 =setTimeout(function () {
			$(".finalselected").removeClass("finalselected");
		$(".option6").addClass("finalselected");
								}, 1200);
	};
		if ( $(".option6").hasClass("finalselected") ) {
			$(".greened").removeClass("greened");
			$(".option6").addClass("greened");
			$(".sale_form").addClass("sale_form_show");
			$(".next").addClass("next_active");
			$(".option6").removeClass("finalselected");
			$(".anotherone").removeClass("anotherone_active");
			$(".skip, .another p").show();
			var bc =setTimeout(function () {
		$(".option6").removeClass("selected");
		$(".sale_form .sale span").text("1%");
								}, 1200);
			$(".greened_option").removeClass("greened_option");
			$(".option6").parent().addClass("greened_option");
			clearTimeout(ab1);
				}
	});


$(".send").click(function(){
if ( ($(".form_name").hasClass("form_name_active") ) && ($(".form_tel").hasClass("form_tel_active") )){
 $(".sale2_form_hid").addClass("success");
}
});





$(".for6buttonfinal").click(function(){
	$(".for6buttonfinal_active").removeClass("for6buttonfinal_active");
	$(this).toggleClass("for6buttonfinal_active");
$(".next").addClass("next_active");
$(".sale_form").addClass("sale_form_show");
$(".sale_form .sale span").text("6%");
if($('.for6buttonfinal_active').length==0){
	$(".sale_form").removeClass("sale_form_show");
	$(".next").removeClass("next_active");
	$(".sale_form .sale span").text("5%");
};
});




$(".radio_button").click(function(){
	$(this).toggleClass("radio_button_active");
$(".next").addClass("next_active");
$(".sale_form").addClass("sale_form_show");
$(".sale_form .sale span").text("4%");
if($('.radio_button_active').length==0){
	$(".sale_form").removeClass("sale_form_show");
	$(".next").removeClass("next_active");
	$(".sale_form .sale span").text("3%");
};

});










var i=1,k=1,p=1;

	$(".another").click(function(){
		$(".anotherone").addClass("anotherone_active");
		$(".skip, .another p").hide();
	});

function inputfunc(){
	var i=document.getElementById("another").value;
	
	if(i==""){
		$(".next").removeClass("next_active");
		$(".sale_form").removeClass("sale_form_show");
		$(".sale_form .sale span").text("5%");	
	}
	else{
		$(".selected").removeClass("selected");
	$(".finalselected").removeClass("finalselected");
	$(".greened_option").removeClass("greened_option");
	$(".for6buttonfinal_active").removeClass("for6buttonfinal_active");
	$(".next").addClass("next_active");
	$(".greened").removeClass("greened");
	$(".sale_form").addClass("sale_form_show");
	$(".sale_form .sale span").text("6%");
	}
};

function inputname(){

	$(".form_name").addClass("form_name_active");


	i=i*0;
	p=i+k;
	if(p==0){
		$(".send").addClass(".send_active")
	}
};
function inputtel(){
	$(".form_tel").addClass("form_tel_active");
	k=k*0;
	p=i+k;
	if(p==0){
		$(".send").addClass("send_active")
	}
}






$(function(){
  //Использование параметра completed
  $("#phone").mask("8 (999) 999-9999", {
    completed: function(){ 
    inputtel(); }
  });
});



