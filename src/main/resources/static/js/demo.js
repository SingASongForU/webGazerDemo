var img=document.querySelector("img");
var border_length=4085;
var length=400;
var step=1;
scrollDown(length);

function scrollDown(length){
	var time=0;
	var scrollDownInterval=setInterval(function(){
		if(time<length){
			console.log(img.style.top.replace("px",""));
			img.style.top=-time+"px";
			time+=step;
		}else{
			clearInterval(scrollDownInterval); 
		}
	},10);
}


function scrollUp(length){
	var time=length;
	var scrollUpInterval=setInterval(function(){
		if(time>0){
			console.log(img.style.top.replace("px",""));
			img.style.top=-time+"px";
			time-=step;
		}else{
			clearInterval(scrollUpInterval); 
		}
	},10);
}