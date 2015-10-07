// // cat1 == ominous cat that just walks around
// var oldcat1Location = null;
// var cat1Speed = 750;

// function cat1Timeout(){
// 	timeOuts['cat1Timeout'] = setTimeout('cat1Move(750);',cat1Speed);
// }

// function cat1Move(time){
// 	var moved = false;
// 	while(!moved){
// 		var randomNum = Math.floor((Math.random()*4)+1);

// 		if(randomNum == 1){
// 			moved = moveCat1Left();
// 		}
// 		else if(randomNum == 2){
// 			moved = moveCat1Right();
// 		}
// 		else if(randomNum == 3){
// 			moved = moveCat1Up();
// 		}
// 		else if(randomNum == 4){
// 			moved = moveCat1Down();
// 		}
// 		else
// 			moved = true;
// 	}
// 	checkForCatch();
// 	cat1Timeout();
// }



// function moveCat1Left(){
// 	var lookAheadTemp = "#" + (cat1LocationX-1)+'-'+cat1LocationY;
// 	$lookAheadTemp = $(lookAheadTemp);

// 	if(oldcat1Location == lookAheadTemp){		//move more likely to new spot
// 		var randomNum2 = Math.floor((Math.random()*4)+1);
// 		if (randomNum2 != 1)
// 			return false;
// 	}

// 	if ($lookAheadTemp.hasClass('mouse') || (cat1LocationX-1 != -1 && !($lookAheadTemp.hasClass("wall") || $lookAheadTemp.hasClass("cheese")  || $lookAheadTemp.hasClass("portalBlue") || $lookAheadTemp.hasClass("portalRed") || $lookAheadTemp.hasClass("key1") || $lookAheadTemp.hasClass("lock1")))){ 
// 		oldcat1Location = "#" + cat1Location;
// 		var $oldcat1Location = $(oldcat1Location);

// 		//$oldcat1Location.addClass('cat1MoveLeft');
// 		// setTimeout(function(){
// 		//		$oldcat1Location.removeClass('cat1MoveLeft');
// 				$oldcat1Location.removeClass("cat1");
// 				$oldcat1Location.css("background-image", "none");
// 				$lookAheadTemp.addClass("cat1");
// 				$lookAheadTemp.css("background-image", "url(images/catOminous.png)");
// 			// }, cat1Speed);
	
// 		cat1LocationX--;
// 		cat1Location = cat1LocationX+'-'+cat1LocationY;
// 		return true;
// 	}
// 	return false;
// }

// function moveCat1Right(){
// 	var lookAheadTemp = "#" + (cat1LocationX+1)+'-'+cat1LocationY;
// 	$lookAheadTemp = $(lookAheadTemp);

// 	if(oldcat1Location == lookAheadTemp){
// 		var randomNum2 = Math.floor((Math.random()*4)+1);
// 		if (randomNum2 != 1)
// 			return false;
// 	}

// 	if ($lookAheadTemp.hasClass('mouse') || (cat1LocationX+1 != mapSizeX && !($lookAheadTemp.hasClass("wall") || $lookAheadTemp.hasClass("cheese")  || $lookAheadTemp.hasClass("portalBlue") || $lookAheadTemp.hasClass("portalRed") || $lookAheadTemp.hasClass("key1") || $lookAheadTemp.hasClass("lock1")))){ 
// 		oldcat1Location = "#" + cat1Location;
// 		var getImg = oldcat1Location + " img";
// 		var $oldcat1Location = $(oldcat1Location);
// 		var position = $(oldcat1Location).position();
// 		//console.log("old " +oldcat1Location + ", lookAheadTemp " + lookAheadTemp); // + ", pos " + position.left;

// 		$oldcat1Location.css("background-image", "none");
// 		$oldcat1Location.removeClass("cat1");
// 		// $oldcat1Location.append('<img src="images/catOminous.png" class="size" style="position:absolute;z-index:3;">');
		
