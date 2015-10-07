// Chess Pieces
var MAX  = 7;
var MIN = 0;
var UP = -1;
var DOWN = 1;
var debug = false;

var gamePieces;
var deadPieces;

var takingTurn = false;

function loadGame()
{
	// create pieces and fill arrays
	gamePieces = new Array();
	deadPieces = new Array();

	// create white pawns
	for(var i = 0; i < 8; i++)
	{
		gamePieces.push(new Pawn(i,6,'white'));
	}

	// create black pawns
	for(var i = 0; i < 8; i++)
	{
		gamePieces.push(new Pawn(i,1,'black'));
	}

	// create other white pieces
	gamePieces.push(new Rook(0,7,'white'));
	gamePieces.push(new Knight(1,7,'white'));
	gamePieces.push(new Bishop(2,7,'white'));
	gamePieces.push(new Queen(3,7,'white'));
	gamePieces.push(new King(4,7,'white'));
	gamePieces.push(new Bishop(5,7,'white'));
	gamePieces.push(new Knight(6,7,'white'));
	gamePieces.push(new Rook(7,7,'white'));

	// create other black pieces
	gamePieces.push(new Rook(0,0,'black'));
	gamePieces.push(new Knight(1,0,'black'));
	gamePieces.push(new Bishop(2,0,'black'));
	gamePieces.push(new Queen(3,0,'black'));
	gamePieces.push(new King(4,0,'black'));
	gamePieces.push(new Bishop(5,0,'black'));
	gamePieces.push(new Knight(6,0,'black'));
	gamePieces.push(new Rook(7,0,'black'));
}

function loadWeirdGame()
{
	gamePieces = new Array();
	deadPieces = new Array();

	gamePieces.push(new King(7,0,'black'));
	gamePieces.push(new Pawn(4,3,'black'));
	gamePieces.push(new Queen(2,2,'black'));
	gamePieces.push(new King(3,7,'white'));
	gamePieces.push(new Knight(5,5,'white'));
	gamePieces.push(new Pawn(3,5,'white'));
	gamePieces.push(new Pawn(4,4,'white'));
	gamePieces.push(new Bishop(1,7,'white'));
	gamePieces.push(new Pawn(4,6,'white'));
	gamePieces.push(new Pawn(2,7,'white'));
	gamePieces.push(new Bishop(4,5,'white'));
}

function inCheckMate(color)
{
	// find out if color has any valid moves
	var moves = new Array();
	for(var i = 0; i < gamePieces.length; i++)
	{
		if(gamePieces[i].color == color){
			var tempMoves = gamePieces[i].getValidMoves();
			moves = moves.concat(tempMoves);
		}
	}

	return moves.length == 0 && putsInCheck(null,null,null,color);
}

function getAllValidMoves(color)
{
	var moves = new Array();
	for(var i = 0; i < gamePieces.length; i++)
	{
		if(gamePieces[i].color == color){
			var temp = gamePieces[i].getValidMoves();
			for(var j = 0; j < temp.length; j++)
			{
				moves.push(temp[j]);
			}
		}
	}

	return moves;
}

function pawnMadeItAcross(pawn)
{
	// check for pawn on other side
	if(pawn.color == 'white'){
		if(pawn.y == 0)
			return true;
	} else {
		if(pawn.y == 7)
			return true;
	}

	return false;
}

function getAllDeadPiecesOfColor(color)
{
	var deadStuff = new Array();
	for(var i = 0; i < deadPieces.length; i++)
	{
		if(deadPieces[i].color == color)
			deadStuff.push(deadPieces[i]);
	}

	return deadStuff;
}

function filterValidCaptures(moves)
{
	// grab all moves that result in capture
	var newmoves = new Array();
	for(var i = 0; i < moves.length; i++)
	{
		var enemy = findPieceAtSpace(moves[i].x,moves[i].y);
		if(enemy)
			newmoves.push(moves[i]);
	}

	return newmoves;
}

function DangerObj(piece,badpiece,needsToMove)
{
	this.piece = piece;
	this.badpiece = badpiece;
	this.needsToMove = needsToMove;
}

function HowMuchDanger(piece,num)
{
	this.piece = piece;
	this.num = num;
}

