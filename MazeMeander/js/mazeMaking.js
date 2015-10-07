var mouseLocationX = 0;
var mouseLocationY = 0;
var mouseLocation = "0-0";

var currentType = "wall";
var clicked = false;
var loaded = true;		//just for the loadingMaze function

function newMaze(){
	mazeSizeX = prompt("How wide would you like your maze? (between 10-30)", 14);
	if(mazeSizeX == null)
		return;
	if(mazeSizeX < 10 || mazeSizeX > 30){
		mazeSizeX = 14;
		alert("Your failure in following instructions resulted in the maze being set to a width of: " + mazeSizeX);
	}

	mazeSizeY = prompt("How tall would you like your maze? (between 5-15)", 14);
	if(mazeSizeY == null)
		return;
	if(mazeSizeY < 5 || mazeSizeY > 15){
		mazeSizeY = 14;
		alert("Your failure in following instructions resulted in the maze being set to a width of: " + mazeSizeY);
	}

	if(mazeSizeX > 22)
		$('#totalDiv').css('width', (mazeSizeX*divSize));
	else
		$('#totalDiv').css('width', '900px');
	$('#gameDiv').css('width', (mazeSizeX*divSize));
	$('#gameDiv').css('height', (mazeSizeY*divSize));
	$("#level").html("Level: ?");
	$("#cheeseCount").html("Cheese Left: 0");
	$("#key1Count").html("Gold Keys: 0");
	$("#lock1Count").html("Locks: 0");
	$('#gameDiv').html('');		//reset maze
	refreshClasses();

	for (var Y = 0; Y < mazeSizeY; Y++) {		
		for (var X = 0; X < mazeSizeX; X++) {
			var divTemp = document.createElement("div");
			var $divTemp = $(divTemp);

			if(X==0 && Y == 0) {
				$divTemp.addClass('mouse');
				mouseLocation = divTemp;
			}
			$divTemp.attr('id', X+"-"+Y);
			$divTemp.css('background-color', 'tan');
			$divTemp.attr('onmousedown', 'changeDiv(this)');
			$divTemp.attr('onmouseup', 'makeUnclicked(this)');
			$divTemp.attr('onmouseover', 'hoverChangeDiv(this)');

			$('#gameDiv').append(divTemp);
		}
	}
	var divTemp = "#" + 0 +'-'+ 0;
	$(divTemp).addClass('mouse');
}


function changeDiv(divTemp){
	clicked = true;
	var $divTemp = $(divTemp);

	if(currentType == "wall") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('wall')){
			if($divTemp.hasClass('wall')){
				$divTemp.removeClass('wall');
			}
			else{
				$divTemp.addClass('wall');
			}
		}
	}

	else if(currentType == "mouse") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "") {
			$(mouseLocation).removeClass("mouse");
			mouseLocation = divTemp;
			$(mouseLocation).addClass("mouse");
		}
	}

	else if(currentType == "cheese") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('cheese')) {
			if($divTemp.hasClass('cheese')){
				$divTemp.removeClass('cheese');
				cheeseCount--;
			}
			else{
				$divTemp.addClass('cheese');
				cheeseCount++;
			}
			$("#cheeseCount").html("Cheese Left: " + cheeseCount);
		}
	}


	else if(currentType == "portalBlue") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('portalBlue')) {
			if($divTemp.hasClass('portalBlue')){
				$divTemp.removeClass('portalBlue');
				portalBlueCount--;
			}
			else if (portalBlueCount < 2){
				$divTemp.addClass('portalBlue');
				portalBlueCount++;
			}
		}
	}

	else if(currentType == "portalRed") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('portalRed')) {
			if($divTemp.hasClass('portalRed')){
				$divTemp.removeClass('portalRed');
				portalRedCount--;
			}
			else if (portalRedCount < 2){
				$divTemp.addClass('portalRed');
				portalRedCount++;
			}
		}
	}

	else if(currentType == "key1") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('key1')) {
			if($divTemp.hasClass('key1')){
				$divTemp.removeClass('key1');
				key1Count--;
			}
			else{
				$divTemp.addClass('key1');
				key1Count++;
			}
			$("#key1Count").html("Gold Keys: " + key1Count);
		}
	}

	else if(currentType == "lock1") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('locked1')) {
			if($divTemp.hasClass('locked1')){
				$divTemp.removeClass('locked1');
				lock1Count--;
			}
			else{
				$divTemp.addClass('locked1');
				lock1Count++;
			}
			$("#lock1Count").html("Locks: " + lock1Count);
		}
	}

	else if(currentType == "pipeVert") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('pipeVert')) {
			if($divTemp.hasClass('pipeVert')){
				if($divTemp.hasClass('rotate90')){
					$divTemp.removeClass();
				}
				else{
					$divTemp.addClass('rotate90');
				}
			}
			else{
				$divTemp.addClass('pipeVert');
			}
		}
	}

	else if(currentType == "pipeCorner") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('pipeCorner')) {
			if($divTemp.hasClass('pipeCorner')){
				if(!$divTemp.hasClass('rotate90') && !$divTemp.hasClass('rotate180') && !$divTemp.hasClass('rotate270')){
					$divTemp.addClass('rotate90');
				}
				else if($divTemp.hasClass('rotate90')){
					$divTemp.removeClass('rotate90');
					$divTemp.addClass('rotate180');
				}
				else if($divTemp.hasClass('rotate180')){
					$divTemp.removeClass('rotate180');
					$divTemp.addClass('rotate270');
				}
				else if($divTemp.hasClass('rotate270')){
					$divTemp.removeClass();
				}
			}
			else{
				$divTemp.addClass('pipeCorner');
			}
		}
	}

	else if(currentType == "cat1") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('cat1')) {
			if($divTemp.hasClass('cat1')){
				$divTemp.removeClass('cat1');
			}
			else{
				$divTemp.addClass('cat1');
			}
		}
	}

	else if(currentType == "cat2") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('cat2')) {
			if($divTemp.hasClass('cat2')){
				$divTemp.removeClass('cat2');
			}
			else{
				$divTemp.addClass('cat2');
			}
		}
	}

	else if(currentType == "cat3") {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('cat3')) {
			if($divTemp.hasClass('cat3')){
				$divTemp.removeClass('cat3');
			}
			else{
				$divTemp.addClass('cat3');
			}
		}
	}
}

