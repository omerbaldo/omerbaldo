$(document).ready(function() {
                console.log("hi");

 $('.panelD').hide();
 $('.panelV').hide();

 $('.panelF').hide();
 $('.panelC').hide();


 $('.pull-meC').click(function() {
        $('.panelC').slideToggle('slow');

    });
  $('.pull-meV').click(function() {
        $('.panelV').slideToggle('slow');

    });
   $('.pull-meD').click(function() {
        $('.panelD').slideToggle('slow');

    });
    $('.pull-meF').click(function() {
        $('.panelF').slideToggle('slow');

    });




});