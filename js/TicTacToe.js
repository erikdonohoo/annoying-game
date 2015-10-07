//var pID = 0;
var computerTurn = false;
var computerDelay = 500;
var whereToMove = "";

$(function(){
	
	$('#ticTacToe > div').click(function(){
		console.log($(this).attr('id'));
		if(!$(this).hasClass('X') && !$(this).hasClass('O') && !computerTurn)
		{
			computerTurn = true;
			$(this).addClass('X');
			$(this).html('<a>X</a>');

			checkFor3($(this).attr('id'), 'X');

			setTimeout(computerTakeTurn,computerDelay);
		}
	});
	
	$('.blueBorder').dblclick(function(){
		pID = 0;
		for(var i = 0; i < 10; i++)
		{
			$('#0'+i).html('');
			$('#0'+i).removeClass('X O');
		}
	});
});

function computerTakeTurn()
{
	if(needsToBlockMove())
		blockMove();
	else
		randomMove();

	computerTurn = false;
}

function randomMove()
{
	// randomly get a number between 1 and 9
	// check if it its filled, if it is keep generating
	var foundSpace = false;

	while(!foundSpace)
	{
		var num = Math.floor(Math.random() * 9) + 1;
		if(num == 10) num = 9;

		if(!$('#0'+num).hasClass('X') && !$('#0'+num).hasClass('O'))
		{
			// move there
			$('#0'+num).addClass('O');
			$('#0'+num).html('<a>O</a>');
			checkFor3($('#0'+num).attr('id'),'O');
			foundSpace = true;
		}
	}
}

function blockMove()
{
	// move to the space we designated
	$(whereToMove).addClass('O');
	$(whereToMove).html('<a>O</a>');
	checkFor3(whereToMove,'O');
}

function needsToBlockMove()
{
	// return a boolean if there is a block needed
	// 2 XX in a row or a gap between 2 X's
	if(checkColsForBlock() || checkRowsForBlock() || checkDiagonalsForBlock())
		return true;
	else
		return false;
}

function amIAlreadyThere(divToCheck)
{
	if($(divToCheck).hasClass('O'))
		return false;
	else
	{
		whereToMove = divToCheck;
		return true;
	}
}

function checkColsForBlock()
{
	var toReturn = false;
	for(var i = 1; i < 4; i++)
	{
		if($('#0'+i).hasClass('X') && $('#0'+(i+3)).hasClass('X'))
			toReturn = amIAlreadyThere('#0'+(i+6));
		else if($('#0'+i).hasClass('X') && $('#0'+(i+6)).hasClass('X'))
			toReturn = amIAlreadyThere('#0'+(i+3));
		else if($('#0'+(i+3)).hasClass('X') && $('#0'+(i+6)).hasClass('X'))
			toReturn = amIAlreadyThere('#0'+i);

		if(toReturn)
			return true;
	}

	return toReturn;
}

function checkRowsForBlock()
{
	var toReturn = false;
	for(var i = 1; i < 4; i++)
	{
		var num = 1;
		if(i == 2)
			num = 4;
		if(i == 3)
			num = 7;

		if($('#0'+num).hasClass('X') && $('#0'+(num+1)).hasClass('X'))
			toReturn = amIAlreadyThere('#0'+(num+2));
		if($('#0'+num).hasClass('X') && $('#0'+(num+2)).hasClass('X'))
			toReturn = amIAlreadyThere('#0'+(num+1));
		if($('#0'+(num+1)).hasClass('X') && $('#0'+(num+2)).hasClass('X'))
			toReturn = amIAlreadyThere('#0'+num);

		if(toReturn)
			return true;
	}

	return toReturn;
}

function checkDiagonalsForBlock()
{
	var toReturn = false;
	if($('#01').hasClass('X') && $('#05').hasClass('X'))
		toReturn = amIAlreadyThere('#09');
	if($('#01').hasClass('X') && $('#09').hasClass('X'))
		toReturn = amIAlreadyThere('#05');
	if($('#05').hasClass('X') && $('#09').hasClass('X'))
		toReturn = amIAlreadyThere('#01');
	if($('#03').hasClass('X') && $('#05').hasClass('X'))
		toReturn = amIAlreadyThere('#07');
	if($('#03').hasClass('X') && $('#07').hasClass('X'))
		toReturn = amIAlreadyThere('#05');
	if($('#05').hasClass('X') && $('#07').hasClass('X'))
		toReturn = amIAlreadyThere('#03');

	return toReturn;
}

function checkFor3(curBox, XorO)
		{
			var player = "";
			var victory = '';
			if(!computerTurn){
				player = "You";
				victory = " suck big time";
			}
			else{
				player = "Congratulations,";
				victory = ' you just beat a really bad AI. Hope it helps you sleep at night.';
			}
			if(curBox == 1){
				if($('#02').hasClass(XorO) && $('#03').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#04').hasClass(XorO) && $('#07').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#05').hasClass(XorO) && $('#09').hasClass(XorO)){
					alert(player + victory);
				}
			}
			else if(curBox == 2){
				if($('#01').hasClass(XorO) && $('#03').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#05').hasClass(XorO) && $('#08').hasClass(XorO)){
					alert(player + victory);
				}
			}
			else if(curBox == 3){
				if($('#01').hasClass(XorO) && $('#02').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#05').hasClass(XorO) && $('#07').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#06').hasClass(XorO) && $('#09').hasClass(XorO)){
					alert(player + victory);
				}
			}
			else if(curBox == 4){
				if($('#01').hasClass(XorO) && $('#07').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#05').hasClass(XorO) && $('#07').hasClass(XorO)){
					alert(player + victory);
				}
			}
			else if(curBox == 5){
				if($('#01').hasClass(XorO) && $('#02').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#02').hasClass(XorO) && $('#08').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#03').hasClass(XorO) && $('#07').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#04').hasClass(XorO) && $('#06').hasClass(XorO)){
					alert(player + victory);
				}
			}
			else if(curBox == 6){
				if($('#03').hasClass(XorO) && $('#09').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#04').hasClass(XorO) && $('#05').hasClass(XorO)){
					alert(player + victory);
				}
			}
			else if(curBox == 7){
				if($('#01').hasClass(XorO) && $('#04').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#03').hasClass(XorO) && $('#05').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#08').hasClass(XorO) && $('#09').hasClass(XorO)){
					alert(player + victory);
				}
			}
			else if(curBox == 8){
				if($('#02').hasClass(XorO) && $('#05').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#07').hasClass(XorO) && $('#09').hasClass(XorO)){
					alert(player + victory);
				}
			}
			else if(curBox == 9){
				if($('#01').hasClass(XorO) && $('#05').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#03').hasClass(XorO) && $('#06').hasClass(XorO)){
					alert(player + victory);
				}
				else if($('#07').hasClass(XorO) && $('#08').hasClass(XorO)){
					alert(player + victory);
				}
			}
		}