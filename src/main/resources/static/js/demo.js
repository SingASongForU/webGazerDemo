$("#pay").hide();
const img=document.querySelector("#main");
const border_length=4085;
const length=200;
const step=2;
const timeout=5;
let time=0;

/**
 * 初始化视线校准button点击事件
 */
function initTrainButtons(){
	for(let i=0;i<9;i++){
		initTrainButton("position_eye"+i);
	}
}

function initTrainButton(id){
	let time_train=1;
	$("#"+id).click(function () {
		time_train++;
		if(time_train==4){
			alert("校准完毕！");
			$("#"+id).hide();
			checkReady++;
		}else{
			$("#"+id).text("请进行"+time_train+"次校准!");
		}
	});
}

/**
 * 监听键盘按键，模拟对应操作
 * @param event
 */
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

/**
 * 模拟拇指向上滑动，展示页面下一页内容
 * @param length
 */
function scrollDown(length){
	picture_position_index++;
	resetModelDisplay("down");
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

function getModelNameByIndex(index,part) {
	let indexModel=pictureData[index];
	if(indexModel==null){
		indexModel= pictureData["13"];
	}
	return randomModel(indexModel[part]);
}

function randomModel(line) {
	let array=line.split("|");
	if(array.length==1){
		return array[0];
	}
	return array[Math.round(Math.random()*(array.length-1))];
}

function resetModelDisplay(direction){
	$("#app_desc").html("&nbsp;&nbsp;&nbsp;&nbsp;关注模块："
		+getModelNameByIndex(picture_position_index,direction));
}

/**
 * 模拟拇指向下滑动，展示上一页内容
 * @param length
 */
function scrollUp(length){
	if(picture_position_index>0){
		picture_position_index--;
		resetModelDisplay("up");
	}
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