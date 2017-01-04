$(document).ready(function() {
	$(".nb").hover(function() {
		 $('.nb').hover( function(){
		      $(this).css('color', "red");
		   },
		   function(){
		      $(this).css('color', '#000');
		   });	
	});
});