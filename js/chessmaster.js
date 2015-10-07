

function swapWith(old,dead)
{
	// make dead piece live again!
	dead.x = old.x;
	dead.y = old.y;
	var index = deadPieces.indexOf(dead);
	var pawnIndex = gamePieces.indexOf(old);
	gamePieces.splice(pawnIndex,1);
	deadPieces.splice(index,1);
	deadPieces.push(old);
	gamePieces.push(dead);

	var position = '#' + old.y + old.x;
	if(dead.type == 'rook') {$(position).html(bRook);}
	if(dead.type == 'knight') {$(position).html(bKnight);}
	if(dead.type == 'bishop') {$(position).html(bBishop);}
	if(dead.type == 'queen') {$(position).html(bQueen);}
}

function computerPickNewPiece(swapPiece)
{
	// choose a piece to replace with
	var piece;  // try to get best piece possible
	piece = findDeadPieceWithTypeAndColor('queen','black');
	if(piece){swapWith(swapPiece,piece);}
	else{
		piece = findDeadPieceWithTypeAndColor('rook','black');
		if(piece){swapWith(swapPiece,piece);}
		else{
			piece = findDeadPieceWithTypeAndColor('bishop','black');
			if(piece){swapWith(swapPiece,piece);}
			else{
				piece = findDeadPieceWithTypeAndColor('knight','black');
				if(piece){swapWith(swapPiece,piece);}
			}
		}
	}
}

function takeMove(move)
{
	// move piece to position
	//console.log($('#'+move.piece.y+move.piece.x).html());
	$('#'+move.y+move.x).html($('#'+move.piece.y+move.piece.x).html());
	$('#'+move.piece.y+move.piece.x).html('');
	move.piece.moveToSpace(move.x,move.y);
	if(move.piece.type == 'pawn'){
		move.piece.hasMoved = true;
		if(pawnMadeItAcross(move.piece))
			computerPickNewPiece(move.piece);
	}
	$('td').each(function(){
		$(this).removeClass('selected');
		$(this).removeClass('valid');
	});

	$('#gameInfo').html('');
	if(putsInCheck(null,null,null,'white'))
			$('#gameInfo').html('You are in Check!');
	var humanmoves = getAllValidMoves('white');
	if(humanmoves.length == 0){
		if(!inCheckMate('white'))
			addStartOver('Stalemate! It\'s a draw!');
		else
			addStartOver('Computer Wins! Checkmate!');
	}

	whiteTurn = !whiteTurn;
}

function startMove(move)
{
	// highlight square where piece is, and get its valid moves again
	var x = move.piece.x;
	var y = move.piece.y;
	$('#'+y+x).addClass('selected');
	var moves = move.piece.getValidMoves();
	highlightMoves(moves);
	var total = moves.length;
	var index = Math.floor((Math.random() * total) - .0001);
	setTimeout(function(){ takeMove(moves[index]); } ,1200);

}

function chosenMove(move)
{
	var x = move.piece.x;
	var y = move.piece.y;
	$('#'+y+x).addClass('selected');
	var moves = move.piece.getValidMoves();
	highlightMoves(moves);
	setTimeout(function(){ takeMove(move); },1200);
}

function easyComputer()
{
	//console.log('easy');
	var moves = getAllValidMoves('black');
	if(moves.length == 0){
		// check for stalemate
		if(!inCheckMate('black'))
			addStartOver('Stalemate! It\'s a draw!');
		else
			addStartOver('You win! Checkmate!');
	}
	else{
		var total = moves.length;
		var index = Math.floor((Math.random() * total) - .0001);
		startMove(moves[index]);
	}

}

function putsInDanger(color,move)
{
	// sees if a move puts a teammate in danger of being captured
	// take move, and see if other team can reach piece
	var oldx = move.piece.x;
	var oldy = move.piece.y;
	var capture = findPieceAtSpace(move.x,move.y);
	if(capture)
		gamePieces.splice(gamePieces.indexOf(capture),1);

	move.piece.x = move.x;
	move.piece.y = move.y;

	// see if other team can reach this spot
	var moves = getAllValidMoves('white');
	var inDanger = false;
	for(var i = 0; i < moves.length; i++)
	{
		var enemymove = moves[i];
		if(enemymove.x == move.x && enemymove.y == move.y){
			// enemy can get us, but is it more or less valuable than us
			// if its less valuable, then yes, the move  puts us in danger
			if(capture){
				if(enemymove.piece.value < move.piece.value){
					inDanger = true;
					break;
				}
			}
			

			// if its more valuable, or equal, see if its defended
			// this includes seeing how many pieces can reach the spot
		}
	}
}