function hoverChangeDiv(divTemp){
	var $divTemp = $(divTemp);
	if(currentType == "wall" && clicked) {
		if($divTemp.attr("class") == null || $divTemp.attr("class") == "" || $divTemp.hasClass('wall')) {
			if($divTemp.hasClass('wall')){
				$divTemp.removeClass('wall');
			}
			else{
				$divTemp.addClass('wall');
			}
		}
	}
}



function allWall(){
	for (var Y = 0; Y < mazeSizeY; Y++) {			//making all open squares walls
		for (var X = 0; X < mazeSizeX; X++) {
			var divTemp = "#" + X +'-'+ Y;
			var $divTemp = $(divTemp);
			if($divTemp.attr("class") == null || $divTemp.attr("class") == "")
				$divTemp.addClass('wall');
		}
	}
}

function wallOut(){
	for (var Y = 0; Y < mazeSizeY; Y++) {			//removing all walls
		for (var X = 0; X < mazeSizeX; X++) {
			var divTemp = "#" + X +'-'+ Y;
			var $divTemp = $(divTemp);
			if($divTemp.hasClass('wall'))
				$divTemp.removeClass('wall');
		}
	}
}


function makeUnclicked(){
	clicked = false;
}

function placeWall(){
	currentType = "wall";
}
function placeMouse(){
	currentType = "mouse";
}
function placeCheese(){
	currentType = "cheese";	
}
function placePortalRed(){
	currentType = "portalRed";	
}
function placePortalBlue(){
	currentType = "portalBlue";	
}
function placeKey1(){
	currentType = "key1";	
}
function placeLock1(){
	currentType = "lock1";	
}
function placePipeVert(){
	currentType = "pipeVert";
}
function placePipeCorner(){
	currentType = "pipeCorner";
}
function placeCat1(){
	currentType = "cat1";	
}
function placeCat2(){
	currentType = "cat2";	
}
function placeCat3(){
	currentType = "cat3";	
}




function loadingMaze(){
	levelToLoad = prompt("Which level number would you like to load?: ");
	if(levelToLoad == null)
		return;
	levelToLoad = parseInt(levelToLoad);
	isLoadingMaze = true;
	
	refreshClasses();
	setUpMazeElements(levelToLoad);		//to pick out the levelToLoad
	if(loaded){
		loadMaze();			//load maze

		var mouseLocationDiv = "#" + mouseLocationX + "-" + mouseLocationY;
		mouseLocation = $(mouseLocationDiv);

		for (var Y = 0; Y < mazeSizeY; Y++) {		//gets rid of classes needed in the game but are in the way of the mazeMaker
			for (var X = 0; X < mazeSizeX; X++) {
				var divTemp = "#" + X +'-'+ Y;
				var $divTemp = $(divTemp);
				$divTemp.removeClass('inaccessibleByMouse').removeClass('inaccessibleByCat').removeClass('cat').removeClass('pipe');
			}
		}

		if(mazeSizeX > 16)
			$('#totalDiv').css('width', (mazeSizeX*divSize));
		else
			$('#totalDiv').css('width', '900px');

		$('#gameDiv').css('width', (mazeSizeX*divSize));
		$('#gameDiv').css('height', (mazeSizeY*divSize));

		$("#key1Count").html("Gold Keys: " + key1Location.length);
		$("#lock1Count").html("Locks: " + lock1Location.length);
	}
	else{
		alert("Sorry, that level doesn't exist.");
		//$("#message").html("Please pick a level that exists");
	}
	loaded = true;
}




