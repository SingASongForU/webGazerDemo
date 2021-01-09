$("#pay").hide();
const img=document.querySelector("#main");
const border_length=4085;
const length=200;
const step=2;
const timeout=5;
let time=0;

document.onkeydown=function(event){
	let e = event || window.event || arguments.callee.caller.arguments[0];

	if(e && e.keyCode==73){ //i
		$("#main").hide();
		$("#pay").show();
	}
	if(e && e.keyCode==37){ //左
		scrollDown(length);
	}
	if(e && e.keyCode==39){ //右
		scrollUp(length);
	}
	if(e && e.keyCode==79){ // o
		$("#main").show();
		$("#pay").hide();
	}

};

function scrollDown(length){
	let border=time+length;
	let scrollDownInterval=setInterval(function(){
		if(time<border&&time>-1&&time<border_length){
			console.log(img.style.top.replace("px",""));
			img.style.top=-time+"px";
			time+=step;
		}else{
			clearInterval(scrollDownInterval);
		}
	},timeout);
}


function scrollUp(length){
	let border=time-length;
	let scrollUpInterval=setInterval(function(){
		if(time>border&&time>0){
			console.log(img.style.top.replace("px",""));
			img.style.top=-time+"px";
			time-=step;
		}else{
			clearInterval(scrollUpInterval); 
		}
	},timeout);
}