function filterSafeMoves(moves)
{
	// see if any of these moves put us in danger
	// make each move, then see if we can be reached there by white
	var safemoves = new Array();
	for(var i = 0; i < moves.length; i++)
	{
		var move = moves[i];
		var oldx = move.piece.x;
		var oldy = move.piece.y;

		// if this was a capture move, move the piece there, removing the piece captured
		// if its a capture, check and see if we are capturing something more valuable than us
		// if so, do it even if its not safe
		var capturedpiece = findPieceAtSpace(move.x,move.y);
		if(capturedpiece){
			var index = gamePieces.indexOf(capturedpiece);
			gamePieces.splice(index,1);
			if(capturedpiece.value > move.piece.value){
				// this is a valuable capture, do it!
				gamePieces.push(capturedpiece);
				move.piece.x = oldx;
				move.piece.y = oldy;
				var capturearray = new Array();
				capturearray.push(move);
				return capturearray;
			}
		}

		move.piece.x = move.x;
		move.piece.y = move.y;

		var enemymoves = new Array();
		enemymoves = getAllValidMoves('white');
		var moveissafe = true;
		for(var j = 0; j < enemymoves.length; j++)
		{
			// look at each move and see if something can reach us

			if(enemymoves[j].x == move.x && enemymoves[j].y == move.y){
				if(enemymoves[j].piece.value < move.piece.value){
					moveissafe = false;
					break;
				}	
				// now check if this piece can revenged!
				gamePieces.splice(gamePieces.indexOf(move.piece),1);
				var enemypiece = enemymoves[j].piece;
				var oldex = enemypiece.x;
				var oldey = enemypiece.y;
				enemypiece.x = enemymoves[j].x;
				enemypiece.y = enemymoves[j].y;

				var mymoves = new Array();
				mymoves = getAllValidMoves('black');
				var canrevenge = false;
				for(var k = 0; k < mymoves.length; k++)
				{
					if(mymoves[k].x == enemypiece.x && mymoves[k].y == enemypiece.y){
						canrevenge = true;
						break;
					}
				}

				// move revenge stuff back
				gamePieces.push(move.piece);
				enemypiece.x = oldex;
				enemypiece.y = oldey; 

				if(!canrevenge){
					moveissafe = false;
					break;
				}
			}
		}

		if(moveissafe){
		 	safemoves.push(move);
		 }

		// put piece back
		if(capturedpiece){
			gamePieces.push(capturedpiece);
		}

		move.piece.x = oldx;
		move.piece.y = oldy;
	}

	// console.log('MOVES DEEMED SAFE');
	// console.log(safemoves);
	// console.log('FROM MOVES');
	// console.log(moves);

	return safemoves;
}

function filterSafeCaptureMoves(moves)
{
	// look for moves that cause a capture that dont put the computer in danger
	// first get moves that result in capture
	console.log('LOOKING FOR CAPTURES');
	var captureMoves = new Array();
	for(var i = 0; i < moves.length; i++)
	{
		var piece = findPieceAtSpace(moves[i].x,moves[i].y)

		if(piece && piece.color == 'white'){
			captureMoves.push(moves[i]);
		}
	}

	console.log(captureMoves);
	// check to see if any of the capture moves are safe
	return filterSafeMoves(captureMoves);

}

function moderateComputer()
{
	// try to capture pieces if possible, as long as its safe
	// otherwise make safe moves
	// otherwise just make a random move
	var moves = getAllValidMoves('black');
	var safemoves = filterSafeCaptureMoves(moves);
	console.log(safemoves);
	if(safemoves.length == 0){
		safemoves = filterSafeMoves(moves);
		if(safemoves.length == 0){
			console.log('NO SAFE MOVES, GOING RANDOM');
			safemoves = moves;
		}
	}
	console.log('logging final moveset for computer');
	console.log(safemoves);

	if(safemoves.length == 0){
		if(!inCheckMate('black'))
			addStartOver('Stalemate! It\'s a draw!');
		else
			addStartOver('You win! Checkmate!');
	} else {
		var total = safemoves.length;
		var index = Math.floor((Math.random() * total) - .0001);
		console.log('choosing move');
		console.log(safemoves[index]);
		chosenMove(safemoves[index]);
	}
}

