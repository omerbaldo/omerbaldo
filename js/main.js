$(document).ready(function() {

	//navigation bar highlight
	$(".nb").hover(function() {
		 $('.nb').hover( function(){
		      $(this).css('color', "red");
		   },
		   function(){
		      $(this).css('color', '#000');
		   });	
	});

	//social media button highlight
	$(".socialmedia").hover(function() {
		 $('.socialmedia').hover( function(){
		      $(this).css('filter', "grayscale(0%)");
		   },
		   function(){
		      $(this).css('filter', 'grayscale(100%)');
		   });	
	});



});