function getAllPiecesOfColorInDanger(color,firstTime)
{
	// find all pieces of color in danger
	var pieces = new Array();

	var enemycolor;
	if(color == 'white')
		enemycolor = 'black';
	else
		enemycolor = 'white';

	var hastomove = false;
	var enemymoves = new Array();
	enemymoves = getAllValidMoves(enemycolor);

	// loop through enemy moves
	for(var i = 0; i < enemymoves.length; i++)
	{
		var mypiece = findPieceAtSpace(enemymoves[i].x,enemymoves[i].y);
		if(mypiece){
			// then this move captures me, in danger
			pieces.push(new DangerObj(mypiece,enemymoves[i].piece,false));
		}
	}

	if(firstTime){
		console.log('EVERYONE REACHABLE');
		console.log(pieces);
	}
	if(pieces.length == 0)
		return pieces;

	// i have a list of all my pieces in danger, and whos is putting them in danger
	var realpieces = new Array();
	var mustmove = new Array();

	// Find out if a piece is in danger because multiple things are attacking it that are of higher value
	var multipledanger = new Array();
	for(var i = 0; i < pieces.length; i++)
	{
		var potentialpiece = pieces[i].piece;
		// check if this is already in multiple danger, if so bump it up
		// if multiple danger is empty and this piece is endangered by something of greater value, add it
		if(multipledanger.length == 0 && potentialpiece.value <= pieces[i].badpiece.value)
			multipledanger.push(new HowMuchDanger(potentialpiece,1));
		else if(potentialpiece.value < pieces[i].badpiece.value){
			// if bad piece is higher value, add it here as long as its not already there, otherwise increment
			var foundit = false;
			for(var j = 0; j < multipledanger.length && !foundit; j++)
			{
				var piececheck = multipledanger[j].piece;
				if(potentialpiece === piececheck){
					foundit = true;
					multipledanger[j].num += 1;
				}
			}

			if(!foundit){
				multipledanger.push(new HowMuchDanger(potentialpiece,1));
			}
		}
	}

	// array for checking multiple attacks is built
	console.log('ARRAY OF MULTIPLE ATTACKS');
	console.log(multipledanger);
	if(multipledanger.length != 0){
		// we need to check if something in here has a num bigger than two.  If so add it to mustmove
		for(var i = 0; i < multipledanger.length; i++)
		{
			if(multipledanger[i].num > 1){
				// this piece needs to move
				var findit = false;
				for(var j = 0; j < pieces.length && !findit; j++)
				{
					if(pieces[j].piece === multipledanger[i].piece){
						console.log('PUSHING ON MUST MOVE MULTIPLE DANGER PIECE');
						pieces[j].needsToMove = true;
						realpieces.push(pieces[j]);
						mustmove.push(pieces[j]);
						findit = true;
					}
				}
			}
		}
	}

	for(var i = 0; i < pieces.length; i++)
	{
		// for each piece, see if piece putting it in danger is lower value
		var obj = pieces[i];
		if(obj.badpiece.value < obj.piece.value){
			obj.needsToMove = true;
			realpieces.push(obj);
			mustmove.push(obj);
		} else {
			//check for defense
			// move my piece out and enemy piece in
			gamePieces.splice(gamePieces.indexOf(obj.piece),1);
			var oldx = obj.badpiece.x;
			var oldy = obj.badpiece.y;
			obj.badpiece.x = obj.piece.x;
			obj.badpiece.y = obj.piece.y;

			var mydefensemoves = getAllValidMoves(color);
			var defended = false;
			for(var k = 0; k < mydefensemoves.length && !defended; k++)
			{
				var defend = mydefensemoves[k];
				if(defend.x == obj.badpiece.x && defend.y == obj.badpiece.y){
					defended = true;
				}
			}

			if(!defended){
				gamePieces.push(obj.piece);
				obj.badpiece.x = oldx;
				obj.badpiece.y = oldy;
				realpieces.push(obj);
			} else {

				gamePieces.push(obj.piece);
				obj.badpiece.x = oldx;
				obj.badpiece.y = oldy;
			}
		}
	}

	if(firstTime){
		console.log('REALLY IN DANGER');
		console.log(realpieces);
	}

	// filter what has to move
	if(mustmove.length != 0){

		// we have the things that need to move, if there are multiple, get the one with most value
		console.log('SOMETHING HAS TO MOVE');
		var best;
		for(var i = 0; i < mustmove.length; i++)
		{
			if(!best) { best = mustmove[i]; }
			else if(best.piece.value < mustmove[i].piece.value) { best = mustmove[i]; }
		}

		var newpieces = new Array();
		console.log('DECIDED PIECE MUST MOVE IS PIECE');
		console.log(best);
		newpieces.push(best);

		return newpieces;
	} else {
		// check to see if something is in danger by more than one thing, if so it needs to move
		if(realpieces.length > 0){
			console.log('PIECES IN DANGER');
			console.log(realpieces);
		}
		return realpieces;
	}
}

function findDeadPieceWithTypeAndColor(type,color)
{
	for(var i = 0; i < deadPieces.length; i++)
	{
		if(deadPieces[i].color == color && deadPieces[i].type == type)
			return deadPieces[i];
	}

	return null;
}