function filterSafeChecks(moves)
{
	// see if we can put them in check safely
	// get position of white king
	console.log('LOOKING FOR SAFE CHECKS WITH MOVES');
	console.log(moves);
	var kingx;
	var kingy;
	var safemoves = new Array();
	for(var i = 0; i < gamePieces.length; i++)
	{
		if(gamePieces[i].color == 'white' && gamePieces[i].type == 'king')
		{
			kingx = gamePieces[i].x;
			kingy = gamePieces[i].y;
			break;
		}
	}

	// look at all moves, and see if once you move to it, you can move from there to king
	// and if you are safe there
	moves = filterSafeMoves(moves);
	for(var i = 0; i < moves.length; i++)
	{
		// try moving to the spot
		var move = moves[i];
		var oldx = move.piece.x;
		var oldy = move.piece.y;
		var capture = findPieceAtSpace(move.x,move.y);
		if(capture){
			gamePieces.splice(gamePieces.indexOf(capture),1);
		}
		move.piece.x = move.x;
		move.piece.y = move.y;
		// get that pieces valid moves and see if one gets to king safely
		var nextmoves = move.piece.getValidMoves();
		for(var j = 0; j < nextmoves.length; j++)
		{
			if(nextmoves[j].x == kingx && nextmoves[j].y == kingy){
				// see if its safe
				var enemymoves = getAllValidMoves('white');
				var safe = true;

				for(var k = 0; k < enemymoves.length; k++)
				{
					if(enemymoves[k].x == move.piece.x && enemymoves[k].y == move.piece.y){
						safe = false;
						break;
					}
				}

				if(safe){
					console.log('SAFE CHECK MOVE');
					console.log(move);
					safemoves.push(move);
					break;
				}
			}
		}

		// undo move
		move.piece.x = oldx;
		move.piece.y = oldy;
		if(capture)
			gamePieces.push(capture);
	}

	return safemoves;
}

function filterSafeCheckmates(moves)
{
	// see if any moves put them in checkmate
	console.log('LOOKING FOR CHECKMATE WITH MOVES');
	console.log(moves);
	var newmoves = new Array();
	for(var i = 0; i < moves.length; i++)
	{
		// for each move, see if it leaves the other team with no valid moves
		var curmove = moves[i];
		var piece = curmove.piece;
		var oldx = piece.x;
		var oldy = piece.y;
		var capture = findPieceAtSpace(curmove.x,curmove.y);
		if(capture){
			gamePieces.splice(gamePieces.indexOf(capture),1);
		}
		piece.x = curmove.x;
		piece.y = curmove.y;

		var enemymoves = new Array();
		enemymoves = getAllValidMoves('white');
		if(enemymoves.length == 0){
			// gotcha
			newmoves.push(curmove);
		}

		if(capture){
			gamePieces.push(capture);
		}

		piece.x = oldx;
		piece.y = oldy;
	}

	return newmoves;
}

function filterHelperMoves(moves)
{
	// try to kill 2 birds with one stone
	// if you can defend someone in danger with a move
	// these moves should already be checked for safety
	console.log("TRYING TO HELP WITH MOVES");
	console.log(moves);
	var toReturn = new Array();
	var bestmovesofar;
	var needinghelp = 16;
	for(var i = 0; i < moves.length; i++)
	{
		var move = moves[i];
		var oldx = move.piece.x;
		var oldy = move.piece.y;
		move.piece.x = move.x;
		move.piece.y = move.y;

		console.log('checking move to');
		console.log(moves[i]);
		var piecestohelp = new Array();
		piecestohelp = getAllPiecesOfColorInDanger('black',false);
		console.log('***** PIECES NEEDING HELP WITH THIS MOVE ****');
		console.log(piecestohelp);
		if(piecestohelp.length < needinghelp){
			needinghelp = piecestohelp.length;
			bestmovesofar = moves[i];
		}

		move.piece.x = oldx;
		move.piece.y = oldy;
	}

	toReturn.push(bestmovesofar);

	return toReturn;
}

