// cat1 == ominous cat that just walks around

var oldcat1Location = new Array;
var cat1Speed = 750;

function cat1Timeout(){
	timeOuts['cat1Timeout'] = setTimeout('cat1Move(750);',cat1Speed);
}

function cat1Move(time){
	for (var i = 0; i < cat1Location.length; i++) {
		var moved = false;
		while(!moved){
			var randomNum = Math.floor((Math.random()*4)+1);

			if(randomNum == 1){
				moved = moveCat1Left(i);
			}
			else if(randomNum == 2){
				moved = moveCat1Right(i);
			}
			else if(randomNum == 3){
				moved = moveCat1Up(i);
			}
			else if(randomNum == 4){
				moved = moveCat1Down(i);
			}
			else
				moved = true;
		}
		checkForCatch();
	}
	cat1Timeout();
}



function moveCat1Left(i){
	oldcat1Location[i] = "#" + cat1Location[i];
	var $oldcat1Location = $(oldcat1Location[i]);
	var lookAheadTemp = "#" + (cat1LocationX[i]-1)+'-'+cat1LocationY[i];
	var $lookAheadTemp = $(lookAheadTemp);

	if((cat1LocationX[i]-1) == -1 || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;

	if(oldcat1Location[i] == lookAheadTemp){		//move more likely to new spot
		var randomNum2 = Math.floor((Math.random()*10)+1);
		if (randomNum2 != 1)
			return false;
	}

	removeCat1($oldcat1Location);
	updateLineOfSight();
	addCat1($lookAheadTemp);

	cat1LocationX[i]--;
	cat1Location[i] = cat1LocationX[i]+'-'+cat1LocationY[i];
	checkSpotToFixPicAsCat($oldcat1Location);
	return true;
}

function moveCat1Right(i){
	oldcat1Location[i] = "#" + cat1Location[i];
	var $oldcat1Location = $(oldcat1Location[i]);
	var lookAheadTemp = "#" + (cat1LocationX[i]+1)+'-'+cat1LocationY[i];
	var $lookAheadTemp = $(lookAheadTemp);

	if((cat1LocationX[i]+1) == mazeSizeX || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;

	if(oldcat1Location[i] == lookAheadTemp){
		var randomNum2 = Math.floor((Math.random()*10)+1);
		if (randomNum2 != 1)
			return false;
	}
	
	removeCat1($oldcat1Location);
	updateLineOfSight();
	addCat1($lookAheadTemp);
	
	cat1LocationX[i]++;
	cat1Location[i] = cat1LocationX[i]+'-'+cat1LocationY[i];
	checkSpotToFixPicAsCat($oldcat1Location);
	return true;
}

function moveCat1Up(i){
	oldcat1Location[i] = "#" + cat1Location[i];
	var $oldcat1Location = $(oldcat1Location[i]);
	var lookAheadTemp = "#" + cat1LocationX[i]+'-'+(cat1LocationY[i]-1);
	var $lookAheadTemp = $(lookAheadTemp);

	if((cat1LocationY[i]-1) == -1 || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;

	if(oldcat1Location[i] == lookAheadTemp){
		var randomNum2 = Math.floor((Math.random()*10)+1);
		if (randomNum2 != 1)
			return false;
	}
	
	removeCat1($oldcat1Location);
	updateLineOfSight();
	addCat1($lookAheadTemp);
	
	cat1LocationY[i]--;
	cat1Location[i] = cat1LocationX[i]+'-'+cat1LocationY[i];
	checkSpotToFixPicAsCat($oldcat1Location);
	return true;
}

function moveCat1Down(i){
	oldcat1Location[i] = "#" + cat1Location[i];
	var $oldcat1Location = $(oldcat1Location[i]);
	var lookAheadTemp = "#" + cat1LocationX[i]+'-'+(cat1LocationY[i]+1);
	var $lookAheadTemp = $(lookAheadTemp);

	if((cat1LocationY[i]+1) == mazeSizeY || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;

	if(oldcat1Location[i] == lookAheadTemp){
		var randomNum2 = Math.floor((Math.random()*10)+1);
		if (randomNum2 != 1)
			return false;
	}
	
	removeCat1($oldcat1Location);
	updateLineOfSight();
	addCat1($lookAheadTemp);
	
	cat1LocationY[i]++;
	cat1Location[i] = cat1LocationX[i]+'-'+cat1LocationY[i];
	checkSpotToFixPicAsCat($oldcat1Location);
	return true;
}

//////////////////////////////////////////////////

function removeCat1($oldcat1Location){
	$oldcat1Location.removeClass("cat");
	$oldcat1Location.removeClass("cat1");
	$oldcat1Location.removeClass("cat1Eyes");
	$oldcat1Location.css("background-image", "none");
	$oldcat1Location.addClass("dark");
}
function addCat1($lookAheadTemp){
	$lookAheadTemp.addClass("cat");
	if($lookAheadTemp.hasClass("dark")){
		$lookAheadTemp.removeClass("dark");
		$lookAheadTemp.addClass("cat1Eyes");
	}
	else{
		$lookAheadTemp.addClass("cat1");
	}
}




















/////////////////////////////////////////////////////////////////////////////

// scary cat that chases you

var canSee2 = new Array;
var oldcat2Location = new Array;
var cat2Speed = 600;
var wait2 = false;		//for when the cat wants to chase the mouse, but is caught

function cat2Timeout(){
	timeOuts['cat2Timeout'] = setTimeout('cat2Move(600);',cat2Speed);
}

function cat2Move(time){
	wait2 = false;
	cat2Speed = 600;
	for (var i = 0; i < cat2Location.length; i++) {
		var moved = false;
	
		while(!moved){
			var randomNum = Math.floor((Math.random()*4)+1);
			if (gameReady){
				randomNum = lookForMouse(randomNum, i);
			}

			if(randomNum == 1){
				moved = moveCat2Left(i);
			}
			else if(randomNum == 2){
				moved = moveCat2Right(i);
			}
			else if(randomNum == 3){
				moved = moveCat2Up(i);
			}
			else if(randomNum == 4){
				moved = moveCat2Down(i);
			}
			else
				moved = true;
			if(wait2)
				moved = true;
		}
		checkForCatch();
	}
	cat2Timeout();
}



function moveCat2Left(i){
	oldcat2Location[i] = "#" + cat2Location[i];
	var $oldcat2Location = $(oldcat2Location[i]);
	var lookAheadTemp = "#" + (cat2LocationX[i]-1)+'-'+cat2LocationY[i];
	var $lookAheadTemp = $(lookAheadTemp);

	if($lookAheadTemp.hasClass("locked1"))
		wait2 = true;
	if((cat2LocationX[i]-1 == -1) || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;
	if(oldcat2Location[i] == lookAheadTemp){		//move more likely to new spot
		var randomNum2 = Math.floor((Math.random()*4)+1);
		if (randomNum2 != 1)
			return false;
	}

	removeCat2($oldcat2Location);
	updateLineOfSight();
	addCat2($lookAheadTemp);

	cat2LocationX[i]--;
	cat2Location[i] = cat2LocationX[i]+'-'+cat2LocationY[i];
	checkSpotToFixPicAsCat($oldcat2Location);
	return true;
}

function moveCat2Right(i){
	oldcat2Location[i] = "#" + cat2Location[i];
	var $oldcat2Location = $(oldcat2Location[i]);
	var lookAheadTemp = "#" + (cat2LocationX[i]+1)+'-'+cat2LocationY[i];
	var $lookAheadTemp = $(lookAheadTemp);

	if($lookAheadTemp.hasClass("locked1"))
		wait2 = true;
	if((cat2LocationX[i]+1 == mazeSizeX) || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;
	if(oldcat2Location[i] == lookAheadTemp){		//move more likely to new spot
		var randomNum2 = Math.floor((Math.random()*4)+1);
		if (randomNum2 != 1)
			return false;
	}

	removeCat2($oldcat2Location);
	updateLineOfSight();
	addCat2($lookAheadTemp);
	
	cat2LocationX[i]++;
	cat2Location[i] = cat2LocationX[i]+'-'+cat2LocationY[i];
	checkSpotToFixPicAsCat($oldcat2Location);
	return true;
}

function moveCat2Up(i){
	oldcat2Location[i] = "#" + cat2Location[i];
	var $oldcat2Location = $(oldcat2Location[i]);
	var lookAheadTemp = "#" + cat2LocationX[i]+'-'+(cat2LocationY[i]-1);
	var $lookAheadTemp = $(lookAheadTemp);

	if($lookAheadTemp.hasClass("locked1"))
		wait2 = true;
	if((cat2LocationY[i]-1 == -1) || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;
	if(oldcat2Location[i] == lookAheadTemp){		//move more likely to new spot
		var randomNum2 = Math.floor((Math.random()*4)+1);
		if (randomNum2 != 1)
			return false;
	}

	removeCat2($oldcat2Location);
	updateLineOfSight();
	addCat2($lookAheadTemp);
	
	cat2LocationY[i]--;
	cat2Location[i] = cat2LocationX[i]+'-'+cat2LocationY[i];
	checkSpotToFixPicAsCat($oldcat2Location);
	return true;
}

function moveCat2Down(i){
	oldcat2Location[i] = "#" + cat2Location[i];
	var $oldcat2Location = $(oldcat2Location[i]);
	var lookAheadTemp = "#" + cat2LocationX[i]+'-'+(cat2LocationY[i]+1);
	var $lookAheadTemp = $(lookAheadTemp);

	if($lookAheadTemp.hasClass("locked1"))
		wait2 = true;
	if((cat2LocationY[i]+1 == mazeSizeY) || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;
	if(oldcat2Location[i] == lookAheadTemp){		//move more likely to new spot
		var randomNum2 = Math.floor((Math.random()*4)+1);
		if (randomNum2 != 1)
			return false;
	}

	removeCat2($oldcat2Location);
	updateLineOfSight();
	addCat2($lookAheadTemp);
	
	cat2LocationY[i]++;
	cat2Location[i] = cat2LocationX[i]+'-'+cat2LocationY[i];
	checkSpotToFixPicAsCat($oldcat2Location);
	return true;
}



function lookForMouse(randomNum, i){
	if(canSee2.length == 0)
		cat2Speed = 600;
	else 
		cat2Speed = 300;

	//left
	var keepLooking = true;
	var xTemp = cat2LocationX[i];
	while(keepLooking){
		xTemp--;
		var lookAheadTemp = "#" + xTemp+'-'+cat2LocationY[i];
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse") && !$lookAheadTemp.hasClass("inaccessibleByCat")){
			canSee2.push(i);
			return 1;
		}
		if(xTemp == -1 || $lookAheadTemp.hasClass("inaccessibleByCat"))
			keepLooking = false;
	}

	//right
	keepLooking = true;
	xTemp = cat2LocationX[i];
	while(keepLooking){
		xTemp++;
		var lookAheadTemp = "#" + xTemp+'-'+cat2LocationY[i];
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse") && !$lookAheadTemp.hasClass("inaccessibleByCat")){
			canSee2.push(i);
			return 2;
		}
		if(xTemp == mazeSizeX || $lookAheadTemp.hasClass("inaccessibleByCat"))
			keepLooking = false;
	}

	//up
	keepLooking = true;
	var yTemp = cat2LocationY[i];
	while(keepLooking){
		yTemp--;
		var lookAheadTemp = "#" + cat2LocationX[i]+'-'+yTemp;
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse") && !$lookAheadTemp.hasClass("inaccessibleByCat")){
			canSee2.push(i);
			return 3;
		}
		if(yTemp == -1 || $lookAheadTemp.hasClass("inaccessibleByCat"))
			keepLooking = false;
	}

	//right
	keepLooking = true;
	yTemp = cat2LocationY[i];
	while(keepLooking){
		yTemp++;
		var lookAheadTemp = "#" + cat2LocationX[i]+'-'+yTemp;
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse") && !$lookAheadTemp.hasClass("inaccessibleByCat")){
			canSee2.push(i);
			return 4;
		}
		if(yTemp == mazeSizeY || $lookAheadTemp.hasClass("inaccessibleByCat"))
			keepLooking = false;
	}

	for (var j = 0; j < canSee2.length; j++){
		if(canSee2[j] == i)
			canSee2.splice(j,1);
	}
	//didnt find mouse
	return randomNum;
}

//////////////////////////////////////////////////


function removeCat2($oldcat2Location){
	$oldcat2Location.removeClass("cat");
	$oldcat2Location.removeClass("cat2");
	$oldcat2Location.removeClass("cat2Eyes");
	$oldcat2Location.css("background-image", "none");
	$oldcat2Location.addClass("dark");
}
function addCat2($lookAheadTemp){
	$lookAheadTemp.addClass("cat");
	if($lookAheadTemp.hasClass("dark")){
		$lookAheadTemp.removeClass("dark");
		$lookAheadTemp.addClass("cat2Eyes");
	}
	else{
		$lookAheadTemp.addClass("cat2");
	}
}
























/////////////////////////////////////////////////////////////////////////////

// Seeker cat that constantly tries to find you

var canSee3 = new Array;
var oldcat3Location = new Array;
var cat3Speed = 500;
var wait3 = false;		//for when the cat wants to chase the mouse, but is caught]
var lastResort3;

function cat3Timeout(){
	timeOuts['cat3Timeout'] = setTimeout('cat3Move(500);',cat3Speed);
}

function cat3Move(time){
	wait3 = false;
	cat3Speed = 500;
	var directionToGo = 0;
	for (var i = 0; i < cat3Location.length; i++) {
		var moved = false;
		while(!moved){
			directionToGo = 0;
			var oneChoice = onlySpotAvailable(i);
			lastResort3 = 0;
			if(gameReady)			//So the cat wont chase the mouse after it gets eaten
				directionToGo = lookForMouse3(i);		//*first look in line of sight for mouse
			if(directionToGo == 0 && gameReady)					//*Second, go in the direction of the mouse if the mouse isnt in it's line of sight
				moved = seekMouse(moved, oneChoice, i);

			if(!moved && directionToGo == 0){			//*third, if all else fails, go randomly
				directionToGo = Math.floor((Math.random()*4)+1);
			}

			if(!moved && directionToGo == 1){
				moved = moveCat3Left(i);
			}
			else if(!moved && directionToGo == 2){
				moved = moveCat3Right(i);
			}
			else if(!moved && directionToGo == 3){
				moved = moveCat3Up(i);
			}
			else if(!moved && directionToGo == 4){
				moved = moveCat3Down(i);
			}
			else 
				moved = true;
			if(wait3)
				moved = true;
		}
		checkForCatch();
	}
	cat3Timeout();
}


function moveCat3Left(i){
	oldcat3Location[i] = "#" + cat3Location[i];
	var $oldcat3Location = $(oldcat3Location[i]);
	var lookAheadTemp = "#" + (cat3LocationX[i]-1)+'-'+cat3LocationY[i];
	var $lookAheadTemp = $(lookAheadTemp);

	if($lookAheadTemp.hasClass("locked1"))
		wait3 = true;
	if((cat3LocationX[i]-1 == -1) || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;
	if(oldcat3Location[i] == lookAheadTemp){		//move more likely to new spot
		var randomNum3 = Math.floor((Math.random()*4)+1);
		if (randomNum3 != 1)
			return false;
	}

	removeCat3($oldcat3Location);
	updateLineOfSight();
	addCat3($lookAheadTemp);
	
	cat3LocationX[i]--;
	cat3Location[i] = cat3LocationX[i]+'-'+cat3LocationY[i];
	checkSpotToFixPicAsCat($oldcat3Location);
	return true;
}

function moveCat3Right(i){
	oldcat3Location[i] = "#" + cat3Location[i];
	var $oldcat3Location = $(oldcat3Location[i]);
	var lookAheadTemp = "#" + (cat3LocationX[i]+1)+'-'+cat3LocationY[i];
	var $lookAheadTemp = $(lookAheadTemp);

	if($lookAheadTemp.hasClass("locked1"))
		wait3 = true;
	if((cat3LocationX[i]+1 == mazeSizeX) || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;
	if(oldcat3Location[i] == lookAheadTemp){		//move more likely to new spot
		var randomNum3 = Math.floor((Math.random()*4)+1);
		if (randomNum3 != 1)
			return false;
	}

	removeCat3($oldcat3Location);
	updateLineOfSight();
	addCat3($lookAheadTemp);
	
	cat3LocationX[i]++;
	cat3Location[i] = cat3LocationX[i]+'-'+cat3LocationY[i];
	checkSpotToFixPicAsCat($oldcat3Location);
	return true;
}

function moveCat3Up(i){
	oldcat3Location[i] = "#" + cat3Location[i];
	var $oldcat3Location = $(oldcat3Location[i]);
	var lookAheadTemp = "#" + cat3LocationX[i]+'-'+(cat3LocationY[i]-1);
	var $lookAheadTemp = $(lookAheadTemp);

	if($lookAheadTemp.hasClass("locked1"))
		wait3 = true;
	if((cat3LocationY[i]-1 == -1) || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;
	if(oldcat3Location[i] == lookAheadTemp){		//move more likely to new spot
		var randomNum3 = Math.floor((Math.random()*4)+1);
		if (randomNum3 != 1)
			return false;
	}

	removeCat3($oldcat3Location);
	updateLineOfSight();
	addCat3($lookAheadTemp);
	
	cat3LocationY[i]--;
	cat3Location[i] = cat3LocationX[i]+'-'+cat3LocationY[i];
	checkSpotToFixPicAsCat($oldcat3Location);
	return true;
}

function moveCat3Down(i){
	oldcat3Location[i] = "#" + cat3Location[i];
	var $oldcat3Location = $(oldcat3Location[i]);
	var lookAheadTemp = "#" + cat3LocationX[i]+'-'+(cat3LocationY[i]+1);
	var $lookAheadTemp = $(lookAheadTemp);

	if($lookAheadTemp.hasClass("locked1"))
		wait3 = true;
	if((cat3LocationY[i]+1 == mazeSizeY) || $lookAheadTemp.hasClass("inaccessibleByCat"))
		return false;
	if(oldcat3Location[i] == lookAheadTemp){		//move more likely to new spot
		var randomNum3 = Math.floor((Math.random()*4)+1);
		if (randomNum3 != 1)
			return false;
	}

	removeCat3($oldcat3Location);
	updateLineOfSight();
	addCat3($lookAheadTemp);
	
	cat3LocationY[i]++;
	cat3Location[i] = cat3LocationX[i]+'-'+cat3LocationY[i];
	checkSpotToFixPicAsCat($oldcat3Location);
	return true;
}





function onlySpotAvailable(i){
	var count = 0;
	var lookAheadTemp = "#" + (cat3LocationX[i]-1)+'-'+cat3LocationY[i];
	$lookAheadTemp = $(lookAheadTemp);
	if(!$lookAheadTemp.hasClass('inaccessibleByCat'))
		count++;

	var lookAheadTemp = "#" + (cat3LocationX[i]-1)+'-'+cat3LocationY[i];
	$lookAheadTemp = $(lookAheadTemp);
	if(!$lookAheadTemp.hasClass('inaccessibleByCat'))
		count++;

	var lookAheadTemp = "#" + (cat3LocationX[i]-1)+'-'+cat3LocationY[i];
	$lookAheadTemp = $(lookAheadTemp);
	if(!$lookAheadTemp.hasClass('inaccessibleByCat'))
		count++;

	var lookAheadTemp = "#" + (cat3LocationX[i]-1)+'-'+cat3LocationY[i];
	$lookAheadTemp = $(lookAheadTemp);
	if(!$lookAheadTemp.hasClass('inaccessibleByCat'))
		count++;

	if(count < 2)
		return true;
	return false;
}


function lookForMouse3(i){
	if(canSee3.length == 0)
		cat3Speed = 500;
	else 
		cat3Speed = 300;

	//left
	var keepLooking = true;
	var xTemp = cat3LocationX[i];
	while(keepLooking){
		xTemp--;
		var lookAheadTemp = "#" + xTemp+'-'+cat3LocationY[i];
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse") && !$lookAheadTemp.hasClass("inaccessibleByCat")){
			canSee3.push(i);
			return 1;
		}
		if(xTemp == -1 || $lookAheadTemp.hasClass("inaccessibleByCat"))
			keepLooking = false;
	}

	//right
	keepLooking = true;
	xTemp = cat3LocationX[i];
	while(keepLooking){
		xTemp++;
		var lookAheadTemp = "#" + xTemp+'-'+cat3LocationY[i];
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse") && !$lookAheadTemp.hasClass("inaccessibleByCat")){
			canSee3.push(i);
			return 2;
		}
		if(xTemp == mazeSizeX || $lookAheadTemp.hasClass("inaccessibleByCat"))
			keepLooking = false;
	}

	//up
	keepLooking = true;
	var yTemp = cat3LocationY[i];
	while(keepLooking){
		yTemp--;
		var lookAheadTemp = "#" + cat3LocationX[i]+'-'+yTemp;
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse") && !$lookAheadTemp.hasClass("inaccessibleByCat")){
			canSee3.push(i);
			return 3;
		}
		if(yTemp == -1 || $lookAheadTemp.hasClass("inaccessibleByCat"))
			keepLooking = false;
	}

	//right
	keepLooking = true;
	yTemp = cat3LocationY[i];
	while(keepLooking){
		yTemp++;
		var lookAheadTemp = "#" + cat3LocationX[i]+'-'+yTemp;
		$lookAheadTemp = $(lookAheadTemp);

		if($lookAheadTemp.hasClass("mouse") && !$lookAheadTemp.hasClass("inaccessibleByCat")){
			canSee3.push(i);
			return 4;
		}
		if(yTemp == mazeSizeY || $lookAheadTemp.hasClass("inaccessibleByCat"))
			keepLooking = false;
	}

	for (var j = 0; j < canSee3.length; j++){
		//console.log('canSee3'+j+ " "+ canSee3[j] +" cat1Location " + i);
		if(canSee3[j] == i)
			canSee3.splice(j,1);
	}

	//didnt find mouse
	return 0;
}



function seekMouse(moved, oneChoice, i){
	if(!moved && mouseLocationX < cat3LocationX[i]){
		var lookAheadTemp = "#" + (cat3LocationX[i]-1)+'-'+cat3LocationY[i];
		if(oneChoice || (lookAheadTemp != oldcat3Location[i]))
			moved = moveCat3Left(i);
		else{
			var randomNum2 = Math.floor((Math.random()*3)+1);
			if (randomNum2 == 1)
				moved = moveCat3Left(i);
		}
	}
	if(!moved && mouseLocationX > cat3LocationX[i]){
		var lookAheadTemp = "#" + (cat3LocationX[i]+1)+'-'+cat3LocationY[i];
		if(oneChoice || (lookAheadTemp != oldcat3Location[i]))
			moved = moveCat3Right(i);
		else{
			var randomNum2 = Math.floor((Math.random()*3)+1);
			if (randomNum2 == 1)
				moved = moveCat3Right(i);
		}	
	}
	if(!moved && mouseLocationY < cat3LocationY[i]){
		var lookAheadTemp = "#" + cat3LocationX[i]+'-'+(cat3LocationY[i]-1);
		if(oneChoice || (lookAheadTemp != oldcat3Location[i]))
			moved = moveCat3Up(i);	
		else{
			var randomNum2 = Math.floor((Math.random()*3)+1);
			if (randomNum2 == 1)
				moved = moveCat3Up(i);
		}			
	}
	if(!moved && mouseLocationY > cat3LocationY[i]){
		var lookAheadTemp = "#" + cat3LocationX[i]+'-'+(cat3LocationY[i]+1);
		if(oneChoice || (lookAheadTemp != oldcat3Location[i]))
			moved = moveCat3Down(i);
		else{
			var randomNum2 = Math.floor((Math.random()*3)+1);
			if (randomNum2 == 1)
				moved = moveCat3Down(i);
		}
	}
	return moved;
}


function removeCat3($oldcat3Location){
	$oldcat3Location.removeClass("cat");
	$oldcat3Location.removeClass("cat3");
	$oldcat3Location.removeClass("cat3Eyes");
	$oldcat3Location.css("background-image", "none");
	$oldcat3Location.addClass("dark");
}
function addCat3($lookAheadTemp){
	$lookAheadTemp.addClass("cat");
	if($lookAheadTemp.hasClass("dark")){
		$lookAheadTemp.removeClass("dark");
		$lookAheadTemp.addClass("cat3Eyes");
	}
	else{
		$lookAheadTemp.addClass("cat3");
	}
}











///////////////////////////////////////////////////////////////
////////////// code for all cats to use ///////////////////////
///////////////////////////////////////////////////////////////


function checkForCatch(){
	var divTemp = "#" + mouseLocation;
	var $divTemp = $(divTemp);
	if (gameReady && $divTemp.hasClass('cat')){
		$("#message").html("Eaten!");
		gameReady = false;
		$divTemp.addClass('skeleton'); 		//tombstone class could be used too
		$("#resetButton").addClass('trail');
	}
}

function checkSpotToFixPicAsCat($oldLocation){
	if($oldLocation.hasClass("cheese"))
		$oldLocation.css("background-image", "url(images/cheese.png)");
	if($oldLocation.hasClass("portalBlue"))
		$oldLocation.css("background-image", "url(images/portalBlue.png)");
	if($oldLocation.hasClass("portalRed"))
		$oldLocation.css("background-image", "url(images/portalRed.png)");
	if($oldLocation.hasClass("key1"))
		$oldLocation.css("background-image", "url(images/key1.png)");
	if($oldLocation.hasClass("unlocked1"))
		$oldLocation.css("background-image", "url(images/unlocked1.png)");
}