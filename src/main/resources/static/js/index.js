window.saveDataAcrossSessions(false);
webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        console.log("训练中。。。")
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
    if(data!=null){
    	console.log(data);
        console.log(elapsedTime); //elapsed time is based on time since begin was called
    }
}).begin();