// 		// $(getImg).animate({'left': 60},cat1Speed,'linear', function(){
// 		// 	$(this).remove();
// 		// 	$oldcat1Location.empty();
// 			cat1LocationX++;
// 			cat1Location = cat1LocationX+'-'+cat1LocationY;
// 			$lookAheadTemp.addClass("cat1");
// 			$lookAheadTemp.css("background-image", "url(images/catOminous.png)");
// 		//});
				
// 		return true;
// 	}
// 	return false;
// }

// function moveCat1Up(){
// 	var lookAheadTemp = "#" + cat1LocationX+'-'+(cat1LocationY-1);
// 	$lookAheadTemp = $(lookAheadTemp);

// 	if(oldcat1Location == lookAheadTemp){
// 		var randomNum2 = Math.floor((Math.random()*4)+1);
// 		if (randomNum2 != 1)
// 			return false;
// 	}

// 	if ($lookAheadTemp.hasClass('mouse') || (cat1LocationY-1 != -1 && !($lookAheadTemp.hasClass("wall") || $lookAheadTemp.hasClass("cheese")  || $lookAheadTemp.hasClass("portalBlue") || $lookAheadTemp.hasClass("portalRed") || $lookAheadTemp.hasClass("key1") || $lookAheadTemp.hasClass("lock1")))){ 
// 		oldcat1Location = "#" + cat1Location;
// 		var $oldcat1Location = $(oldcat1Location);
// 		$oldcat1Location.removeClass("cat1");
// 		$oldcat1Location.css("background-image", "none");
// 		cat1LocationY--;
// 		cat1Location = cat1LocationX+'-'+cat1LocationY;
// 		$lookAheadTemp.addClass("cat1");
// 		$lookAheadTemp.css("background-image", "url(images/catOminous.png)");
// 		return true;
// 	}
// 	return false;
// }

// function moveCat1Down(){
// 	var lookAheadTemp = "#" + cat1LocationX+'-'+(cat1LocationY+1);
// 	$lookAheadTemp = $(lookAheadTemp);

// 	if(oldcat1Location == lookAheadTemp){
// 		var randomNum2 = Math.floor((Math.random()*4)+1);
// 		if (randomNum2 != 1)
// 			return false;
// 	}

// 	if ($lookAheadTemp.hasClass('mouse') || (cat1LocationY+1 != mapSizeY && !($lookAheadTemp.hasClass("wall") || $lookAheadTemp.hasClass("cheese")  || $lookAheadTemp.hasClass("portalBlue") || $lookAheadTemp.hasClass("portalRed") || $lookAheadTemp.hasClass("key1") || $lookAheadTemp.hasClass("lock1")))){ 
// 		oldcat1Location = "#" + cat1Location;
// 		var $oldcat1Location = $(oldcat1Location);
// 		$oldcat1Location.removeClass("cat1");
// 		$oldcat1Location.css("background-image", "none");
// 		cat1LocationY++;
// 		cat1Location = cat1LocationX+'-'+cat1LocationY;
// 		$lookAheadTemp.addClass("cat1");
// 		$lookAheadTemp.css("background-image", "url(images/catOminous.png)");
// 		return true;
// 	}
// 	return false;
// }





// function checkForCatch(){
// 	var divTemp = "#" + mouseLocationX+'-'+mouseLocationY;
// 	var $divTemp = $(divTemp);
// 	if ($divTemp.hasClass('cat1') && gameReady){
// 		alert("Eaten!");
// 		visibleOn();
// 		gameReady = false;
// 		$divTemp.addClass('tombstone');
// 	}

// }































/////////////////////////////////////////////////////////////////////////////

// scary cat that chases you

var oldcat2Location = null;
var cat2Speed = 600;

function cat2Timeout(){
	timeOuts['cat2Timeout'] = setTimeout('cat2Move(600);',cat2Speed);
}

function cat2Move(time){
	var moved = false;
	cat2Speed = 600;
	while(!moved){
		var randomNum = Math.floor((Math.random()*4)+1);
		if (gameReady){
			randomNum = lookForMouse(randomNum);
		}

		if(randomNum == 1){
			moved = moveCat2Left();
		}
		else if(randomNum == 2){
			moved = moveCat2Right();
		}
		else if(randomNum == 3){
			moved = moveCat2Up();
		}
		else if(randomNum == 4){
			moved = moveCat2Down();
		}
		else
			moved = true;
	}
	checkForCatch2();
	cat2Timeout();
}



