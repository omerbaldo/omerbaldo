$(document).ready(function() {

function s(){
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

var i = 0;

function imageSwitch(){
	if (i==0){

		$('.RN').css('backgroundImage','url(img/prj/1.png)');
		i++;
	}else if (i==1){
		$('.RN').css('backgroundImage','url(img/prj/2.png)');
		i++;
	}else if(i==2){
		$('.RN').css('backgroundImage','url(img/prj/3.png)');
		i++;
	}else if(i==3){
    	$('.RN').css('backgroundImage','url(img/prj/4.png)');
    	i=0;
	}

}

var interval = self.setInterval(function(){imageSwitch()},3000);



});