if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

function findPieceAtSpace(x,y)
{
	//console.log('GamePieces.length: '+gamePieces.length);
	for(var i = 0; i < gamePieces.length; i++)
	{
		//console.log(gamePieces[i].x,gamePieces[i].y);
		if(gamePieces[i].x == x && gamePieces[i].y == y)
			return gamePieces[i];
	}

	return null;
}

function isEmptySpace(x,y)
{
	// check if any piece occupies this space
	for(var i = 0; i < gamePieces.length; i++)
	{
		if(gamePieces[i].x == x && gamePieces[i].y == y)
			return false;
	}

	return true;
}

function isInBounds(x,y)
{
	// isInBounds
	if(x <= MAX && x >= MIN && y <= MAX && y >= MIN){
		//if(debug){console.log('true for inbounds');}
		return true;
	}
	else
		return false;
}

function spaceHasEnemy(x,y,color)
{
	// check if enemy occupies space
	//console.log('checking for enemy not ' + color);
	for(var i = 0; i < gamePieces.length; i++)
	{
		if(gamePieces[i].x == x && gamePieces[i].y == y && gamePieces[i].color != color){
			//if(debug){console.log('had an enemy');}
			return true;
		}
	}

	return false;
}

function spaceHasFriend(x,y,color)
{
	// check if enemy occupies space
	for(var i = 0; i < gamePieces.length; i++)
	{
		if(gamePieces[i].x == x && gamePieces[i].y == y && gamePieces[i].color == color)
			return true;
	}

	return false;
}

function putsInCheck(piece,x,y,color)
{
	// moves piece to x y, and sees if king of color is in check
	// puts piece back before returning
	if(debug && piece != null){
		console.log('check for check moving piece:');
		console.log(piece);
		console.log('from ' + piece.x + ' ' + piece.y);
		console.log('to : ' + x + ' ' + y);
	}

	// check if potential move captures someone, if so, save that piece, but remove from gamePieces
	var captured = null;
	if(piece){
		if(spaceHasEnemy(x,y,color)){
			captured = findPieceAtSpace(x,y);
			var num = gamePieces.indexOf(captured);
			var newArr = gamePieces.splice(num,1);
		}

		var oldx = piece.x;
		var oldy = piece.y;

		piece.x = x;
		piece.y = y;
	}

	var putsincheck = false;

	// loop through pieces of other color, collecting moves
	var bigMoveList = new Array();

	for(var i = 0; i < gamePieces.length; i++)
	{
		// find pieces of opposite color
		if(gamePieces[i].color != color){
			//console.log(gamePieces[i]);
			var moves = gamePieces[i].getCheckMoves();
			//console.log(moves);
			bigMoveList = bigMoveList.concat(moves);
		}
	}

	// get position of king of color
	var kingx;
	var kingy;

	for(var i = 0; i < gamePieces.length; i++)
	{
		if(gamePieces[i].color == color && gamePieces[i].type == 'king')
		{
			kingx = gamePieces[i].x;
			kingy = gamePieces[i].y;
			break;
		}
	}

	//console.log('king position ' + kingx + ' ' + kingy);

	// loop through big move list, see if one lands on king location
	for(var i = 0; i < bigMoveList.length; i++)
	{
		if(bigMoveList[i].x == kingx && bigMoveList[i].y == kingy){
			putsincheck = true;
			break;
		}
	}

	// put piece back and put back removed piece
	if(piece){
		if(captured)
			gamePieces.push(captured);
		piece.x = oldx;
		piece.y = oldy;
	}

	return putsincheck

}

function removeKilledPiece(x,y)
{
	for(var i = 0; i < gamePieces.length; i++)
	{
		if(gamePieces[i].x == x && gamePieces[i].y == y){
			var newArray = gamePieces.splice(i,1);
			deadPieces.push(newArray[0]);
			break;
		}
	}
}

function Move(x,y,piece)
{
	this.x = x;
	this.y = y;
	this.piece = piece;
}