function moveCat2Left(){
	var lookAheadTemp = "#" + (cat2LocationX-1)+'-'+cat2LocationY;
	$lookAheadTemp = $(lookAheadTemp);

	if(oldcat2Location == lookAheadTemp){		//move more likely to new spot
		var randomNum2 = Math.floor((Math.random()*4)+1);
		if (randomNum2 != 1)
			return false;
	}

	if ($lookAheadTemp.hasClass('mouse') || (cat2LocationX-1 != -1 && !($lookAheadTemp.hasClass("wall") || $lookAheadTemp.hasClass("cheese")  || $lookAheadTemp.hasClass("portalBlue") || $lookAheadTemp.hasClass("portalRed") || $lookAheadTemp.hasClass("key2") || $lookAheadTemp.hasClass("lock2") || $lookAheadTemp.hasClass("unlocked2") || $lookAheadTemp.hasClass("cat2") || $lookAheadTemp.hasClass("cat2Eyes") || $lookAheadTemp.hasClass("tombstone")))){ 
		oldcat2Location = "#" + cat2Location;
		var $oldcat2Location = $(oldcat2Location);
		$oldcat2Location.removeClass("cat2");
		$oldcat2Location.css("background-image", "none");
		$lookAheadTemp.addClass("cat2");
		$lookAheadTemp.css("background-image", "url(images/catOminous.png)");
		cat2LocationX--;
		cat2Location = cat2LocationX+'-'+cat2LocationY;
		return true;
	}
	return false;
}

function moveCat2Right(){
	var lookAheadTemp = "#" + (cat2LocationX+1)+'-'+cat2LocationY;
	$lookAheadTemp = $(lookAheadTemp);

	if(oldcat2Location == lookAheadTemp){
		var randomNum2 = Math.floor((Math.random()*4)+1);
		if (randomNum2 != 1)
			return false;
	}

	if ($lookAheadTemp.hasClass('mouse') || (cat2LocationX+1 != mapSizeX && !($lookAheadTemp.hasClass("wall") || $lookAheadTemp.hasClass("cheese")  || $lookAheadTemp.hasClass("portalBlue") || $lookAheadTemp.hasClass("portalRed") || $lookAheadTemp.hasClass("key2") || $lookAheadTemp.hasClass("lock2") || $lookAheadTemp.hasClass("unlocked2") || $lookAheadTemp.hasClass("cat2") || $lookAheadTemp.hasClass("cat2Eyes") || $lookAheadTemp.hasClass("tombstone")))){ 
		oldcat2Location = "#" + cat2Location;
		var getImg = oldcat2Location + " img";
		var $oldcat2Location = $(oldcat2Location);
		var position = $(oldcat2Location).position();
		$oldcat2Location.css("background-image", "none");
		$oldcat2Location.removeClass("cat2");
		cat2LocationX++;
		cat2Location = cat2LocationX+'-'+cat2LocationY;
		$lookAheadTemp.addClass("cat2");
		$lookAheadTemp.css("background-image", "url(images/catOminous.png)");	
		return true;
	}
	return false;
}

function moveCat2Up(){
	var lookAheadTemp = "#" + cat2LocationX+'-'+(cat2LocationY-1);
	$lookAheadTemp = $(lookAheadTemp);

	if(oldcat2Location == lookAheadTemp){
		var randomNum2 = Math.floor((Math.random()*4)+1);
		if (randomNum2 != 1)
			return false;
	}

	if ($lookAheadTemp.hasClass('mouse') || (cat2LocationY-1 != -1 && !($lookAheadTemp.hasClass("wall") || $lookAheadTemp.hasClass("cheese")  || $lookAheadTemp.hasClass("portalBlue") || $lookAheadTemp.hasClass("portalRed") || $lookAheadTemp.hasClass("key2") || $lookAheadTemp.hasClass("lock2") || $lookAheadTemp.hasClass("unlocked2") || $lookAheadTemp.hasClass("cat2") || $lookAheadTemp.hasClass("cat2Eyes") || $lookAheadTemp.hasClass("tombstone")))){ 
		oldcat2Location = "#" + cat2Location;
		var $oldcat2Location = $(oldcat2Location);
		$oldcat2Location.removeClass("cat2");
		$oldcat2Location.css("background-image", "none");
		cat2LocationY--;
		cat2Location = cat2LocationX+'-'+cat2LocationY;
		$lookAheadTemp.addClass("cat2");
		$lookAheadTemp.css("background-image", "url(images/catOminous.png)");
		return true;
	}
	return false;
}