function filterDefends(moves)
{
	// try to defend valuable pieces
	// first see if any pieces are in danger of being captured
	// then see if they can be defended by something of lower value
	//console.log('LOOKING FOR DEFENDS');
	var pieces = new Array();
	pieces = getAllPiecesOfColorInDanger('black',true);
	var newmoves = new Array();
	if(pieces.length == 0)
		return newmoves;
	else
	{
		// find piece of greatest value in danger, save it
		var dangerobjtosave = null;
		for(var i = 0; i < pieces.length; i++)
		{
			if(!dangerobjtosave) {dangerobjtosave = pieces[i];}
			else
			{
				if(pieces[i].piece.value > dangerobjtosave.piece.value)
					piecetosave = pieces[i];
			}
		}

		// if piece is a pawn, we don't really care (for now)
		console.log("PIECE TRYING TO SAVE");
		console.log(dangerobjtosave.piece);

		// If we can capture something more valuable than our piece needing protection safely,
		// do it!
		var piecevalue = dangerobjtosave.piece.value;
		// find our most valuable capture
		var mycaptures = new Array();
		mycaptures = filterSafeCaptureMoves(getAllValidMoves('black'));
		if(mycaptures.length != 0){
			// we have a safe capture, get most valuable one
			var bestcapture;
			var bestsofar;
			for(var i = 0; i < mycaptures.length; i++)
			{
				if(!bestcapture) { 
					bestcapture = mycaptures[i];
					bestsofar = findPieceAtSpace(mycaptures[i].x,mycaptures[i].y).value;
				}
				else {
					var piecetoget = findPieceAtSpace(mycaptures[i].x,mycaptures[i].y);
					var value = piecetoget.value;
					if(value > bestsofar){
						bestsofar = value;
						bestcapture = mycaptures[i];
					}
				}
			}

			// we have most valuable capture
			// if it is more valuable than the piece we need to defend, take it!
			if(bestsofar > piecevalue){
				mycaptures.push(bestcapture);
				return mycaptures;
			}
		}

		// got our most valuable piece to save
		// see if it can save itself by doing something good
		if(dangerobjtosave.needsToMove){
			// we have to move this piece to safety
			// if there is no way to, just let the rest of the function go
			console.log('THIS PIECE HAS TO MOVE OR KILL OFFENDING PIECE');
			console.log(dangerobjtosave.piece);
			var attackmoves = new Array();
			var safeattackmoves = new Array();
			attackmoves = filterSafeCaptureMoves(getAllValidMoves('black'));
			if(attackmoves.length != 0){
				// we have some attacks, see if one kills the offending piece
				for(var l = 0; l < attackmoves.length; l++)
				{
					if(attackmoves[l].x == dangerobjtosave.badpiece.x && attackmoves[l].y == dangerobjtosave.badpiece.y)
						safeattackmoves.push(attackmoves[l]);
				}
			}

			// see if we can safely kill offending piece
			if(safeattackmoves.length != 0)
				return safeattackmoves;

			console.log('NO SAFE ATTACKS TO SAVE PIECE');
			console.log(dangerobjtosave.piece);
			var runaway = new Array();
			var safeaway = new Array();
			runaway = dangerobjtosave.piece.getValidMoves();
			console.log('RUNAWAY MOVES');
			console.log(runaway);
			if(runaway.length != 0){
				safeaway = filterSafeCaptureMoves(runaway);
				console.log('SAFE RUNAWAY CAPTURES');
				console.log(safeaway);
				if(safeaway.length != 0)
					return safeaway;
				else {
					safeaway = filterSafeMoves(runaway);
					console.log('SAFE RUNAWAY MOVES');
					console.log(safeaway);
					if(safeaway.length != 0){
						var bonus = new Array();
						bonus = filterHelperMoves(safeaway);
						console.log('SAFE HELPER MOVES');
						console.log(bonus);
						if(bonus.length != 0)
							return bonus;
						else
							return safeaway;
					} 
				}
			} 

			// either there were no valid moves or no safe ones
			// this piece has no chance on its own
		}

		var piecetosave = dangerobjtosave.piece;
		var piecemoves =  new Array();
		piecemoves = piecetosave.getValidMoves();

		if(piecemoves.length == 0)
		{
			// find someone who can defend it
			// first get piece that puts us in danger here
			// var enemymoves = new Array();
			// enemymoves = getAllValidMoves('white');
			// var enemypiece = null;
			// var enemypieces = new Array();
			// for(var i = 0; i < enemymoves.length; i++)
			// {
			// 	if(enemymoves[i].x == piecetosave.x && enemymoves[i].y == piecetosave.y){
			// 		if(!enemypiece) {enemypiece=enemymoves[i].piece;}
			// 		else if (enemymoves[i].piece.value < enemypiece.value){enemypiece = enemymoves[i].piece;}
			// 	}

			// }

			var enemypiece = dangerobjtosave.badpiece;

			// we now have the lowest valued piece that puts us in danger

			var oldx = enemypiece.x;
			var oldy = enemypiece.y;
			gamePieces.splice(gamePieces.indexOf(piecetosave),1);
			enemypiece.x = piecetosave.x;
			enemypiece.y = piecetosave.y;

			// see if one of our pieces can defend it, if so add it to list
			var defendmoves =  new Array();
			defendmoves = getAllValidMoves('black');
			for(var i = 0; i < defendmoves.length; i++)
			{
				// make the move, and see if from there one of your moves gets you to where enemy is
				var movetest = defendmoves[i];
				var captured = findPieceAtSpace(movetest.x,movetest.y);
				if(captured){
					gamePieces.splice(gamePieces.indexOf(captured),1);
				}
				var oldx2 = movetest.piece.x;
				var oldy2 = movetest.piece.y;
				movetest.piece.x = movetest.x;
				movetest.piece.y = movetest.y;

				// we have moved to the spot, and removed any potential capture
				// now see if in our valid moves, we can get to enemypiece
				var moremoves = new Array();
				moremoves = movetest.piece.getValidMoves();
				for(var j = 0; j < moremoves.length; j++)
				{
					if(moremoves[j].x == enemypiece.x && moremoves[j].y == enemypiece.y)
						newmoves.push(movetest);
				}

				if(captured){
					console.log(captured);
					gamePieces.push(captured);
				}

				movetest.piece.x = oldx2;
				movetest.piece.y = oldy2;
			}

			//console.log(piecetosave);
			gamePieces.push(piecetosave);
			enemypiece.x = oldx;
			enemypiece.y = oldy;
		}
		else
		{
			// see if its moves are useful
			newmoves = filterSafeCheckmates(piecemoves);
			if(newmoves.length == 0){
				newmoves = filterSafeChecks(piecemoves);
				if(newmoves.length == 0){
					newmoves = filterSafeCaptureMoves(piecemoves);
					if(newmoves.length == 0){
						
						// since we couldn't do anything useful, try defending it
						// find someone who can defend it
						// first get piece that puts us in danger here
						// var enemymoves = getAllValidMoves('white');
						// var enemypiece = null;
						// for(var i = 0; i < enemymoves.length; i++)
						// {
						// 	if(enemymoves[i].x == piecetosave.x && enemymoves[i].y == piecetosave.y){
						// 		if(!enemypiece) {enemypiece=enemymoves[i].piece;}
						// 		else if (enemymoves[i].piece.value < enemypiece.value){enemypiece = enemymoves[i].piece;}
						// 	}

						// }

						var enemypiece = dangerobjtosave.badpiece;
						// we now have the lowest valued piece that puts us in danger

						var oldx = enemypiece.x;
						var oldy = enemypiece.y;
						gamePieces.splice(gamePieces.indexOf(piecetosave),1);
						enemypiece.x = piecetosave.x;
						enemypiece.y = piecetosave.y;

						// see if one of our pieces can defend it, if so add it to list
						var defendmoves =  new Array();
						defendmoves = getAllValidMoves('black');
						for(var i = 0; i < defendmoves.length; i++)
						{
							// make the move, and see if from there one of your moves gets you to where enemy is
							var movetest = defendmoves[i];
							var captured = findPieceAtSpace(movetest.x,movetest.y);
							if(captured){
								gamePieces.splice(gamePieces.indexOf(captured),1);
							}
							var oldx2 = movetest.piece.x;
							var oldy2 = movetest.piece.y;
							movetest.piece.x = movetest.x;
							movetest.piece.y = movetest.y;

							// we have moved to the spot, and removed any potential capture
							// now see if in our valid moves, we can get to enemypiece
							var moremoves = new Array();
							moremoves = movetest.piece.getValidMoves();
							for(var j = 0; j < moremoves.length; j++)
							{
								if(moremoves[j].x == enemypiece.x && moremoves[j].y == enemypiece.y)
									newmoves.push(movetest);
							}

							if(captured){
								//console.log(captured);
								gamePieces.push(captured);
							}

							movetest.piece.x = oldx2;
							movetest.piece.y = oldy2;
						}

						//console.log(piecetosave);
						gamePieces.push(piecetosave);
						enemypiece.x = oldx;
						enemypiece.y = oldy;

						// if newmoves is still empty, try to just make a safe move
						if(newmoves.length == 0){
							newmoves = filterSafeMoves(piecemoves);

							// if still nothing, there is no way to protect this piece
							if(newmoves.length == 0)
								return new Array();
						}
					}
				}
			}
		}
	}


	// try to do most useful moves first
	var returnmoves = new Array();
	if(newmoves.length == 0)
		return newmoves;

	returnmoves = filterSafeCaptureMoves(newmoves);
	if(returnmoves.length == 0){
		returnmoves = filterSafeMoves(newmoves);
		if(returnmoves.length == 0){
			return newmoves;
		}
	}

	return returnmoves;
}