function Pawn(startX,startY,color)
{
	this.x = startX;
	this.y = startY;
	this.color = color;
	this.hasMoved = false;
	this.reachedOtherSide = false;
	this.type = 'pawn';
	this.value = 1;
	//this.isEnPassantable = false;

	this.getValidMoves = function(){

		// return array for valid moves
		var moves = new Array();

		// set direction for pawns to move
		var pawnMove;
		if(color == 'white')
			pawnMove = UP;
		else
			pawnMove = DOWN;

		// check to move one space
		if(isInBounds(this.x,this.y+pawnMove) && isEmptySpace(this.x,this.y+pawnMove) && !putsInCheck(this,this.x,this.y+pawnMove,this.color))
			moves.push(new Move(this.x,this.y+pawnMove,this));

		// check two spaces
		if(!this.hasMoved && isInBounds(this.x,this.y+(pawnMove*2)) && isEmptySpace(this.x,this.y+(pawnMove*2)) && isEmptySpace(this.x,this.y+pawnMove) && !putsInCheck(this,this.x,this.y+(pawnMove*2),this.color)){
			moves.push(new Move(this.x,this.y+(pawnMove*2),this));
		}

		// check corner captures
		var x1 = this.x+1;
		var x2 = this.x-1;
		var y1 = this.y+pawnMove;
		if(isInBounds(x1,y1) && spaceHasEnemy(x1,y1,color) && !putsInCheck(this,x1,y1,this.color))
			moves.push(new Move(x1,y1,this));
		if(isInBounds(x2,y1) && spaceHasEnemy(x2,y1,color) && !putsInCheck(this,x2,y1,this.color))
			moves.push(new Move(x2,y1,this));

		// check en passant
		// IMPLEMENT LATER

		return moves;
	}

	this.getCheckMoves = function(){

		// return array for valid moves
		var moves = new Array();

		// set direction for pawns to move
		var pawnMove;
		if(color == 'white')
			pawnMove = UP;
		else
			pawnMove = DOWN;

		// check to move one space
		if(isInBounds(this.x,this.y+pawnMove) && isEmptySpace(this.x,this.y+pawnMove))
			moves.push(new Move(this.x,this.y+pawnMove,this));

		// check two spaces
		if(!this.hasMoved && isInBounds(this.x,this.y+(pawnMove*2)) && isEmptySpace(this.x,this.y+(pawnMove*2)) && isEmptySpace(this.x,this.y+pawnMove)){
			moves.push(new Move(this.x,this.y+(pawnMove*2),this));
		}

		// check corner captures
		var x1 = this.x+1;
		var x2 = this.x-1;
		var y1 = this.y+pawnMove;
		if(isInBounds(x1,y1) && spaceHasEnemy(x1,y1,color))
			moves.push(new Move(x1,y1,this));
		if(isInBounds(x2,y1) && spaceHasEnemy(x2,y1,color))
			moves.push(new Move(x2,y1,this));

		// check en passant
		// IMPLEMENT LATER

		return moves;
	}

	this.moveToSpace = function(x,y){
		removeKilledPiece(x,y);
		this.x = x;
		this.y = y;
		return this;
	}

}

function Rook(startX,startY,color)
{
	this.x = startX;
	this.y = startY;
	this.color = color;
	this.type = 'rook';
	this.value = 4;

	this.getValidMoves = function(){

		//console.log(this);
		// return array for valid moves
		var moves = new Array();

		// get valid moves in all 4 directions
		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x,(this.y+move)))
				break;
			else if(isEmptySpace(this.x,this.y+move) && !putsInCheck(this,this.x,this.y+move,color))
				moves.push(new Move(this.x,(this.y+move),this));
			else if(spaceHasEnemy(this.x,(this.y+move),color)){
				if(!putsInCheck(this,this.x,this.y+move,color))
					moves.push(new Move(this.x,(this.y+move),this));
				break;
			} else if(spaceHasFriend(this.x,(this.y+move),color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x,this.y-move))
				break;
			else if(isEmptySpace(this.x,this.y-move) && !putsInCheck(this,this.x,this.y-move,color))
				moves.push(new Move(this.x,this.y-move,this));
			else if(spaceHasEnemy(this.x,this.y-move,color)){
				if(!putsInCheck(this,this.x,this.y-move,color))
					moves.push(new Move(this.x,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y))
				break;
			else if(isEmptySpace(this.x+move,this.y) && !putsInCheck(this,this.x+move,this.y,color))
				moves.push(new Move(this.x+move,this.y,this));
			else if(spaceHasEnemy(this.x+move,this.y,color)){
				if(!putsInCheck(this,this.x+move,this.y,color))
					moves.push(new Move(this.x+move,this.y,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y))
				break;
			else if(isEmptySpace(this.x-move,this.y)  && !putsInCheck(this,this.x-move,this.y,color))
				moves.push(new Move(this.x-move,this.y,this));
			else if(spaceHasEnemy(this.x-move,this.y,color)){
				if(!putsInCheck(this,this.x-move,this.y,color))
					moves.push(new Move(this.x-move,this.y,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y,color))
				break;
		}

		return moves;
	}

	this.getCheckMoves = function(){

		//console.log(this);
		// return array for valid moves
		var moves = new Array();

		// get valid moves in all 4 directions
		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x,(this.y+move)))
				break;
			else if(isEmptySpace(this.x,(this.y+move)))
				moves.push(new Move(this.x,(this.y+move),this));
			else if(spaceHasEnemy(this.x,(this.y+move),color)){
				moves.push(new Move(this.x,(this.y+move),this));
				break;
			} else if(spaceHasFriend(this.x,(this.y+move),color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x,this.y-move))
				break;
			else if(isEmptySpace(this.x,this.y-move))
				moves.push(new Move(this.x,this.y-move,this));
			else if(spaceHasEnemy(this.x,this.y-move,color)){
				moves.push(new Move(this.x,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y))
				break;
			else if(isEmptySpace(this.x+move,this.y))
				moves.push(new Move(this.x+move,this.y,this));
			else if(spaceHasEnemy(this.x+move,this.y,color)){
				moves.push(new Move(this.x+move,this.y,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y))
				break;
			else if(isEmptySpace(this.x-move,this.y))
				moves.push(new Move(this.x-move,this.y,this));
			else if(spaceHasEnemy(this.x-move,this.y,color)){
				moves.push(new Move(this.x-move,this.y,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y,color))
				break;
		}

		return moves;
	}

	this.moveToSpace = function(x,y){
		removeKilledPiece(x,y);
		this.x = x;
		this.y = y;
		return this;
	}
}

