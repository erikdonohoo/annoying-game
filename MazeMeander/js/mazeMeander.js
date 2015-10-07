var mazeSizeX;			//Global variables
var mazeSizeY;
var mazeVisible = true;
var gameReady = false;
var paused = false;
var isLoadingMaze = false;		//just for the mazeMaker.js loadingMaze function
var levelNum = 1;
var totalLevels = 20;
var levelToBeat = 0;			//for localStorage
var timeOuts=new Array();
var divSize = 40;

var mouseLocationX;
var mouseLocationY;
var mouseLocation;

var wallLocation=new Array();
var cheeseLocationX=new Array();
var cheeseLocationY=new Array();
var cheeseLocation=new Array();
var cheeseCount = 0;
var portalLocationBlueX=new Array();
var portalLocationBlueY=new Array();
var portalLocationBlue=new Array();
var portalBlueCount = 0;
var portalLocationRedX=new Array();
var portalLocationRedY=new Array();
var portalLocationRed=new Array();
var portalRedCount = 0;
var key1Location=new Array();
var key1Count = 0;
var lock1Location=new Array();
var lock1Count = 0;
var pipeVertLocation=new Array();
var pipeVertAlignment=new Array();
var pipeCornerLocation=new Array();
var pipeCornerAlignment=new Array();

var cat1LocationX=new Array();
var cat1LocationY=new Array();
var cat1Location=new Array();
var cat2LocationX=new Array();
var cat2LocationY=new Array();
var cat2Location=new Array();
var cat3LocationX=new Array();
var cat3LocationY=new Array();
var cat3Location=new Array();



function refreshClasses(){		//Only refreshes optional features
	wallLocation=new Array();
	cheeseLocationX=new Array();
	cheeseLocationY=new Array();
	cheeseLocation=new Array();
	cheeseCount = 0;
	portalLocationBlueX=new Array();
	portalLocationBlueY=new Array();
	portalLocationBlue=new Array();
	portalBlueCount = 0;
	portalLocationRedX=new Array();
	portalLocationRedY=new Array();
	portalLocationRed=new Array();
	portalRedCount = 0;
	key1Location=new Array();
	key1Count = 0;
	lock1Location=new Array();
	lock1Count = 0;
	pipeVertLocation=new Array();
	pipeVertAlignment=new Array();
	pipeCornerLocation=new Array();
	pipeCornerAlignment=new Array();

	cat1LocationX=new Array();
	cat1LocationY=new Array();
	cat1Location=new Array();
	cat2LocationX=new Array();
	cat2LocationY=new Array();
	cat2Location=new Array();
	cat3LocationX=new Array();
	cat3LocationY=new Array();
	cat3Location=new Array();
}

function clearTimeOuts(){
	clearTimeout(timeOuts['cheeseFlash']);
	clearTimeout(timeOuts['cat1Timeout']);
	clearTimeout(timeOuts['cat2Timeout']);
	clearTimeout(timeOuts['cat3Timeout']);
}

function resetGame(){
	if(gameReady){
		var answer = confirm("Are you sure you want to go back to the main menu? You will have to restart the level that you are on.")
		if(answer)
			window.location="index.html";
		else
			return;
	}
	window.location="index.html";
}

function startGame(){			//method called to initialize the game.
	if(gameReady){
		var answer = confirm("Are you sure you want to restart the level?")
		if(!answer)
			return;
	}
	$("#mainMenuButton").removeClass("hidden");
	$("#resetButton").removeClass("hidden");
	$("#pauseButton").removeClass("hidden");
	$("#resetButton").removeClass('trail');
	document.getElementById("resetText").innerHTML="Restart Level";
	visibleOff();
	refreshClasses();
	setUpMazeElements(levelNum);//set up walls, player, etc
	loadMaze();					//actually loads the maze to the page
	updateLineOfSight();
	gameReady = true;
	clearTimeOuts();
	catsFirstMove = true;
	showAllCheese(2000);
}

function pauseGame(){
	if(gameReady){
		if(!paused){
			clearTimeOuts();
			paused = true;
			document.getElementById("Pause").innerHTML="Play";
		}
		else{
			letCatsLoose();
			paused = false;
			document.getElementById("Pause").innerHTML="Pause";
		}
	}
}

function showLoadableLevels(){			//lets players play levels they've beaten before
	if(levelToBeat == 0 || levelToBeat == undefined){
		$("#message").html("Beat a level first, then you may load.");
		return;
	}
	$("#mainMenuButton").removeClass("hidden");
	$("#newGameButton").addClass("hidden");
	$("#loadGameButton").addClass("hidden");
	$("#howToButton").addClass("hidden");
	for(var levelCounter = 1; levelCounter <= levelToBeat; levelCounter++){
		if(levelCounter <= totalLevels){
			var divTemp = document.createElement("label");
			$divTemp = $(divTemp);
			$divTemp.css('background-color', 'tan');
			$divTemp.html(levelCounter);
			$divTemp.attr('onmousedown', 'loadGame(this.innerHTML, event)'); 
			$('#gameDiv').append(divTemp);
		}
	}
}

