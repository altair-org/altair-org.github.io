
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
 $(".sale2_form_hid").fadeIn(1000); 
}
});



$(".next").click(function(){
if ( $(".next").hasClass("next_active") ){
$(".sale_form").removeClass("sale_form_show");
	$(".next").removeClass("next_active");
	$(".anotherone").removeClass("anotherone_active");
	$(".skip, .another p").show();
}
});




$(".for5button").click(function(){
	$(".for5button").toggleClass("for5button_active");
$(".next").addClass("next_active");
$(".sale_form").addClass("sale_form_show");
$(".sale_form .sale span").text("6%");
$(".chooose").html("Отменить");
if($('.for5button_active').length==0){
	$(".sale_form").removeClass("sale_form_show");
	$(".next").removeClass("next_active");
	$(".sale_form .sale span").text("5%");
	$(".chooose").html("Выбрать");
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



$(".chooose").click(function(){$(".for5button").toggleClass("for5button_active");
$(".next").addClass("next_active");
$(".sale_form").addClass("sale_form_show");
$(".sale_form .sale span").text("6%");
$(".chooose").html("Отменить");
if($('.for5button_active').length==0){
	$(".sale_form").removeClass("sale_form_show");
	$(".next").removeClass("next_active");
	$(".sale_form .sale span").text("5%");
	$(".chooose").html("Выбрать");
};
});


$(".for6select1_1 .choose").click(function(){
if($(".for6select1_2 .for6buttonfinal").hasClass("for6buttonfinal_active")){
$(".for6select1_2 .for6buttonfinal").removeClass("for6buttonfinal_active");
$(".for6select1_2 .choose").html("Выбрать");
};
$(".for6select1_1 .for6buttonfinal").toggleClass("for6buttonfinal_active");
$(".for6select1_1 .choose").html("Отменить");
$(".next").addClass("next_active");
$(".sale_form").addClass("sale_form_show");
$(".sale_form .sale span").text("6%");
if($('.for6buttonfinal_active').length==0){
$(".for6select1_1 .choose").html("Выбрать");
$(".sale_form").removeClass("sale_form_show");
	$(".next").removeClass("next_active");
	$(".sale_form .sale span").text("5%");
};
});

$(".for6select1_1 .for6buttonfinal").click(function(){
if($(".for6select1_2 .for6buttonfinal").hasClass("for6buttonfinal_active")){
$(".for6select1_2 .for6buttonfinal").removeClass("for6buttonfinal_active");
$(".for6select1_2 .choose").html("Выбрать");
};
$(".for6select1_1 .for6buttonfinal").toggleClass("for6buttonfinal_active");
$(".for6select1_1 .choose").html("Отменить");
$(".next").addClass("next_active");
$(".sale_form").addClass("sale_form_show");
$(".sale_form .sale span").text("6%");
if($('.for6buttonfinal_active').length==0){
$(".for6select1_1 .choose").html("Выбрать");
$(".sale_form").removeClass("sale_form_show");
	$(".next").removeClass("next_active");
	$(".sale_form .sale span").text("5%");
};
});


$(".for6select1_2 .choose").click(function(){
if($(".for6select1_1 .for6buttonfinal").hasClass("for6buttonfinal_active")){
$(".for6select1_1 .for6buttonfinal").removeClass("for6buttonfinal_active");
$(".for6select1_1 .choose").html("Выбрать");
};
$(".for6select1_2 .for6buttonfinal").toggleClass("for6buttonfinal_active");
$(".for6select1_2 .choose").html("Отменить");
$(".next").addClass("next_active");
$(".sale_form").addClass("sale_form_show");
$(".sale_form .sale span").text("6%");

if($('.for6buttonfinal_active').length==0){

$(".for6select1_2 .choose").html("Выбрать");
$(".sale_form").removeClass("sale_form_show");
	$(".next").removeClass("next_active");
	$(".sale_form .sale span").text("5%");	
};
});



$(".for6select1_2 .for6buttonfinal").click(function(){
if($(".for6select1_1 .for6buttonfinal").hasClass("for6buttonfinal_active")){
$(".for6select1_1 .for6buttonfinal").removeClass("for6buttonfinal_active");
$(".for6select1_1 .choose").html("Выбрать");
};
$(".for6select1_2 .for6buttonfinal").toggleClass("for6buttonfinal_active");
$(".for6select1_2 .choose").html("Отменить");
$(".next").addClass("next_active");
$(".sale_form").addClass("sale_form_show");
$(".sale_form .sale span").text("6%");

if($('.for6buttonfinal_active').length==0){

$(".for6select1_2 .choose").html("Выбрать");
$(".sale_form").removeClass("sale_form_show");
	$(".next").removeClass("next_active");
	$(".sale_form .sale span").text("5%");	
};
});





$(".href61").click(function(){
$(".for6button1").addClass("for6buttonfinal_active");

});




$(".option1").mouseover(function(){
	var a=	document.getElementsByClassName("photo")[0].src = 'img/1.png';
});
$(".option2").mouseover(function(){
	var a=	document.getElementsByClassName("photo")[0].src = 'img/12.png';
});
$(".option3").mouseover(function(){
	var a=	document.getElementsByClassName("photo")[0].src = 'img/13.png';
});
$(".option4").mouseover(function(){
	var a=	document.getElementsByClassName("photo")[0].src = 'img/12.png';
});
$(".option5").mouseover(function(){
	var a=	document.getElementsByClassName("photo")[0].src = 'img/1.png';
});
$(".option6").mouseover(function(){
	var a=	document.getElementsByClassName("photo")[0].src = 'img/13.png';
});







$(".choose1").click(function(){
	$(".choosing.active").removeClass("active");
	$(".main_choose.active").removeClass("active");
	$(".choose1").addClass("active");
$(".main_choose1").addClass("active");
});
$(".choose2").click(function(){
	$(".choosing.active").removeClass("active");
	$(".main_choose.active").removeClass("active");
	$(".choose2").addClass("active");
$(".main_choose2").addClass("active");
});
$(".choose3").click(function(){
	$(".choosing.active").removeClass("active");
	$(".main_choose.active").removeClass("active");
	$(".choose3").addClass("active");
$(".main_choose3").addClass("active");
});
$(".choose4").click(function(){
	$(".choosing.active").removeClass("active");
	$(".main_choose.active").removeClass("active");
	$(".choose4").addClass("active");
$(".main_choose4").addClass("active");
});
$(".choose5").click(function(){
	$(".choosing.active").removeClass("active");
	$(".main_choose.active").removeClass("active");
	$(".choose5").addClass("active");
$(".main_choose5").addClass("active");
});



function filefunc(){
	var k=document.getElementById("uploadd").files[0].name;
	$("#name_file").html(k);
};









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
	$(".radio_button_active").removeClass("radio_button_active");
	$(".next").addClass("next_active");
	$(".greened").removeClass("greened");
	$(".sale_form").addClass("sale_form_show");
	$(".sale_form .sale span").text("6%");
	}
};





function inputname(){
	var n=document.getElementById("name").value;

	if(n==""){
		$(".form_name").removeClass("form_name_active");
			$(".send").removeClass("send_active1");
				$(".send").removeClass("send_active");
	$(".form_name +.butbox").css("background-color", "rgb(173, 50, 14)");
	}
	else{
	$(".form_name").addClass("form_name_active");
	$(".send").addClass("send_active1");
	$(".form_name +.butbox").css("background-color", "rgb(105, 130, 85)");
	if($(".send").hasClass("send_active2")){
		$(".send").addClass("send_active");
	};


	};
	
};
function inputtel(){
var k=document.getElementById("phone").value;

	if(k=="" || !(document.getElementById("phone").value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
))){
	$(".form_tel").removeClass("form_tel_active");
	$(".send").removeClass("send_active2");
	$(".send").removeClass("send_active");
	$(".form_tel +.butbox").css("background-color", "rgb(146, 42, 12)");
	}
	else{
	$(".form_tel").addClass("form_tel_active");
	$(".send").addClass("send_active2");
	$(".form_tel +.butbox").css("background-color", "rgb(84, 108, 64)");
	if($(".send").hasClass("send_active1")){
		$(".send").addClass("send_active");

	};
	

	};
}
/**/
	


/*

$(function(){
  $("#phone").mask("8 (999) 999-9999", {
    completed: function(){ 
    inputtel(); },
  });
});

*/


