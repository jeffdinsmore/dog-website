$(document).ready(function(){
 $("button#dark").click(function() { 
 $("body").removeClass();
 $("body").addClass("black-background");
 $(".dark-show").hide();
 $(".light-hide").show();
});

$("button#light").click(function() {
$("body").removeClass();
$("body").addClass("white-background");
$(".light-hide").hide();
$(".dark-show").show();
});
});