function loadGame(levelPicked, e){
	if (e.which == 1){
		levelNum = parseInt(levelPicked);
		startGame();
	}
}


function howTo(){				//teaches players how to play
	$("#mainMenuButton").removeClass("hidden");
	$("#newGameButton").addClass("hidden");
	$("#loadGameButton").addClass("hidden");
	$("#howToButton").addClass("hidden");
	$("#howToText").removeClass("hidden");
}




function loadMaze() {			//loads the elements of a given maze
	$('#gameDiv').html('');		//clears maze
	$('#gameDiv').css('background', 'none');
	if(mazeSizeX > 20)
		$('#totalDiv').css('width', (mazeSizeX*divSize));
	else
		$('#totalDiv').css('width', '900px');
	$('#gameDiv').css('width', (mazeSizeX*divSize));
	$('#gameDiv').css('height', (mazeSizeY*divSize));

	for (var Y = 0; Y < mazeSizeY; Y++) {		
		for (var X = 0; X < mazeSizeX; X++) {
			var divTemp = document.createElement("div");
			$divTemp = $(divTemp);
			$divTemp.attr('id', X+"-"+Y);
			$divTemp.css('background-color', 'tan');			
			if(isLoadingMaze){		//just for the mazeMaker.js loadingMaze function
				$divTemp.attr('onmousedown', 'changeDiv(this)');
				$divTemp.attr('onmouseup', 'makeUnclicked(this)');
				$divTemp.attr('onmouseover', 'hoverChangeDiv(this)');
			}
			$('#gameDiv').append(divTemp);
		}
	}
	
	var mouseDiv = "#" + mouseLocation;
	$(mouseDiv).addClass('mouse');

	for (var i = 0; i < cheeseLocation.length; i++) {
		var cheeseDiv = "#" + cheeseLocation[i];
		$(cheeseDiv).addClass('cheese');
	}

	for (var i = 0; i < wallLocation.length; i++) {
				var divTemp = "#" + wallLocation[i];
				$divTemp = $(divTemp);
				$divTemp.addClass('wall');
				$divTemp.addClass('inaccessibleByCat');
				$divTemp.addClass('inaccessibleByMouse');
			}

	for (var i = 0; i < portalLocationBlue.length; i++) {
		var portalBlueDiv = "#" + portalLocationBlue[i];
		$(portalBlueDiv).addClass('portalBlue');
	}
	for (var i = 0; i < portalLocationRed.length; i++) {
		var portalRedDiv = "#" + portalLocationRed[i];
		$(portalRedDiv).addClass('portalRed');
	}
	for (var i = 0; i < key1Location.length; i++) {
		var keyDiv = "#" + key1Location[i];
		$(keyDiv).addClass('key1');
	}
	for (var i = 0; i < lock1Location.length; i++) {
		var lockDiv = "#" + lock1Location[i];
		$lockDiv = $(lockDiv);
		$lockDiv.addClass('locked1');
		$lockDiv.addClass('inaccessibleByCat');
		$lockDiv.addClass('inaccessibleByMouse');
	}
	for (var i = 0; i < pipeVertLocation.length; i++) {
		var pipeDiv = "#" + pipeVertLocation[i];
		$pipeDiv = $(pipeDiv);
		$pipeDiv.addClass('pipe');
		$pipeDiv.addClass('pipeVert');
		$pipeDiv.addClass('inaccessibleByCat');
		if(pipeVertAlignment[i] == 1){		//1 == vertical. 2 == horizotal.
			$pipeDiv.addClass('pipeUp');
			$pipeDiv.addClass('pipeDown');
		}
		else{
			$pipeDiv.addClass('rotate90');
			$pipeDiv.addClass('pipeLeft');
			$pipeDiv.addClass('pipeRight');
		}
	}
	for (var i = 0; i < pipeCornerLocation.length; i++) {
		var pipeDiv = "#" + pipeCornerLocation[i];
		$pipeDiv = $(pipeDiv);
		$pipeDiv.addClass('pipe');
		$pipeDiv.addClass('pipeCorner');
		$pipeDiv.addClass('inaccessibleByCat');
		if(pipeCornerAlignment[i] == 1){	//1 == left/up. 2 == up/right(90deg). 3 == right/down(180deg). 4 == down/left(270deg).
			$pipeDiv.addClass('pipeUp');
			$pipeDiv.addClass('pipeLeft');
		}
		else if(pipeCornerAlignment[i] == 2){
			$pipeDiv.addClass('rotate90');
			$pipeDiv.addClass('pipeUp');
			$pipeDiv.addClass('pipeRight');
		}
		else if(pipeCornerAlignment[i] == 3){
			$pipeDiv.addClass('rotate180');
			$pipeDiv.addClass('pipeRight');
			$pipeDiv.addClass('pipeDown');
		}
		else if(pipeCornerAlignment[i] == 4){
			$pipeDiv.addClass('rotate270');
			$pipeDiv.addClass('pipeDown');
			$pipeDiv.addClass('pipeLeft');
		}

	}
	for (var i = 0; i < cat1Location.length; i++) {
		var cat1Div = "#" + cat1Location[i];
		$(cat1Div).addClass('cat');
		$(cat1Div).addClass('cat1');
	}
	for (var i = 0; i < cat2Location.length; i++) {
		var cat2Div = "#" + cat2Location[i];
		$(cat2Div).addClass('cat');
		$(cat2Div).addClass('cat2');
	}
	for (var i = 0; i < cat3Location.length; i++) {
		var cat3Div = "#" + cat3Location[i];
		$(cat3Div).addClass('cat');
		$(cat3Div).addClass('cat3');
	}
}


