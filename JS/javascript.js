$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$('.nav div.main_list ul li a').click(function () {
    // $(this).removeClass('active');
    console.log(screen.width);
    if(screen.width<770){
    	console.log("Clicked menu");
    	$("#mainListDiv").toggleClass("hide_list");
    	$("#mainListDiv").fadeOut();
    	myFunction();
	}

});
function myFunction() {
  var element = document.getElementById("navTrigger");
  element.classList.remove("active");
}
