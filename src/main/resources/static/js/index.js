window.localStorage.clear();
webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        console.log("Calibration First!Please click on your screen where your sight focus on!")
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
    if(data!=null){
    	console.log(data);
        console.log(elapsedTime); //elapsed time is based on time since begin was called
    }
}).begin();