function showAllCheese(time){
	if(!mazeVisible){			//reveals cheeses for 2 secs
		for (var i = 0; i < cheeseLocationX.length; i++) {
				var divTemp = "#" + cheeseLocationX[i] +'-'+ cheeseLocationY[i];
				if ($(divTemp).hasClass('cheese'))
					$(divTemp).removeClass('dark');
			}
		setTimeout(function(){
			for (var i = 0; i < cheeseLocationX.length; i++) {
				var divTemp = "#" + cheeseLocationX[i] +'-'+ cheeseLocationY[i];
				$(divTemp).addClass('dark');
			}
			
			updateLineOfSight();
		}, time);
		cheeseFlash();
	}
}


function showCheese(time){
	if(!mazeVisible){		//reveals one cheese
		var flashed = false;
		while(!flashed){
			var randomNum = Math.floor((Math.random()*cheeseLocationX.length));
			var randomCheese = "#" + cheeseLocationX[randomNum] +'-'+ cheeseLocationY[randomNum];
			if ($(randomCheese).hasClass('cheese')){
				$(randomCheese).removeClass('dark');
				flashed = true;
			}
		}
		setTimeout(function(){
			$(randomCheese).addClass('dark');
			updateLineOfSight();
		}, time);
		cheeseFlash();
	}
}




function visibleOn(){
	mazeVisible = true;
	if(gameReady)
		updateLineOfSight();
}
function visibleOff(){
	mazeVisible = false;
	if(gameReady)
		updateLineOfSight();
}



function cheeseFlash(){
	if(cheeseCount > 2)
		timeOuts['cheeseFlash'] = setTimeout('showCheese(700);',25000);
	else
		timeOuts['cheeseFlash'] = setTimeout('showCheese(400);',15000);
}



////////////////////////////////////////////////////////////////////////
///////////////////////////map elements/////////////////////////////////
////////////////////////////////////////////////////////////////////////





function checkForCheese(){
	for (var i = 0; i < cheeseLocation.length; i++) {
		if (mouseLocation == cheeseLocation[i]) {
			var oldCheeseLocation = "#" + cheeseLocation[i];
			$(oldCheeseLocation).removeClass('cheese');
			cheeseLocation.splice(i,1);
			cheeseCount--;
			$("#cheeseCount").html("Cheese Left: " + cheeseCount);
			if(cheeseCount < 1) {
				clearTimeOuts();
				$("#message").html("Mmmmm!");
				levelNum++;
				gameReady = false;
				visibleOn();
				document.getElementById("resetText").innerHTML="Next Level";
				//$("#resetText").addClass('glow');   //makeObvious
				$("#resetButton").addClass('trail');
				console.log("levelToBeat " + levelToBeat + " levelNum "+ levelNum);
				if(levelToBeat < levelNum){
					localStorage.levelToBeat = levelNum;
					console.log("local " + localStorage.levelToBeat);
				}
			}
		}
	}
}