function Bishop(startX,startY,color)
{
	this.x = startX;
	this.y = startY;
	this.color = color;
	this.type = 'bishop';
	this.value = 3;

	this.getValidMoves = function(){

		// return array for valid moves
		var moves = new Array();

		// get valid moves in all 4 directions
		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y+move))
				break;
			else if(isEmptySpace(this.x+move,this.y+move) && !putsInCheck(this,this.x+move,this.y+move,color))
				moves.push(new Move(this.x+move,this.y+move,this));
			else if(spaceHasEnemy(this.x+move,this.y+move,color)){
				if(!putsInCheck(this,this.x+move,this.y+move,color))
					moves.push(new Move(this.x+move,this.y+move,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y+move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y-move))
				break;
			else if(isEmptySpace(this.x-move,this.y-move) && !putsInCheck(this,this.x-move,this.y-move,color))
				moves.push(new Move(this.x-move,this.y-move,this));
			else if(spaceHasEnemy(this.x-move,this.y-move,color)){
				if(!putsInCheck(this,this.x-move,this.y-move,color))
					moves.push(new Move(this.x-move,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y-move))
				break;
			else if(isEmptySpace(this.x+move,this.y-move) && !putsInCheck(this,this.x+move,this.y-move,color))
				moves.push(new Move(this.x+move,this.y-move,this));
			else if(spaceHasEnemy(this.x+move,this.y-move,color)){
				if(!putsInCheck(this,this.x+move,this.y-move,color))
					moves.push(new Move(this.x+move,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y+move))
				break;
			else if(isEmptySpace(this.x-move,this.y+move) && !putsInCheck(this,this.x-move,this.y+move,color))
				moves.push(new Move(this.x-move,this.y+move,this));
			else if(spaceHasEnemy(this.x-move,this.y+move,color)){
				if(!putsInCheck(this,this.x-move,this.y+move,color))
					moves.push(new Move(this.x-move,this.y+move,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y+move,color))
				break;
		}

		return moves;
	}

	this.getCheckMoves = function(){

		// return array for valid moves
		var moves = new Array();

		// get valid moves in all 4 directions
		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y+move))
				break;
			else if(isEmptySpace(this.x+move,this.y+move))
				moves.push(new Move(this.x+move,this.y+move,this));
			else if(spaceHasEnemy(this.x+move,this.y+move,color)){
				moves.push(new Move(this.x+move,this.y+move,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y+move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y-move))
				break;
			else if(isEmptySpace(this.x-move,this.y-move))
				moves.push(new Move(this.x-move,this.y-move,this));
			else if(spaceHasEnemy(this.x-move,this.y-move,color)){
				moves.push(new Move(this.x-move,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y-move))
				break;
			else if(isEmptySpace(this.x+move,this.y-move))
				moves.push(new Move(this.x+move,this.y-move,this));
			else if(spaceHasEnemy(this.x+move,this.y-move,color)){
				moves.push(new Move(this.x+move,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y+move))
				break;
			else if(isEmptySpace(this.x-move,this.y+move))
				moves.push(new Move(this.x-move,this.y+move,this));
			else if(spaceHasEnemy(this.x-move,this.y+move,color)){
				moves.push(new Move(this.x-move,this.y+move,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y+move,color))
				break;
		}

		return moves;
	}

	this.moveToSpace = function(x,y){
		removeKilledPiece(x,y);
		this.x = x;
		this.y = y;
		return this;
	}
}

function Queen(startX,startY,color)
{
	this.x = startX;
	this.y = startY;
	this.color = color;
	this.type = 'queen';
	this.value = 6;

	this.getValidMoves = function(){

		// return array for valid moves
		var moves = new Array();

		// get valid moves in all 8 directions
		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y+move))
				break;
			else if(isEmptySpace(this.x+move,this.y+move) && !putsInCheck(this,this.x+move,this.y+move,color))
				moves.push(new Move(this.x+move,this.y+move,this));
			else if(spaceHasEnemy(this.x+move,this.y+move,color)){
				if(!putsInCheck(this,this.x+move,this.y+move,color))
					moves.push(new Move(this.x+move,this.y+move,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y+move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y-move))
				break;
			else if(isEmptySpace(this.x-move,this.y-move) && !putsInCheck(this,this.x-move,this.y-move,color))
				moves.push(new Move(this.x-move,this.y-move,this));
			else if(spaceHasEnemy(this.x-move,this.y-move,color)){
				if(!putsInCheck(this,this.x-move,this.y-move,color))
					moves.push(new Move(this.x-move,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y-move))
				break;
			else if(isEmptySpace(this.x+move,this.y-move) && !putsInCheck(this,this.x+move,this.y-move,color))
				moves.push(new Move(this.x+move,this.y-move,this));
			else if(spaceHasEnemy(this.x+move,this.y-move,color)){
				if(!putsInCheck(this,this.x+move,this.y-move,color))
					moves.push(new Move(this.x+move,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y+move))
				break;
			else if(isEmptySpace(this.x-move,this.y+move) && !putsInCheck(this,this.x-move,this.y+move,color))
				moves.push(new Move(this.x-move,this.y+move,this));
			else if(spaceHasEnemy(this.x-move,this.y+move,color)){
				if(!putsInCheck(this,this.x-move,this.y+move,color))
					moves.push(new Move(this.x-move,this.y+move,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y+move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x,(this.y+move)))
				break;
			else if(isEmptySpace(this.x,this.y+move) && !putsInCheck(this,this.x,this.y+move,color))
				moves.push(new Move(this.x,(this.y+move),this));
			else if(spaceHasEnemy(this.x,(this.y+move),color)){
				if(!putsInCheck(this,this.x,this.y+move,color))
					moves.push(new Move(this.x,(this.y+move),this));
				break;
			} else if(spaceHasFriend(this.x,(this.y+move),color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x,this.y-move))
				break;
			else if(isEmptySpace(this.x,this.y-move) && !putsInCheck(this,this.x,this.y-move,color))
				moves.push(new Move(this.x,this.y-move,this));
			else if(spaceHasEnemy(this.x,this.y-move,color)){
				if(!putsInCheck(this,this.x,this.y-move,color))
					moves.push(new Move(this.x,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y))
				break;
			else if(isEmptySpace(this.x+move,this.y) && !putsInCheck(this,this.x+move,this.y,color))
				moves.push(new Move(this.x+move,this.y,this));
			else if(spaceHasEnemy(this.x+move,this.y,color)){
				if(!putsInCheck(this,this.x+move,this.y,color))
					moves.push(new Move(this.x+move,this.y,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y))
				break;
			else if(isEmptySpace(this.x-move,this.y)  && !putsInCheck(this,this.x-move,this.y,color))
				moves.push(new Move(this.x-move,this.y,this));
			else if(spaceHasEnemy(this.x-move,this.y,color)){
				if(!putsInCheck(this,this.x-move,this.y,color))
					moves.push(new Move(this.x-move,this.y,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y,color))
				break;
		}

		return moves;
	}

	this.getCheckMoves = function(){

		// return array for valid moves
		var moves = new Array();

		// get valid moves in all 8 directions
		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y+move))
				break;
			else if(isEmptySpace(this.x+move,this.y+move))
				moves.push(new Move(this.x+move,this.y+move,this));
			else if(spaceHasEnemy(this.x+move,this.y+move,color)){
				moves.push(new Move(this.x+move,this.y+move,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y+move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y-move))
				break;
			else if(isEmptySpace(this.x-move,this.y-move))
				moves.push(new Move(this.x-move,this.y-move,this));
			else if(spaceHasEnemy(this.x-move,this.y-move,color)){
				moves.push(new Move(this.x-move,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y-move))
				break;
			else if(isEmptySpace(this.x+move,this.y-move))
				moves.push(new Move(this.x+move,this.y-move,this));
			else if(spaceHasEnemy(this.x+move,this.y-move,color)){
				moves.push(new Move(this.x+move,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y+move))
				break;
			else if(isEmptySpace(this.x-move,this.y+move))
				moves.push(new Move(this.x-move,this.y+move,this));
			else if(spaceHasEnemy(this.x-move,this.y+move,color)){
				moves.push(new Move(this.x-move,this.y+move,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y+move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x,(this.y+move)))
				break;
			else if(isEmptySpace(this.x,(this.y+move)))
				moves.push(new Move(this.x,(this.y+move),this));
			else if(spaceHasEnemy(this.x,(this.y+move),color)){
				moves.push(new Move(this.x,(this.y+move),this));
				break;
			} else if(spaceHasFriend(this.x,(this.y+move),color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x,this.y-move))
				break;
			else if(isEmptySpace(this.x,this.y-move))
				moves.push(new Move(this.x,this.y-move,this));
			else if(spaceHasEnemy(this.x,this.y-move,color)){
				moves.push(new Move(this.x,this.y-move,this));
				break;
			} else if(spaceHasFriend(this.x,this.y-move,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x+move,this.y))
				break;
			else if(isEmptySpace(this.x+move,this.y))
				moves.push(new Move(this.x+move,this.y,this));
			else if(spaceHasEnemy(this.x+move,this.y,color)){
				moves.push(new Move(this.x+move,this.y,this));
				break;
			} else if(spaceHasFriend(this.x+move,this.y,color))
				break;
		}

		for(var i = 0; i < MAX; i++)
		{
			var move = i + 1;
			if(!isInBounds(this.x-move,this.y))
				break;
			else if(isEmptySpace(this.x-move,this.y))
				moves.push(new Move(this.x-move,this.y,this));
			else if(spaceHasEnemy(this.x-move,this.y,color)){
				moves.push(new Move(this.x-move,this.y,this));
				break;
			} else if(spaceHasFriend(this.x-move,this.y,color))
				break;
		}

		return moves;
	}

	this.moveToSpace = function(x,y){
		removeKilledPiece(x,y);
		this.x = x;
		this.y = y;
		return this;
	}
}

function King(startX,startY,color)
{
	this.x = startX;
	this.y = startY;
	this.color = color;
	this.type = 'king';
	this.isInCheck = false;
	this.value = 7;

	this.getValidMoves = function(){

		// return array for valid moves
		var moves = new Array();

		// get valid moves in all 8 directions
		if(isInBounds(this.x+1,this.y+1) && (isEmptySpace(this.x+1,this.y+1) || spaceHasEnemy(this.x+1,this.y+1,color)) && !putsInCheck(this,this.x+1,this.y+1,this.color))
			moves.push(new Move(this.x+1,this.y+1,this));

		if(isInBounds(this.x-1,this.y-1) && (isEmptySpace(this.x-1,this.y-1) || spaceHasEnemy(this.x-1,this.y-1,color)) && !putsInCheck(this,this.x-1,this.y-1,this.color))
			moves.push(new Move(this.x-1,this.y-1,this));

		if(isInBounds(this.x+1,this.y-1) && (isEmptySpace(this.x+1,this.y-1) || spaceHasEnemy(this.x+1,this.y-1,color)) && !putsInCheck(this,this.x+1,this.y-1,this.color))
			moves.push(new Move(this.x+1,this.y-1,this));

		if(isInBounds(this.x-1,this.y+1) && (isEmptySpace(this.x-1,this.y+1) || spaceHasEnemy(this.x-1,this.y+1,color)) && !putsInCheck(this,this.x-1,this.y+1,this.color))
			moves.push(new Move(this.x-1,this.y+1,this));

		if(isInBounds(this.x,this.y+1) && (isEmptySpace(this.x,this.y+1) || spaceHasEnemy(this.x,this.y+1,color)) && !putsInCheck(this,this.x,this.y+1,this.color))
			moves.push(new Move(this.x,this.y+1,this));

		if(isInBounds(this.x,this.y-1) && (isEmptySpace(this.x,this.y-1) || spaceHasEnemy(this.x,this.y-1,color)) && !putsInCheck(this,this.x,this.y-1,this.color))
			moves.push(new Move(this.x,this.y-1,this));

		if(isInBounds(this.x+1,this.y) && (isEmptySpace(this.x+1,this.y) || spaceHasEnemy(this.x+1,this.y,color)) && !putsInCheck(this,this.x+1,this.y,this.color))
			moves.push(new Move(this.x+1,this.y,this));

		if(isInBounds(this.x-1,this.y) && (isEmptySpace(this.x-1,this.y) || spaceHasEnemy(this.x-1,this.y,color)) && !putsInCheck(this,this.x-1,this.y,this.color))
			moves.push(new Move(this.x-1,this.y,this));

		return moves;
	}

	this.getCheckMoves = function(){

		// return array for valid moves
		var moves = new Array();

		// get valid moves in all 8 directions
		if(isInBounds(this.x+1,this.y+1) && (isEmptySpace(this.x+1,this.y+1) || spaceHasEnemy(this.x+1,this.y+1,color)))
			moves.push(new Move(this.x+1,this.y+1,this));

		if(isInBounds(this.x-1,this.y-1) && (isEmptySpace(this.x-1,this.y-1) || spaceHasEnemy(this.x-1,this.y-1,color)))
			moves.push(new Move(this.x-1,this.y-1,this));

		if(isInBounds(this.x+1,this.y-1) && (isEmptySpace(this.x+1,this.y-1) || spaceHasEnemy(this.x+1,this.y-1,color)))
			moves.push(new Move(this.x+1,this.y-1,this));

		if(isInBounds(this.x-1,this.y+1) && (isEmptySpace(this.x-1,this.y+1) || spaceHasEnemy(this.x-1,this.y+1,color)))
			moves.push(new Move(this.x-1,this.y+1,this));

		if(isInBounds(this.x,this.y+1) && (isEmptySpace(this.x,this.y+1) || spaceHasEnemy(this.x,this.y+1,color)))
			moves.push(new Move(this.x,this.y+1,this));

		if(isInBounds(this.x,this.y-1) && (isEmptySpace(this.x,this.y-1) || spaceHasEnemy(this.x,this.y-1,color)))
			moves.push(new Move(this.x,this.y-1,this));

		if(isInBounds(this.x+1,this.y) && (isEmptySpace(this.x+1,this.y) || spaceHasEnemy(this.x+1,this.y,color)))
			moves.push(new Move(this.x+1,this.y,this));

		if(isInBounds(this.x-1,this.y) && (isEmptySpace(this.x-1,this.y) || spaceHasEnemy(this.x-1,this.y,color)))
			moves.push(new Move(this.x-1,this.y,this));

		return moves;
	}

	this.moveToSpace = function(x,y){
		removeKilledPiece(x,y);
		this.x = x;
		this.y = y;
		return this;
	}
}

function Knight(startX,startY,color)
{
	this.x = startX;
	this.y = startY;
	this.color = color;
	this.type = 'knight';
	this.value = 3;

	this.getValidMoves = function(){

		// return array for valid moves
		var moves = new Array();

		// 8 spots for knight
		var newX,newY;
		newX = this.x + 1;
		newY = this.y - 2;

		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)) && !putsInCheck(this,newX,newY,this.color))
			moves.push(new Move(newX,newY,this));

		newX = this.x - 1;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)) && !putsInCheck(this,newX,newY,this.color))
			moves.push(new Move(newX,newY,this));

		newY = this.y + 2;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)) && !putsInCheck(this,newX,newY,this.color))
			moves.push(new Move(newX,newY,this));

		newX = this.x + 1;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)) && !putsInCheck(this,newX,newY,this.color))
			moves.push(new Move(newX,newY,this));

		newX = this.x + 2;
		newY = this.y + 1;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)) && !putsInCheck(this,newX,newY,this.color))
			moves.push(new Move(newX,newY,this));

		newY = this.y - 1;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)) && !putsInCheck(this,newX,newY,this.color))
			moves.push(new Move(newX,newY,this));

		newX = this.x - 2;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)) && !putsInCheck(this,newX,newY,this.color))
			moves.push(new Move(newX,newY,this));

		newY = this.y + 1;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)) && !putsInCheck(this,newX,newY,this.color))
			moves.push(new Move(newX,newY,this));

		return moves;

	}

	this.getCheckMoves = function(){

		// return array for valid moves
		var moves = new Array();

		// 8 spots for knight
		var newX,newY;
		newX = this.x + 1;
		newY = this.y - 2;

		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)))
			moves.push(new Move(newX,newY,this));

		newX = this.x - 1;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)))
			moves.push(new Move(newX,newY,this));

		newY = this.y + 2;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)))
			moves.push(new Move(newX,newY,this));

		newX = this.x + 1;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)))
			moves.push(new Move(newX,newY,this));

		newX = this.x + 2;
		newY = this.y + 1;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)))
			moves.push(new Move(newX,newY,this));

		newY = this.y - 1;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)))
			moves.push(new Move(newX,newY,this));

		newX = this.x - 2;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)))
			moves.push(new Move(newX,newY,this));

		newY = this.y + 1;
		if(isInBounds(newX,newY) && (isEmptySpace(newX,newY) || spaceHasEnemy(newX,newY,color)))
			moves.push(new Move(newX,newY,this));

		return moves;

	}

	this.moveToSpace = function(x,y){
		removeKilledPiece(x,y);
		this.x = x;
		this.y = y;
		return this;
	}
}