function saveMaze(){
	if(cheeseCount < 1){
		alert("Error. At least one cheese must be placed.");
		return;
	}
	if(portalRedCount == 1){
		alert("Error. Either place 0 or 2 red portals.");
		return;
	}
	if(portalBlueCount == 1){
		alert("Error. Either place 0 or 2 blue portals.");
		return;
	}

	var output = "";
	var string = "";
	var mouseLocationTemp;
	var wallLocationTemp=new Array();
	var cheeseLocationXTemp=new Array();
	var cheeseLocationYTemp=new Array();
	var cheeseLocationTemp=new Array();
	var portalLocationBlueXTemp=new Array();
	var portalLocationBlueYTemp=new Array();
	var portalLocationBlueTemp=new Array();
	var portalLocationRedXTemp=new Array();
	var portalLocationRedYTemp=new Array();
	var portalLocationRedTemp=new Array();
	var key1LocationTemp=new Array();
	var lock1LocationTemp=new Array();
	var pipeVertLocationTemp=new Array();
	var pipeVertAlignmentTemp=new Array();
	var pipeCornerLocationTemp=new Array();
	var pipeCornerAlignmentTemp=new Array();
	var cat1LocationXTemp=new Array();
	var cat1LocationYTemp=new Array();
	var cat1LocationTemp=new Array();
	var cat2LocationXTemp=new Array();
	var cat2LocationYTemp=new Array();
	var cat2LocationTemp=new Array();
	var cat3LocationXTemp=new Array();
	var cat3LocationYTemp=new Array();
	var cat3LocationTemp=new Array();

	var levelToSave = prompt("Level number: ");
	if(levelToSave == null)
		return;
	//levelToSave = "";

	for (var Y = 0; Y < mazeSizeY; Y++) {
		for (var X = 0; X < mazeSizeX; X++) {
			var divTemp = "#" + X +'-'+ Y;
			var $divTemp = $(divTemp);
			
			if($divTemp.hasClass('mouse')){
				mouseLocationX = X;
				mouseLocationY = Y;
				mouseLocationTemp = "\'" + X+"-"+Y + "\'";
			}
			else if($divTemp.hasClass('wall')){
				wallLocationTemp.push("\'" + X+"-"+Y + "\'");
			}
			else if($divTemp.hasClass('cheese')){
				cheeseLocationXTemp.push(X);
				cheeseLocationYTemp.push(Y);
				cheeseLocationTemp.push("\'" + X+"-"+Y + "\'");
			}
			else if($divTemp.hasClass('portalBlue')){
				portalLocationBlueXTemp.push(X);
				portalLocationBlueYTemp.push(Y);
				portalLocationBlueTemp.push("\'" + X+"-"+Y + "\'");
			}
			else if($divTemp.hasClass('portalRed')){
				portalLocationRedXTemp.push(X);
				portalLocationRedYTemp.push(Y);
				portalLocationRedTemp.push("\'" + X+"-"+Y + "\'");
			}
			else if($divTemp.hasClass('key1')){
				key1LocationTemp.push("\'" + X+"-"+Y + "\'")
			}
			else if($divTemp.hasClass('locked1')){
				lock1LocationTemp.push("\'" + X+"-"+Y + "\'")
			}
			else if($divTemp.hasClass('pipeVert')){
				pipeVertLocationTemp.push("\'" + X+"-"+Y + "\'")
				if($divTemp.hasClass('rotate90'))
					pipeVertAlignmentTemp.push(2);
				else
					pipeVertAlignmentTemp.push(1);
			}
			else if($divTemp.hasClass('pipeCorner')){
				pipeCornerLocationTemp.push("\'" + X+"-"+Y + "\'")
				if($divTemp.hasClass('rotate90'))
					pipeCornerAlignmentTemp.push(2);
				else if($divTemp.hasClass('rotate180'))
					pipeCornerAlignmentTemp.push(3);
				else if($divTemp.hasClass('rotate270'))
					pipeCornerAlignmentTemp.push(4);
				else
					pipeCornerAlignmentTemp.push(1);
			}
			else if($divTemp.hasClass('cat1')){
				cat1LocationXTemp.push(X);
				cat1LocationYTemp.push(Y);
				cat1LocationTemp.push("\'" + X+"-"+Y + "\'");
			}
			else if($divTemp.hasClass('cat2')){
				cat2LocationXTemp.push(X);
				cat2LocationYTemp.push(Y);
				cat2LocationTemp.push("\'" + X+"-"+Y + "\'");
			}
			else if($divTemp.hasClass('cat3')){
				cat3LocationXTemp.push(X);
				cat3LocationYTemp.push(Y);
				cat3LocationTemp.push("\'" + X+"-"+Y + "\'");
			}
		}
	}
	if(key1LocationTemp.length < lock1LocationTemp.length){
		alert("Warning. There are more locks than there are keys.");
	}



	string = "case " + levelToSave + ":";
	output += "\t\t" + string;	
	
	string = '$("#message").html("");';
	output += "\r\t\t\t" + string;

	string = '$("#level").html("Level: '+ levelToSave +'");';
	output += "\r\t\t\t" + string;

	string = '$("#cheeseCount").html("Cheese Left: '+ cheeseCount +'");';
	output += "\r\t\t\t" + string;

	if(key1LocationTemp.length > 0){
		string = '$("#key1Count").html("Gold Keys: 0");';
		output += "\r\t\t\t" + string;
	}

	string = 'mazeSizeX = ' + mazeSizeX + ';';
	output += "\r\t\t\t" + string;

	string = 'mazeSizeY = ' + mazeSizeY + ';';
	output += "\r\t\t\t" + string;

	string = 'mouseLocationX = ' + mouseLocationX + ';';
	output += "\r\t\t\t" + string;

	string = 'mouseLocationY = ' + mouseLocationY + ';';
	output += "\r\t\t\t" + string;

	string = 'mouseLocation = ' + mouseLocationTemp + ';';
	output += "\r\t\t\t" + string;

	string = 'cheeseLocationX = [' + cheeseLocationXTemp + '];';
	output += "\r\t\t\t" + string;

	string = 'cheeseLocationY = [' + cheeseLocationYTemp + '];';
	output += "\r\t\t\t" + string;

	string = 'cheeseLocation = [' + cheeseLocationTemp + '];';
	output += "\r\t\t\t" + string;

	string = 'cheeseCount = ' + cheeseCount + ';';
	output += "\r\t\t\t" + string;

	if(portalLocationBlueTemp.length){
		string = 'portalLocationBlueX = [' + portalLocationBlueXTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'portalLocationBlueY = [' + portalLocationBlueYTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'portalLocationBlue = [' + portalLocationBlueTemp + '];';
		output += "\r\t\t\t" + string;
	}
	if(portalLocationRedTemp.length){
		string = 'portalLocationRedX = [' + portalLocationRedXTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'portalLocationRedY = [' + portalLocationRedYTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'portalLocationRed = [' + portalLocationRedTemp + '];';
		output += "\r\t\t\t" + string;
	}

	if(key1LocationTemp.length > 0){
		string = 'key1Location = [' + key1LocationTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'key1Count = 0;';
		output += "\r\t\t\t" + string;
	}
	if(lock1LocationTemp.length > 0){
		string = 'lock1Location = [' + lock1LocationTemp + '];';
		output += "\r\t\t\t" + string;
	}

	if(pipeVertLocationTemp.length > 0){
		string = 'pipeVertLocation = [' + pipeVertLocationTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'pipeVertAlignment = [' + pipeVertAlignmentTemp + '];';
		output += "\r\t\t\t" + string;
	}
	if(pipeCornerLocationTemp.length > 0){
		string = 'pipeCornerLocation = [' + pipeCornerLocationTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'pipeCornerAlignment = [' + pipeCornerAlignmentTemp + '];';
		output += "\r\t\t\t" + string;
	}

	if(cat1LocationTemp.length > 0){
		string = 'cat1LocationX = [' + cat1LocationXTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'cat1LocationY = [' + cat1LocationYTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'cat1Location = [' + cat1LocationTemp + '];';
		output += "\r\t\t\t" + string;
	}

	if(cat2LocationTemp.length > 0){
		string = 'cat2LocationX = [' + cat2LocationXTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'cat2LocationY = [' + cat2LocationYTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'cat2Location = [' + cat2LocationTemp + '];';
		output += "\r\t\t\t" + string;
	}

	if(cat3LocationTemp.length > 0){
		string = 'cat3LocationX = [' + cat3LocationXTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'cat3LocationY = [' + cat3LocationYTemp + '];';
		output += "\r\t\t\t" + string;
		string = 'cat3Location = [' + cat3LocationTemp + '];';
		output += "\r\t\t\t" + string;
	}

	if(wallLocationTemp.length > 0){
		string = 'wallLocation = [' + wallLocationTemp + '];';
		output += '\r\t\t\t' + string;
	}
	
	string = 'break;';
	output += "\r\t\t\t" + string;

	$('#sourceOutput').val(output);
}