function checkForPortal(){
	if (mouseLocation == portalLocationRed[0]) {
		if(portalLocationRed.length < 2)
			return;
		var oldMouseLocation = "#" + mouseLocation;
		var $oldMouseLocation = $(oldMouseLocation);
		$oldMouseLocation.removeClass('mouse');
		var newMouseLocation = "#" + portalLocationRed[1];
		$(newMouseLocation).addClass('mouse');
		mouseLocation = portalLocationRed[1];
		mouseLocationX = portalLocationRedX[1];
		mouseLocationY = portalLocationRedY[1];
	}
	else if (mouseLocation == portalLocationRed[1]) {
		if(portalLocationRed.length < 2)
			return;
		var oldMouseLocation = "#" + mouseLocation;
		var $oldMouseLocation = $(oldMouseLocation);
		$oldMouseLocation.removeClass('mouse');
		var newMouseLocation = "#" + portalLocationRed[0];
		$(newMouseLocation).addClass('mouse');
		mouseLocation = portalLocationRed[0];
		mouseLocationX = portalLocationRedX[0];
		mouseLocationY = portalLocationRedY[0];
	}

	else if (mouseLocation == portalLocationBlue[0]) {
		if(portalLocationBlue.length < 2)
			return;
		var oldMouseLocation = "#" + mouseLocation;
		var $oldMouseLocation = $(oldMouseLocation);
		$oldMouseLocation.removeClass('mouse');
		var newMouseLocation = "#" + portalLocationBlue[1];
		$(newMouseLocation).addClass('mouse');
		mouseLocation = portalLocationBlue[1];
		mouseLocationX = portalLocationBlueX[1];
		mouseLocationY = portalLocationBlueY[1];
	}
	else if (mouseLocation == portalLocationBlue[1]) {
		if(portalLocationBlue.length < 2)
			return;
		var oldMouseLocation = "#" + mouseLocation;
		var $oldMouseLocation = $(oldMouseLocation);
		$oldMouseLocation.removeClass('mouse');
		var newMouseLocation = "#" + portalLocationBlue[0];
		$(newMouseLocation).addClass('mouse');
		mouseLocation = portalLocationBlue[0];
		mouseLocationX = portalLocationBlueX[0];
		mouseLocationY = portalLocationBlueY[0];
	}
}

function checkForKey1(){
	for (var i = 0; i < key1Location.length; i++) {
		if (mouseLocation == key1Location[i]) {
			var oldKeyLocation = "#" + key1Location[i];
			$(oldKeyLocation).removeClass('key1');
			key1Location.splice(i,1);
			key1Count++;
			$("#key1Count").html("Gold Keys: " + key1Count);
		}
	}
}

function checkForLock1(lookAheadTemp){
	if(lookAheadTemp.hasClass('locked1')){
			if(key1Count > 0){
				key1Count--;
				$("#key1Count").html("Gold Keys: " + key1Count);
				lookAheadTemp.removeClass('inaccessibleByCat');
				lookAheadTemp.removeClass('inaccessibleByMouse');
				lookAheadTemp.removeClass('locked1');
				lookAheadTemp.addClass('unlocked1');
				return true; //you got through the lock with your key
			}
			return false;	//there was a lock, but you have no key
	}
	return true;			//there's no lock, proceed.
}

function checkForPipe(oldMouseLocation2, newMouseLocation2){
	if(oldMouseLocation2.hasClass('pipeVertWithMouse'))
		oldMouseLocation2.removeClass('pipeVertWithMouse');
	if(oldMouseLocation2.hasClass('pipeCornerWithMouse'))
		oldMouseLocation2.removeClass('pipeCornerWithMouse');
	if(newMouseLocation2.hasClass('pipeVert')){
		newMouseLocation2.addClass('pipeVertWithMouse');
	}
	if(newMouseLocation2.hasClass('pipeCorner')){
		newMouseLocation2.addClass('pipeCornerWithMouse');
	}
}


function checkSquare(oldMouseLocation2, newMouseLocation2){
	checkForCheese();
	checkForKey1();
	checkForPortal();
	checkForPipe(oldMouseLocation2, newMouseLocation2)
	checkSpotToFixPicAsMouse(oldMouseLocation2);
	checkForCatch();
	updateLineOfSight();

	if(catsFirstMove){
		letCatsLoose();
	}
}

function letCatsLoose(){
	cat1Move(750);	
	cat2Move(600);
	cat3Move(500);
	catsFirstMove = false;
}




$(document).keydown(function(e){
	//console.log(e.which);
	if(gameReady){
		if(!paused){
			if(e.which == 37 || e.which == 65) {
					moveLeft();
			}
			if(e.which == 38 || e.which == 87) {
					moveUp();
			}
			if(e.which == 39 || e.which == 68) {
					moveRight();
			}
			if(e.which == 40 || e.which == 83) {
					moveDown();
			}
		}

		if(e.which == 32) {
				pauseGame();
		}
	}
	if(e.which == 13) {
		startGame();
	}
});


$(function(){
	levelToBeat = localStorage.levelToBeat;
	if(levelToBeat == undefined)
		levelToBeat = 0;
});