function hardComputer()
{
	//console.log('hard');
	// try to defend valuable pieces
	// then try to put in checkmate and check
	// then try to capture safely
	// then move safely
	// then just move
	var moves =  new Array();
	moves = getAllValidMoves('black');
	console.log('********************STARTING TURN**********************');
	console.log('INITIAL MOVES');
	console.log(moves);
	var safemoves =  new Array();
	safemoves = moves;
	if(!putsInCheck(null,null,null,'black')){
		console.log('NOT IN CHECK, TAKING NORMAL MOVE ALGORITHM');
		safemoves = filterSafeCheckmates(moves);
		console.log(safemoves);
	 	if(safemoves.length == 0){
			safemoves = filterSafeChecks(moves);
			console.log("FILTER CHECK RESULT MOVES");
			console.log(safemoves);
			if(safemoves.length == 0){
				safemoves = filterDefends(moves);
				console.log('SAFE DEFEND MOVES IN HARD COMPUTER');
				console.log(safemoves);
				if(safemoves.length == 0){
					safemoves = filterSafeCaptureMoves(moves);
					console.log('SAFE CAPTURE MOVES IN HARD COMPUTER');
					console.log(safemoves);
					if(safemoves.length == 0){
						safemoves = filterSafeMoves(moves);
						if(safemoves.length == 0){
							safemoves = getAllValidMoves('black');
						}
					}
				}
			}
		}
	}
	else{
		console.log('IN CHECK');
		safemoves = filterValidCaptures(moves);
		if(safemoves.length == 0){
			safemoves = filterSafeMoves(moves);
			if(safemoves.length == 0)
				safemoves = moves;
		}
	}

	console.log('HARD COMPUTER LIST OF MOVES');
	console.log(safemoves);
	if(safemoves.length == 0){
		if(!inCheckMate('black'))
			addStartOver('Stalemate! It\'s a draw!');
		else
			addStartOver('You win! Checkmate!');
	} else {
		var total = safemoves.length;
		var index = Math.floor((Math.random() * total) - .0001);
		chosenMove(safemoves[index]);
	}
}

function chessmaster(difficulty){

	// this is the comptuer

	this.takeTurn = function(){
		if(putsInCheck(null,null,null,'black')){
			$('#gameInfo').html('Black is in check!');
		}

		if(difficulty == 1)
			setTimeout(easyComputer,800);
		else if(difficulty == 2)
			setTimeout(moderateComputer,800);
		else
			setTimeout(hardComputer,800);
	}
}