function moveCat2Down(){
	var lookAheadTemp = "#" + cat2LocationX+'-'+(cat2LocationY+1);
	$lookAheadTemp = $(lookAheadTemp);

	if(oldcat2Location == lookAheadTemp){
		var randomNum2 = Math.floor((Math.random()*4)+1);
		if (randomNum2 != 1)
			return false;
	}

	if ($lookAheadTemp.hasClass('mouse') || (cat2LocationY+1 != mapSizeY && !($lookAheadTemp.hasClass("wall") || $lookAheadTemp.hasClass("cheese")  || $lookAheadTemp.hasClass("portalBlue") || $lookAheadTemp.hasClass("portalRed") || $lookAheadTemp.hasClass("key2") || $lookAheadTemp.hasClass("lock2") || $lookAheadTemp.hasClass("unlocked2") || $lookAheadTemp.hasClass("cat2") || $lookAheadTemp.hasClass("cat2Eyes") || $lookAheadTemp.hasClass("tombstone")))){ 
		oldcat2Location = "#" + cat2Location;
		var $oldcat2Location = $(oldcat2Location);
		$oldcat2Location.removeClass("cat2");
		$oldcat2Location.css("background-image", "none");
		cat2LocationY++;
		cat2Location = cat2LocationX+'-'+cat2LocationY;
		$lookAheadTemp.addClass("cat2");
		$lookAheadTemp.css("background-image", "url(images/catOminous.png)");
		return true;
	}
	return false;
}





function checkForCatch2(){
	var divTemp = "#" + mouseLocationX+'-'+mouseLocationY;
	var $divTemp = $(divTemp);
	if ($divTemp.hasClass('cat2') && gameReady){
		alert("Eaten!");
		visibleOn();
		gameReady = false;
		$divTemp.addClass('tombstone');
	}
}



function lookForMouse(randomNum){
	cat2Speed = 300;

	//left
	var keepLooking = true;
	var xTemp = cat2LocationX;
	while(keepLooking){
		xTemp--;
		var lookAheadTemp = "#" + xTemp+'-'+cat2LocationY;
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse"))
			return 1;
		if($lookAheadTemp.hasClass("wall") || xTemp == -1)
			keepLooking = false;
	}

	//right
	keepLooking = true;
	xTemp = cat2LocationX;
	while(keepLooking){
		xTemp++;
		var lookAheadTemp = "#" + xTemp+'-'+cat2LocationY;
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse"))
			return 2;
		if($lookAheadTemp.hasClass("wall") || xTemp == mapSizeX)
			keepLooking = false;
	}

	//up
	keepLooking = true;
	var yTemp = cat2LocationY;
	while(keepLooking){
		yTemp--;
		var lookAheadTemp = "#" + cat2LocationX+'-'+yTemp;
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse"))
			return 3;
		if($lookAheadTemp.hasClass("wall") || yTemp == -1)
			keepLooking = false;
	}

	//right
	keepLooking = true;
	yTemp = cat2LocationY;
	while(keepLooking){
		yTemp++;
		var lookAheadTemp = "#" + cat2LocationX+'-'+yTemp;
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse"))
			return 4;
		if($lookAheadTemp.hasClass("wall") || yTemp == mapSizeY)
			keepLooking = false;
	}

	//didnt find mouse
	cat2Speed = 600;
	return randomNum;
}