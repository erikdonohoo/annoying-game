function setUpMazeElements(levelNumSelected){

	switch(levelNumSelected){
		case 1: 				// first maze made for testing, by Taft
			$("#message").html("I left you some cheese, good luck finding them. \n  -Squeaky");
			$("#level").html("Level: 1");		 
			$("#cheeseCount").html("Cheese Left: 4");
			mazeSizeX = 14;			//The Taft standard testing size.  X = width. Y = Height.
			mazeSizeY = 14;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [13, 2, 13, 8];	// X and Y locations are linked by their index. 0 to 0, 1 to 1, etc. (see cheeseLocation)
			cheeseLocationY = [13, 6, 1, 9];
			cheeseLocation = ['13-13', '2-6', '13-1', '8-9'];
			cheeseCount = 4;
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";	//setting all the squares to default.
				}
			}

			squareMaze[3][0] = "wall";
			squareMaze[9][0] = "wall";
			squareMaze[13][0] = "wall";
			squareMaze[0][1] = "wall";
			squareMaze[1][1] = "wall";
			squareMaze[3][1] = "wall";
			squareMaze[5][1] = "wall";
			squareMaze[6][1] = "wall";
			squareMaze[7][1] = "wall";
			squareMaze[9][0] = "wall";
			squareMaze[11][1] = "wall";
			squareMaze[13][1] = "wall";
			squareMaze[7][2] = "wall";
			squareMaze[9][2] = "wall";
			squareMaze[11][2] = "wall";
			squareMaze[1][3] = "wall";
			squareMaze[2][3] = "wall";
			squareMaze[3][3] = "wall";
			squareMaze[4][3] = "wall";
			squareMaze[5][3] = "wall";
			squareMaze[6][3] = "wall";
			squareMaze[7][3] = "wall";
			squareMaze[11][3] = "wall";
			squareMaze[12][3] = "wall";
			squareMaze[2][4] = "wall";
			squareMaze[4][4] = "wall";
			squareMaze[9][4] = "wall";
			squareMaze[0][5] = "wall";
			squareMaze[2][5] = "wall";
			squareMaze[4][5] = "wall";
			squareMaze[6][5] = "wall";
			squareMaze[7][5] = "wall";
			squareMaze[8][5] = "wall";
			squareMaze[9][5] = "wall";
			squareMaze[10][5] = "wall";
			squareMaze[12][5] = "wall";
			squareMaze[13][5] = "wall";
			squareMaze[0][6] = "wall";
			squareMaze[10][6] = "wall";
			squareMaze[0][7] = "wall";
			squareMaze[1][7] = "wall";
			squareMaze[3][7] = "wall";
			squareMaze[4][7] = "wall";
			squareMaze[5][7] = "wall";
			squareMaze[6][7] = "wall";
			squareMaze[7][7] = "wall";
			squareMaze[8][7] = "wall";
			squareMaze[12][7] = "wall";
			squareMaze[13][7] = "wall";
			squareMaze[5][8] = "wall";
			squareMaze[8][8] = "wall";
			squareMaze[10][8] = "wall";
			squareMaze[11][8] = "wall";
			squareMaze[12][8] = "wall";
			squareMaze[1][9] = "wall";
			squareMaze[2][9] = "wall";
			squareMaze[3][9] = "wall";
			squareMaze[5][9] = "wall";
			squareMaze[7][9] = "wall";
			squareMaze[8][9] = "wall";
			squareMaze[9][9] = "wall";
			squareMaze[10][9] = "wall";
			squareMaze[7][10] = "wall";
			squareMaze[12][10] = "wall";
			squareMaze[0][11] = "wall";
			squareMaze[2][11] = "wall";
			squareMaze[3][11] = "wall";
			squareMaze[5][11] = "wall";
			squareMaze[9][11] = "wall";
			squareMaze[11][11] = "wall";
			squareMaze[12][11] = "wall";
			squareMaze[0][12] = "wall";
			squareMaze[2][12] = "wall";
			squareMaze[3][12] = "wall";
			squareMaze[5][12] = "wall";
			squareMaze[7][12] = "wall";
			squareMaze[9][12] = "wall";
			squareMaze[11][12] = "wall";
			squareMaze[12][12] = "wall";
			squareMaze[13][12] = "wall";
			squareMaze[0][13] = "wall";
			squareMaze[2][13] = "wall";
			squareMaze[7][13] = "wall";
			squareMaze[9][13] = "wall";
			
			break;



		case 2:				// mouse in the middle, a basic cheese maze by Taft
			$("#message").html("");
			$("#level").html("Level: 2");
			$("#cheeseCount").html("Cheese Left: 6");
			mazeSizeX = 14;			//The Taft standard testing size.  X = width. Y = Height.
			mazeSizeY = 14;
			mouseLocationX = 5;
			mouseLocationY = 10;
			mouseLocation = '5-10';
			cheeseLocationX = [1, 13, 1, 10, 2, 13];
			cheeseLocationY = [0, 2, 5, 7, 11, 12];
			cheeseLocation = ['1-0', '13-2', '1-5', '10-7', '2-11', '13-12'];
			cheeseCount = 6;
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";	//setting all the squares to default.
				}
			}



			squareMaze[0][0] = "wall";
			squareMaze[1][0] = "wall";
			squareMaze[1][1] = "wall";
			squareMaze[1][2] = "wall";
			squareMaze[1][3] = "wall";
			squareMaze[1][5] = "wall";
			squareMaze[1][6] = "wall";
			squareMaze[1][7] = "wall";
			squareMaze[1][8] = "wall";
			squareMaze[1][9] = "wall";
			squareMaze[1][10] = "wall";
			squareMaze[1][11] = "wall";
			squareMaze[1][13] = "wall";
			squareMaze[2][3] = "wall";
			squareMaze[2][5] = "wall";
			squareMaze[2][7] = "wall";
			squareMaze[2][12] = "wall";
			squareMaze[3][1] = "wall";
			squareMaze[3][10] = "wall";
			squareMaze[4][1] = "wall";
			squareMaze[4][3] = "wall";
			squareMaze[4][5] = "wall";
			squareMaze[4][6] = "wall";
			squareMaze[4][8] = "wall";
			squareMaze[4][9] = "wall";
			squareMaze[4][10] = "wall";
			squareMaze[4][11] = "wall";
			squareMaze[4][13] = "wall";
			squareMaze[5][2] = "wall";
			squareMaze[6][0] = "wall";
			squareMaze[6][1] = "wall";
			squareMaze[6][5] = "wall";
			squareMaze[6][6] = "wall";
			squareMaze[6][8] = "wall";
			squareMaze[6][9] = "wall";
			squareMaze[6][11] = "wall";
			squareMaze[6][12] = "wall";
			squareMaze[6][13] = "wall";
			squareMaze[7][3] = "wall";
			squareMaze[7][5] = "wall";
			squareMaze[7][6] = "wall";
			squareMaze[7][9] = "wall";
			squareMaze[7][13] = "wall";
			squareMaze[8][1] = "wall";
			squareMaze[8][2] = "wall";
			squareMaze[8][3] = "wall";
			squareMaze[8][5] = "wall";
			squareMaze[8][7] = "wall";
			squareMaze[8][9] = "wall";
			squareMaze[8][10] = "wall";
			squareMaze[8][11] = "wall";
			squareMaze[8][13] = "wall";
			squareMaze[10][1] = "wall";
			squareMaze[10][2] = "wall";
			squareMaze[10][3] = "wall";
			squareMaze[10][4] = "wall";
			squareMaze[10][6] = "wall";
			squareMaze[10][7] = "wall";
			squareMaze[10][9] = "wall";
			squareMaze[10][10] = "wall";
			squareMaze[10][11] = "wall";
			squareMaze[11][1] = "wall";
			squareMaze[11][5] = "wall";
			squareMaze[11][9] = "wall";
			squareMaze[11][12] = "wall";
			squareMaze[11][13] = "wall";
			squareMaze[12][1] = "wall";
			squareMaze[12][2] = "wall";
			squareMaze[12][3] = "wall";
			squareMaze[12][5] = "wall";
			squareMaze[12][7] = "wall";
			squareMaze[12][8] = "wall";
			squareMaze[12][9] = "wall";
			squareMaze[12][11] = "wall";
			squareMaze[12][12] = "wall";
		
			break;




		case 3:				// first maze maker test by Kevin
			$("#message").html("");
			$("#level").html("Level: 3");
			$("#cheeseCount").html("Cheese Left: 6");
			mazeSizeX = 14;
			mazeSizeY = 14;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [13,3,0,1,13,9];
			cheeseLocationY = [0,3,11,12,12,13];
			cheeseLocation = ['13-0','3-3','0-11','1-12','13-12','9-13'];
			cheeseCount = 6;
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}


			squareMaze[0][1] = "wall";
			squareMaze[0][2] = "wall";
			squareMaze[0][3] = "wall";
			squareMaze[0][7] = "wall";
			squareMaze[0][8] = "wall";
			squareMaze[0][9] = "wall";
			squareMaze[1][5] = "wall";
			squareMaze[1][11] = "wall";
			squareMaze[1][12] = "wall";
			squareMaze[1][13] = "wall";
			squareMaze[2][0] = "wall";
			squareMaze[2][2] = "wall";
			squareMaze[2][3] = "wall";
			squareMaze[2][4] = "wall";
			squareMaze[2][5] = "wall";
			squareMaze[2][7] = "wall";
			squareMaze[2][9] = "wall";
			squareMaze[2][13] = "wall";
			squareMaze[3][0] = "wall";
			squareMaze[3][2] = "wall";
			squareMaze[3][5] = "wall";
			squareMaze[3][7] = "wall";
			squareMaze[3][9] = "wall";
			squareMaze[3][11] = "wall";
			squareMaze[4][0] = "wall";
			squareMaze[4][3] = "wall";
			squareMaze[4][5] = "wall";
			squareMaze[4][7] = "wall";
			squareMaze[4][9] = "wall";
			squareMaze[4][11] = "wall";
			squareMaze[4][12] = "wall";
			squareMaze[5][0] = "wall";
			squareMaze[5][1] = "wall";
			squareMaze[5][3] = "wall";
			squareMaze[5][11] = "wall";
			squareMaze[5][12] = "wall";
			squareMaze[6][3] = "wall";
			squareMaze[6][5] = "wall";
			squareMaze[6][6] = "wall";
			squareMaze[6][7] = "wall";
			squareMaze[6][9] = "wall";
			squareMaze[6][11] = "wall";
			squareMaze[6][12] = "wall";
			squareMaze[7][1] = "wall";
			squareMaze[7][2] = "wall";
			squareMaze[7][3] = "wall";
			squareMaze[7][5] = "wall";
			squareMaze[7][6] = "wall";
			squareMaze[7][11] = "wall";
			squareMaze[7][12] = "wall";
			squareMaze[8][3] = "wall";
			squareMaze[8][8] = "wall";
			squareMaze[9][1] = "wall";
			squareMaze[9][5] = "wall";
			squareMaze[9][6] = "wall";
			squareMaze[9][8] = "wall";
			squareMaze[9][9] = "wall";
			squareMaze[9][11] = "wall";
			squareMaze[9][12] = "wall";
			squareMaze[10][1] = "wall";
			squareMaze[10][2] = "wall";
			squareMaze[10][3] = "wall";
			squareMaze[10][8] = "wall";
			squareMaze[10][9] = "wall";
			squareMaze[10][11] = "wall";
			squareMaze[10][12] = "wall";
			squareMaze[11][1] = "wall";
			squareMaze[11][4] = "wall";
			squareMaze[11][6] = "wall";
			squareMaze[12][0] = "wall";
			squareMaze[12][2] = "wall";
			squareMaze[12][6] = "wall";
			squareMaze[12][9] = "wall";
			squareMaze[12][11] = "wall";
			squareMaze[12][12] = "wall";
			squareMaze[13][0] = "wall";
			squareMaze[13][4] = "wall";
			squareMaze[13][5] = "wall";
			squareMaze[13][6] = "wall";
			squareMaze[13][8] = "wall";
			squareMaze[13][12] = "wall";
			squareMaze[13][13] = "wall";
		
			break;




		case 4:				// First test of maze maker by Taft
			$("#message").html("");
			$("#level").html("Level: 4");
			$("#cheeseCount").html("Cheese Left: 6");
			mazeSizeX = 14;
			mazeSizeY = 14;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [10,12,6,5,12,6];
			cheeseLocationY = [2,2,5,6,9,12];
			cheeseLocation = ['10-2','12-2','6-5','5-6','12-9','6-12'];
			cheeseCount = 6;
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}


			squareMaze[1][1] = "wall";
			squareMaze[1][2] = "wall";
			squareMaze[1][3] = "wall";
			squareMaze[1][4] = "wall";
			squareMaze[1][5] = "wall";
			squareMaze[1][6] = "wall";
			squareMaze[1][7] = "wall";
			squareMaze[1][8] = "wall";
			squareMaze[1][9] = "wall";
			squareMaze[1][10] = "wall";
			squareMaze[1][11] = "wall";
			squareMaze[1][12] = "wall";
			squareMaze[2][1] = "wall";
			squareMaze[2][11] = "wall";
			squareMaze[3][1] = "wall";
			squareMaze[3][3] = "wall";
			squareMaze[3][5] = "wall";
			squareMaze[3][6] = "wall";
			squareMaze[3][7] = "wall";
			squareMaze[3][8] = "wall";
			squareMaze[3][9] = "wall";
			squareMaze[3][10] = "wall";
			squareMaze[3][11] = "wall";
			squareMaze[3][13] = "wall";
			squareMaze[4][1] = "wall";
			squareMaze[4][3] = "wall";
			squareMaze[4][5] = "wall";
			squareMaze[4][9] = "wall";
			squareMaze[4][11] = "wall";
			squareMaze[5][1] = "wall";
			squareMaze[5][3] = "wall";
			squareMaze[5][5] = "wall";
			squareMaze[5][7] = "wall";
			squareMaze[5][11] = "wall";
			squareMaze[5][12] = "wall";
			squareMaze[6][1] = "wall";
			squareMaze[6][3] = "wall";
			squareMaze[6][6] = "wall";
			squareMaze[6][9] = "wall";
			squareMaze[6][11] = "wall";
			squareMaze[6][12] = "wall";
			squareMaze[7][1] = "wall";
			squareMaze[7][3] = "wall";
			squareMaze[7][4] = "wall";
			squareMaze[7][5] = "wall";
			squareMaze[7][8] = "wall";
			squareMaze[8][1] = "wall";
			squareMaze[8][3] = "wall";
			squareMaze[8][10] = "wall";
			squareMaze[8][11] = "wall";
			squareMaze[8][12] = "wall";
			squareMaze[8][13] = "wall";
			squareMaze[9][1] = "wall";
			squareMaze[9][3] = "wall";
			squareMaze[9][5] = "wall";
			squareMaze[9][6] = "wall";
			squareMaze[9][7] = "wall";
			squareMaze[9][8] = "wall";
			squareMaze[9][10] = "wall";
			squareMaze[9][11] = "wall";
			squareMaze[10][1] = "wall";
			squareMaze[10][3] = "wall";
			squareMaze[10][7] = "wall";
			squareMaze[10][10] = "wall";
			squareMaze[10][11] = "wall";
			squareMaze[10][12] = "wall";
			squareMaze[11][1] = "wall";
			squareMaze[11][6] = "wall";
			squareMaze[11][8] = "wall";
			squareMaze[11][11] = "wall";
			squareMaze[12][1] = "wall";
			squareMaze[12][3] = "wall";
			squareMaze[12][5] = "wall";
			squareMaze[12][9] = "wall";
			squareMaze[12][11] = "wall";
			squareMaze[12][13] = "wall";
			squareMaze[13][3] = "wall";
			squareMaze[13][4] = "wall";
		
			break;




		case 5:					// Diagonal walls by Taft
			$("#message").html("Mouse portals are useful to get hard to reach cheeses. \n  -Squeaky");
			$("#level").html("Level: 5");
			$("#cheeseCount").html("Cheese Left: 6");
			mazeSizeX = 14;
			mazeSizeY = 14;
			mouseLocationX = 0;
			mouseLocationY = 4;
			mouseLocation = '0-4';
			cheeseLocationX = [0,9,8,13,0,4];
			cheeseLocationY = [0,0,9,9,12,13];
			cheeseLocation = ['0-0','9-0','8-9','13-9','0-12','4-13'];
			cheeseCount = 6;
			portalLocationBlueX = [0,3];
			portalLocationBlueY = [9,9];
			portalLocationBlue = ['0-9','3-9'];
			portalBlueCount = 2;
			portalLocationRedX = [4,13];
			portalLocationRedY = [0,4];
			portalLocationRed = ['4-0','13-4'];
			portalRedCount = 2;
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}


			squareMaze[0][1] = "wall";
			squareMaze[0][5] = "wall";
			squareMaze[0][8] = "wall";
			squareMaze[0][13] = "wall";
			squareMaze[1][1] = "wall";
			squareMaze[9][1] = "wall";
			squareMaze[1][4] = "wall";
			squareMaze[1][9] = "wall";
			squareMaze[2][2] = "wall";
			squareMaze[2][6] = "wall";
			squareMaze[2][7] = "wall";
			squareMaze[2][11] = "wall";
			squareMaze[3][0] = "wall";
			squareMaze[3][3] = "wall";
			squareMaze[3][5] = "wall";
			squareMaze[3][10] = "wall";
			squareMaze[3][13] = "wall";
			squareMaze[4][1] = "wall";
			squareMaze[4][4] = "wall";
			squareMaze[4][9] = "wall";
			squareMaze[5][2] = "wall";
			squareMaze[5][5] = "wall";
			squareMaze[5][6] = "wall";
			squareMaze[5][7] = "wall";
			squareMaze[5][8] = "wall";
			squareMaze[5][11] = "wall";
			squareMaze[6][0] = "wall";
			squareMaze[6][3] = "wall";
			squareMaze[6][10] = "wall";
			squareMaze[6][13] = "wall";
			squareMaze[7][0] = "wall";
			squareMaze[7][3] = "wall";
			squareMaze[7][6] = "wall";
			squareMaze[7][7] = "wall";
			squareMaze[7][10] = "wall";
			squareMaze[7][13] = "wall";
			squareMaze[8][2] = "wall";
			squareMaze[8][5] = "wall";
			squareMaze[8][8] = "wall";
			squareMaze[8][11] = "wall";
			squareMaze[9][4] = "wall";
			squareMaze[9][9] = "wall";
			squareMaze[4][12] = "wall";
			squareMaze[9][12] = "wall";
			squareMaze[10][0] = "wall";
			squareMaze[10][3] = "wall";
			squareMaze[10][8] = "wall";
			squareMaze[10][10] = "wall";
			squareMaze[10][13] = "wall";
			squareMaze[11][2] = "wall";
			squareMaze[11][6] = "wall";
			squareMaze[11][7] = "wall";
			squareMaze[11][11] = "wall";
			squareMaze[12][1] = "wall";
			squareMaze[12][4] = "wall";
			squareMaze[12][9] = "wall";
			squareMaze[13][0] = "wall";
			squareMaze[13][5] = "wall";
			squareMaze[13][8] = "wall";
			squareMaze[13][13] = "wall";
		 
			break;


		case 6: 			//a portal maze, by Emily
			$("#message").html("");
			$("#level").html("Level: 6");
			$("#cheeseCount").html("Cheese Left: 10");
			mazeSizeX = 14;
			mazeSizeY = 14;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [12,13,3,7,0,4,2,6,13,6];
			cheeseLocationY = [0,0,1,2,6,6,11,11,11,13];
			cheeseLocation = ['12-0','13-0','3-1','7-2','0-6','4-6','2-11','6-11','13-11','6-13'];
			cheeseCount = 10;
			portalLocationBlueX = [11,2];
			portalLocationBlueY = [0,13];
			portalLocationBlue = ['11-0','2-13'];
			portalLocationRedX = [9,0];
			portalLocationRedY = [4,5];
			portalLocationRed = ['9-4','0-5'];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}



			squareMaze[0][3] = "wall";
			squareMaze[0][4] = "wall";
			squareMaze[0][10] = "wall";
			squareMaze[1][1] = "wall";
			squareMaze[1][4] = "wall";
			squareMaze[1][6] = "wall";
			squareMaze[1][8] = "wall";
			squareMaze[1][10] = "wall";
			squareMaze[1][11] = "wall";
			squareMaze[1][12] = "wall";
			squareMaze[1][13] = "wall";
			squareMaze[2][1] = "wall";
			squareMaze[2][2] = "wall";
			squareMaze[2][3] = "wall";
			squareMaze[2][4] = "wall";
			squareMaze[2][6] = "wall";
			squareMaze[2][8] = "wall";
			squareMaze[2][12] = "wall";
			squareMaze[3][3] = "wall";
			squareMaze[3][7] = "wall";
			squareMaze[3][9] = "wall";
			squareMaze[3][10] = "wall";
			squareMaze[3][12] = "wall";
			squareMaze[4][0] = "wall";
			squareMaze[4][1] = "wall";
			squareMaze[4][5] = "wall";
			squareMaze[4][7] = "wall";
			squareMaze[4][10] = "wall";
			squareMaze[4][12] = "wall";
			squareMaze[5][1] = "wall";
			squareMaze[5][2] = "wall";
			squareMaze[5][3] = "wall";
			squareMaze[5][4] = "wall";
			squareMaze[5][5] = "wall";
			squareMaze[5][7] = "wall";
			squareMaze[5][9] = "wall";
			squareMaze[5][10] = "wall";
			squareMaze[6][1] = "wall";
			squareMaze[6][5] = "wall";
			squareMaze[6][6] = "wall";
			squareMaze[6][7] = "wall";
			squareMaze[6][10] = "wall";
			squareMaze[6][12] = "wall";
			squareMaze[7][0] = "wall";
			squareMaze[7][1] = "wall";
			squareMaze[7][10] = "wall";
			squareMaze[7][11] = "wall";
			squareMaze[7][12] = "wall";
			squareMaze[8][3] = "wall";
			squareMaze[8][4] = "wall";
			squareMaze[8][5] = "wall";
			squareMaze[8][7] = "wall";
			squareMaze[8][8] = "wall";
			squareMaze[8][11] = "wall";
			squareMaze[9][1] = "wall";
			squareMaze[9][5] = "wall";
			squareMaze[9][9] = "wall";
			squareMaze[10][1] = "wall";
			squareMaze[10][2] = "wall";
			squareMaze[10][3] = "wall";
			squareMaze[10][5] = "wall";
			squareMaze[10][6] = "wall";
			squareMaze[10][7] = "wall";
			squareMaze[10][9] = "wall";
			squareMaze[10][11] = "wall";
			squareMaze[10][12] = "wall";
			squareMaze[11][3] = "wall";
			squareMaze[11][9] = "wall";
			squareMaze[11][11] = "wall";
			squareMaze[12][1] = "wall";
			squareMaze[12][2] = "wall";
			squareMaze[12][3] = "wall";
			squareMaze[12][5] = "wall";
			squareMaze[12][6] = "wall";
			squareMaze[12][7] = "wall";
			squareMaze[12][9] = "wall";
			squareMaze[12][10] = "wall";
			squareMaze[12][11] = "wall";
			squareMaze[12][13] = "wall";
			squareMaze[13][0] = "wall";
			squareMaze[13][1] = "wall";
			squareMaze[13][5] = "wall";
			squareMaze[13][9] = "wall";
			squareMaze[13][13] = "wall";
		
			break;


		case 7: 			// first maze with a key and lock, by Taft
			$("#message").html("Mouse keys are really handy for hungry hunters of cheese. \n  -Squeaky");
			$("#level").html("Level: 7");
			$("#cheeseCount").html("Cheese Left: 4");
			$("#key1Count").html("Gold Keys: 0");
			mazeSizeX = 14;
			mazeSizeY = 14;
			mouseLocationX = 9;
			mouseLocationY = 0;
			mouseLocation = '9-0';
			cheeseLocationX = [12,13,12,13];
			cheeseLocationY = [0,0,1,1];
			cheeseLocation = ['12-0','13-0','12-1','13-1'];
			cheeseCount = 4;
			portalLocationBlueX = [13,1];
			portalLocationBlueY = [2,13];
			portalLocationBlue = ['13-2','1-13'];
			portalLocationRedX = [0,12];
			portalLocationRedY = [0,11];
			portalLocationRed = ['0-0','12-11'];
			key1Location = ['8-12'];
			key1Count = 0;
			lock1Location = ['4-13'];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}



			squareMaze[0][1] = "wall";
			squareMaze[0][2] = "wall";
			squareMaze[0][6] = "wall";
			squareMaze[0][7] = "wall";
			squareMaze[0][8] = "wall";
			squareMaze[0][10] = "wall";
			squareMaze[1][1] = "wall";
			squareMaze[1][4] = "wall";
			squareMaze[1][8] = "wall";
			squareMaze[1][10] = "wall";
			squareMaze[2][2] = "wall";
			squareMaze[2][3] = "wall";
			squareMaze[2][5] = "wall";
			squareMaze[2][7] = "wall";
			squareMaze[2][10] = "wall";
			squareMaze[2][12] = "wall";
			squareMaze[3][1] = "wall";
			squareMaze[3][9] = "wall";
			squareMaze[3][11] = "wall";
			squareMaze[3][13] = "wall";
			squareMaze[4][1] = "wall";
			squareMaze[4][3] = "wall";
			squareMaze[8][3] = "wall";
			squareMaze[4][5] = "wall";
			squareMaze[4][6] = "wall";
			squareMaze[4][8] = "wall";
			squareMaze[4][11] = "wall";
			squareMaze[5][3] = "wall";
			squareMaze[5][8] = "wall";
			squareMaze[5][9] = "wall";
			squareMaze[6][0] = "wall";
			squareMaze[6][2] = "wall";
			squareMaze[6][4] = "wall";
			squareMaze[6][5] = "wall";
			squareMaze[6][7] = "wall";
			squareMaze[6][12] = "wall";
			squareMaze[6][13] = "wall";
			squareMaze[7][1] = "wall";
			squareMaze[7][6] = "wall";
			squareMaze[7][10] = "wall";
			squareMaze[8][10] = "wall";
			squareMaze[8][12] = "wall";
			squareMaze[8][13] = "wall";
			squareMaze[9][1] = "wall";
			squareMaze[9][3] = "wall";
			squareMaze[9][4] = "wall";
			squareMaze[9][5] = "wall";
			squareMaze[9][6] = "wall";
			squareMaze[9][7] = "wall";
			squareMaze[9][8] = "wall";
			squareMaze[9][9] = "wall";
			squareMaze[9][10] = "wall";
			squareMaze[10][1] = "wall";
			squareMaze[10][9] = "wall";
			squareMaze[11][0] = "wall";
			squareMaze[11][2] = "wall";
			squareMaze[11][3] = "wall";
			squareMaze[11][4] = "wall";
			squareMaze[11][5] = "wall";
			squareMaze[11][8] = "wall";
			squareMaze[12][4] = "wall";
			squareMaze[12][7] = "wall";
			squareMaze[12][9] = "wall";
			squareMaze[12][10] = "wall";
			squareMaze[12][12] = "wall";
			squareMaze[13][0] = "wall";
			squareMaze[13][2] = "wall";
			squareMaze[13][6] = "wall";
			squareMaze[13][13] = "wall";
		
			break;



 
		case 8: 			//first maze with cats, simple but shows the first two cats, by Taft
			$("#message").html("Beware of the ferocious felines. =/ \n  -Squeaky");
			$("#level").html("Level: 8");
			$("#cheeseCount").html("Cheese Left: 4");
			$("#key1Count").html("Gold Keys: 0");
			mazeSizeX = 24;
			mazeSizeY = 8;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [8,23,14,9];
			cheeseLocationY = [0,2,4,6];
			cheeseLocation = ['8-0','23-2','14-4','9-6'];
			cheeseCount = 4;
			portalLocationBlueX = [12,16];
			portalLocationBlueY = [2,2];
			portalLocationBlue = ['12-2','16-2'];
			portalLocationRedX = [10,14];
			portalLocationRedY = [2,2];
			portalLocationRed = ['10-2','14-2'];
			key1Location = ['8-7'];
			key1Count = 0;
			lock1Location = ['18-6','18-7'];
			cat1LocationX = [21, 0];
			cat1LocationY = [6, 7];
			cat1Location = ['21-6', '0-7'];
			cat2LocationX = [];
			cat2LocationY = [];
			cat2Location = [];
			cat3LocationX = [];
			cat3LocationY = [];
			cat3Location = [];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}

			squareMaze[0][7] = "wall";
			squareMaze[0][19] = "wall";
			squareMaze[0][20] = "wall";
			squareMaze[0][22] = "wall";
			squareMaze[0][23] = "wall";
			squareMaze[1][0] = "wall";
			squareMaze[1][4] = "wall";
			squareMaze[1][6] = "wall";
			squareMaze[1][7] = "wall";
			squareMaze[1][8] = "wall";
			squareMaze[1][9] = "wall";
			squareMaze[1][10] = "wall";
			squareMaze[1][11] = "wall";
			squareMaze[1][12] = "wall";
			squareMaze[1][13] = "wall";
			squareMaze[1][14] = "wall";
			squareMaze[1][15] = "wall";
			squareMaze[1][16] = "wall";
			squareMaze[1][17] = "wall";
			squareMaze[1][20] = "wall";
			squareMaze[1][22] = "wall";
			squareMaze[2][1] = "wall";
			squareMaze[2][2] = "wall";
			squareMaze[3][4] = "wall";
			squareMaze[3][5] = "wall";
			squareMaze[3][6] = "wall";
			squareMaze[3][7] = "wall";
			squareMaze[3][8] = "wall";
			squareMaze[3][9] = "wall";
			squareMaze[3][10] = "wall";
			squareMaze[3][11] = "wall";
			squareMaze[3][12] = "wall";
			squareMaze[3][13] = "wall";
			squareMaze[3][14] = "wall";
			squareMaze[3][15] = "wall";
			squareMaze[3][16] = "wall";
			squareMaze[3][17] = "wall";
			squareMaze[3][18] = "wall";
			squareMaze[3][21] = "wall";
			squareMaze[3][22] = "wall";
			squareMaze[3][23] = "wall";
			squareMaze[4][1] = "wall";
			squareMaze[4][2] = "wall";
			squareMaze[4][4] = "wall";
			squareMaze[4][8] = "wall";
			squareMaze[4][11] = "wall";
			squareMaze[4][15] = "wall";
			squareMaze[4][18] = "wall";
			squareMaze[4][20] = "wall";
			squareMaze[5][1] = "wall";
			squareMaze[5][8] = "wall";
			squareMaze[5][13] = "wall";
			squareMaze[5][14] = "wall";
			squareMaze[5][15] = "wall";
			squareMaze[5][18] = "wall";
			squareMaze[5][20] = "wall";
			squareMaze[5][22] = "wall";
			squareMaze[6][1] = "wall";
			squareMaze[6][3] = "wall";
			squareMaze[6][4] = "wall";
			squareMaze[6][5] = "wall";
			squareMaze[6][6] = "wall";
			squareMaze[6][8] = "wall";
			squareMaze[6][10] = "wall";
			squareMaze[7][6] = "wall";
			squareMaze[7][9] = "wall";
			squareMaze[7][12] = "wall";
			squareMaze[7][13] = "wall";
			squareMaze[7][20] = "wall";
			squareMaze[7][21] = "wall";
			squareMaze[7][22] = "wall";

			break; 


		case 9: 			//lots of cats caged up by locks, that need to be let loose for you to get out too. by Taft
			$("#message").html("I finally caged up all the cats, please guard them for me.\n  -Squeaky");
			$("#level").html("Level: 9");
			$("#cheeseCount").html("Cheese Left: 7");
			$("#key1Count").html("Gold Keys: 0");
			mazeSizeX = 18;
			mazeSizeY = 12;
			mouseLocationX = 4;
			mouseLocationY = 11;
			mouseLocation = '4-11';
			cheeseLocationX = [12,14,1,3,15,12,16];
			cheeseLocationY = [2,2,3,5,9,10,10];
			cheeseLocation = ['12-2','14-2','1-3','3-5','15-9','12-10','16-10'];
			cheeseCount = 7;
			portalLocationBlueX = [];
			portalLocationBlueY = [];
			portalLocationBlue = [];
			portalLocationRedX = [];
			portalLocationRedY = [];
			portalLocationRed = [];
			key1Location = ['4-2','8-8','7-9','8-9'];
			key1Count = 0;
			lock1Location = ['4-5','4-6','4-7','12-8'];
			cat1LocationX = [1,0,2];
			cat1LocationY = [6,7,8];
			cat1Location = ['1-6','0-7','2-8'];
			cat2LocationX = [0,2,0];
			cat2LocationY = [5,5,6];
			cat2Location = ['0-5','2-5','0-6'];
			cat3LocationX = [];
			cat3LocationY = [];
			cat3Location = [];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}

			squareMaze[0][9] = "wall";
			squareMaze[1][1] = "wall";
			squareMaze[1][3] = "wall";
			squareMaze[1][4] = "wall";
			squareMaze[1][5] = "wall";
			squareMaze[1][6] = "wall";
			squareMaze[1][9] = "wall";
			squareMaze[1][10] = "wall";
			squareMaze[1][11] = "wall";
			squareMaze[1][12] = "wall";
			squareMaze[1][13] = "wall";
			squareMaze[1][14] = "wall";
			squareMaze[1][16] = "wall";
			squareMaze[2][1] = "wall";
			squareMaze[2][5] = "wall";
			squareMaze[2][6] = "wall";
			squareMaze[2][13] = "wall";
			squareMaze[2][16] = "wall";
			squareMaze[3][2] = "wall";
			squareMaze[3][12] = "wall";
			squareMaze[3][13] = "wall";
			squareMaze[3][14] = "wall";
			squareMaze[3][15] = "wall";
			squareMaze[3][16] = "wall";
			squareMaze[4][0] = "wall";
			squareMaze[4][1] = "wall";
			squareMaze[4][2] = "wall";
			squareMaze[4][3] = "wall";
			squareMaze[4][4] = "wall";
			squareMaze[4][5] = "wall";
			squareMaze[4][6] = "wall";
			squareMaze[4][9] = "wall";
			squareMaze[4][10] = "wall";
			squareMaze[5][13] = "wall";
			squareMaze[5][14] = "wall";
			squareMaze[5][16] = "wall";
			squareMaze[7][5] = "wall";
			squareMaze[7][7] = "wall";
			squareMaze[7][8] = "wall";
			squareMaze[7][12] = "wall";
			squareMaze[7][13] = "wall";
			squareMaze[7][14] = "wall";
			squareMaze[7][15] = "wall";
			squareMaze[8][3] = "wall";
			squareMaze[8][5] = "wall";
			squareMaze[8][7] = "wall";
			squareMaze[8][9] = "wall";
			squareMaze[8][15] = "wall";
			squareMaze[8][16] = "wall";
			squareMaze[9][3] = "wall";
			squareMaze[9][5] = "wall";
			squareMaze[9][6] = "wall";
			squareMaze[9][9] = "wall";
			squareMaze[9][12] = "wall";
			squareMaze[9][13] = "wall";
			squareMaze[9][16] = "wall";
			squareMaze[10][3] = "wall";
			squareMaze[10][5] = "wall";
			squareMaze[10][7] = "wall";
			squareMaze[10][9] = "wall";
			squareMaze[10][13] = "wall";
			squareMaze[10][14] = "wall";
			squareMaze[10][15] = "wall";
			squareMaze[11][0] = "wall";
			squareMaze[11][1] = "wall";
			squareMaze[11][2] = "wall";
			squareMaze[11][3] = "wall";
			squareMaze[11][9] = "wall";

			break; 


		 
		 
		 
		 case 10: 					//this maze is made of a checker board design with cat seekers chasing you
		 	$("#message").html("Watch out for these cats. They'll smell you out and chase you. \n  -Squeaky");
			$("#level").html("Level: 10");
			$("#cheeseCount").html("Cheese Left: 10");
			mazeSizeX = 14;
			mazeSizeY = 14;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [12,1,13,7,3,11,13,7,0,4];
			cheeseLocationY = [0,2,2,3,7,7,10,11,12,12];
			cheeseLocation = ['12-0','1-2','13-2','7-3','3-7','11-7','13-10','7-11','0-12','4-12'];
			cheeseCount = 10;
			portalLocationBlueX = [];
			portalLocationBlueY = [];
			portalLocationBlue = [];
			portalLocationRedX = [];
			portalLocationRedY = [];
			portalLocationRed = [];
			key1Location = [];
			key1Count = 0;
			lock1Location = [];
			cat1LocationX = [];
			cat1LocationY = [];
			cat1Location = [];
			cat2LocationX = [];
			cat2LocationY = [];
			cat2Location = [];
			cat3LocationX = [13,0,13];
			cat3LocationY = [0,13,13];
			cat3Location = ['13-0','0-13','13-13'];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}

			squareMaze[1][1] = "wall";
			squareMaze[1][5] = "wall";
			squareMaze[1][9] = "wall";
			squareMaze[1][13] = "wall";
			squareMaze[2][3] = "wall";
			squareMaze[2][7] = "wall";
			squareMaze[2][11] = "wall";
			squareMaze[3][1] = "wall";
			squareMaze[3][5] = "wall";
			squareMaze[3][9] = "wall";
			squareMaze[3][13] = "wall";
			squareMaze[4][3] = "wall";
			squareMaze[4][7] = "wall";
			squareMaze[4][11] = "wall";
			squareMaze[5][1] = "wall";
			squareMaze[5][5] = "wall";
			squareMaze[5][9] = "wall";
			squareMaze[5][13] = "wall";
			squareMaze[6][3] = "wall";
			squareMaze[6][7] = "wall";
			squareMaze[6][11] = "wall";
			squareMaze[7][1] = "wall";
			squareMaze[7][5] = "wall";
			squareMaze[7][9] = "wall";
			squareMaze[7][13] = "wall";
			squareMaze[8][3] = "wall";
			squareMaze[8][7] = "wall";
			squareMaze[8][11] = "wall";
			squareMaze[9][1] = "wall";
			squareMaze[9][5] = "wall";
			squareMaze[9][9] = "wall";
			squareMaze[9][13] = "wall";
			squareMaze[10][3] = "wall";
			squareMaze[10][7] = "wall";
			squareMaze[10][11] = "wall";
			squareMaze[11][1] = "wall";
			squareMaze[11][5] = "wall";
			squareMaze[11][9] = "wall";
			squareMaze[11][13] = "wall";
			squareMaze[12][3] = "wall";
			squareMaze[12][7] = "wall";
			squareMaze[12][11] = "wall";

			break; 




		case 11:
			$("#message").html("");
			$("#level").html("Level: 11");
			$("#cheeseCount").html("Cheese Left: 6");
			mazeSizeX = 16;
			mazeSizeY = 13;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [2,5,1,12,15,3];
			cheeseLocationY = [1,2,7,7,8,12];
			cheeseLocation = ['2-1','5-2','1-7','12-7','15-8','3-12'];
			cheeseCount = 6;
			portalLocationBlueX = [0,15];
			portalLocationBlueY = [11,11];
			portalLocationBlue = ['0-11','15-11'];
			portalLocationRedX = [0,15];
			portalLocationRedY = [4,4];
			portalLocationRed = ['0-4','15-4'];
			key1Location = [];
			key1Count = 0;
			lock1Location = [];
			cat1LocationX = [6];
			cat1LocationY = [1];
			cat1Location = ['6-1'];
			cat2LocationX = [];
			cat2LocationY = [];
			cat2Location = [];
			cat3LocationX = [5,11,4,11];
			cat3LocationY = [5,5,11,11];
			cat3Location = ['5-5','11-5','4-11','11-11'];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}

			squareMaze[0][2] = "wall";
			squareMaze[1][1] = "wall";
			squareMaze[1][13] = "wall";
			squareMaze[1][14] = "wall";
			squareMaze[2][2] = "wall";
			squareMaze[2][6] = "wall";
			squareMaze[2][7] = "wall";
			squareMaze[2][8] = "wall";
			squareMaze[2][9] = "wall";
			squareMaze[2][13] = "wall";
			squareMaze[3][2] = "wall";
			squareMaze[3][3] = "wall";
			squareMaze[3][4] = "wall";
			squareMaze[3][5] = "wall";
			squareMaze[3][6] = "wall";
			squareMaze[3][7] = "wall";
			squareMaze[3][8] = "wall";
			squareMaze[3][9] = "wall";
			squareMaze[3][10] = "wall";
			squareMaze[3][11] = "wall";
			squareMaze[3][12] = "wall";
			squareMaze[3][13] = "wall";
			squareMaze[6][2] = "wall";
			squareMaze[6][3] = "wall";
			squareMaze[6][4] = "wall";
			squareMaze[6][5] = "wall";
			squareMaze[6][6] = "wall";
			squareMaze[6][7] = "wall";
			squareMaze[6][8] = "wall";
			squareMaze[6][9] = "wall";
			squareMaze[6][10] = "wall";
			squareMaze[6][11] = "wall";
			squareMaze[6][12] = "wall";
			squareMaze[6][13] = "wall";
			squareMaze[7][5] = "wall";
			squareMaze[7][6] = "wall";
			squareMaze[7][7] = "wall";
			squareMaze[7][8] = "wall";
			squareMaze[7][9] = "wall";
			squareMaze[7][10] = "wall";
			squareMaze[7][13] = "wall";
			squareMaze[8][0] = "wall";
			squareMaze[8][1] = "wall";
			squareMaze[8][2] = "wall";
			squareMaze[8][14] = "wall";
			squareMaze[9][6] = "wall";
			squareMaze[9][7] = "wall";
			squareMaze[9][8] = "wall";
			squareMaze[9][9] = "wall";
			squareMaze[9][14] = "wall";
			squareMaze[9][15] = "wall";
			squareMaze[10][15] = "wall";
			squareMaze[12][4] = "wall";
			squareMaze[12][5] = "wall";
			squareMaze[12][6] = "wall";
			squareMaze[12][7] = "wall";
			squareMaze[12][8] = "wall";
			squareMaze[12][9] = "wall";
			squareMaze[12][10] = "wall";
			squareMaze[12][11] = "wall";

			break; 




		case 12: 			// difficult maze with tight paths and several cats. by Taft
			$("#message").html("Several cats hold this maze tightly. Use your keys wisely. \n  -Squeaky");
			$("#level").html("Level: 12");
			$("#cheeseCount").html("Cheese Left: 4");
			$("#key1Count").html("Gold Keys: 0");
			mazeSizeX = 20;
			mazeSizeY = 15;
			mouseLocationX = 0;
			mouseLocationY = 5;
			mouseLocation = '0-5';
			cheeseLocationX = [7,14,12,1];
			cheeseLocationY = [0,2,12,14];
			cheeseLocation = ['7-0','14-2','12-12','1-14'];
			cheeseCount = 4;
			portalLocationBlueX = [];
			portalLocationBlueY = [];
			portalLocationBlue = [];
			portalLocationRedX = [];
			portalLocationRedY = [];
			portalLocationRed = [];
			key1Location = ['10-11','7-14','8-14'];
			key1Count = 0;
			lock1Location = ['12-9','12-10','16-14'];
			cat1LocationX = [19,5];
			cat1LocationY = [1,13];
			cat1Location = ['19-1','5-13'];
			cat2LocationX = [0,9];
			cat2LocationY = [0,14];
			cat2Location = ['0-0','9-14'];
			cat3LocationX = [];
			cat3LocationY = [];
			cat3Location = [];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}

			squareMaze[0][3] = "wall";
			squareMaze[0][6] = "wall";
			squareMaze[0][18] = "wall";
			squareMaze[0][19] = "wall";
			squareMaze[1][1] = "wall";
			squareMaze[1][3] = "wall";
			squareMaze[1][5] = "wall";
			squareMaze[1][6] = "wall";
			squareMaze[1][7] = "wall";
			squareMaze[1][9] = "wall";
			squareMaze[1][10] = "wall";
			squareMaze[1][11] = "wall";
			squareMaze[1][12] = "wall";
			squareMaze[1][13] = "wall";
			squareMaze[1][14] = "wall";
			squareMaze[1][15] = "wall";
			squareMaze[1][18] = "wall";
			squareMaze[2][1] = "wall";
			squareMaze[2][9] = "wall";
			squareMaze[2][15] = "wall";
			squareMaze[2][18] = "wall";
			squareMaze[3][1] = "wall";
			squareMaze[3][3] = "wall";
			squareMaze[3][4] = "wall";
			squareMaze[3][5] = "wall";
			squareMaze[3][6] = "wall";
			squareMaze[3][9] = "wall";
			squareMaze[3][10] = "wall";
			squareMaze[3][14] = "wall";
			squareMaze[3][16] = "wall";
			squareMaze[4][1] = "wall";
			squareMaze[4][10] = "wall";
			squareMaze[4][11] = "wall";
			squareMaze[4][17] = "wall";
			squareMaze[5][1] = "wall";
			squareMaze[5][2] = "wall";
			squareMaze[5][3] = "wall";
			squareMaze[5][4] = "wall";
			squareMaze[5][11] = "wall";
			squareMaze[5][12] = "wall";
			squareMaze[5][17] = "wall";
			squareMaze[6][4] = "wall";
			squareMaze[6][7] = "wall";
			squareMaze[6][8] = "wall";
			squareMaze[6][9] = "wall";
			squareMaze[6][12] = "wall";
			squareMaze[6][13] = "wall";
			squareMaze[6][17] = "wall";
			squareMaze[7][1] = "wall";
			squareMaze[7][2] = "wall";
			squareMaze[7][4] = "wall";
			squareMaze[7][9] = "wall";
			squareMaze[7][10] = "wall";
			squareMaze[7][13] = "wall";
			squareMaze[7][14] = "wall";
			squareMaze[8][1] = "wall";
			squareMaze[8][2] = "wall";
			squareMaze[8][4] = "wall";
			squareMaze[8][10] = "wall";
			squareMaze[8][13] = "wall";
			squareMaze[8][14] = "wall";
			squareMaze[8][15] = "wall";
			squareMaze[8][16] = "wall";
			squareMaze[8][17] = "wall";
			squareMaze[9][4] = "wall";
			squareMaze[9][10] = "wall";
			squareMaze[9][11] = "wall";
			squareMaze[9][15] = "wall";
			squareMaze[9][16] = "wall";
			squareMaze[10][0] = "wall";
			squareMaze[10][1] = "wall";
			squareMaze[10][2] = "wall";
			squareMaze[10][3] = "wall";
			squareMaze[10][4] = "wall";
			squareMaze[10][5] = "wall";
			squareMaze[10][11] = "wall";
			squareMaze[10][13] = "wall";
			squareMaze[10][16] = "wall";
			squareMaze[11][4] = "wall";
			squareMaze[11][8] = "wall";
			squareMaze[11][9] = "wall";
			squareMaze[11][11] = "wall";
			squareMaze[11][13] = "wall";
			squareMaze[11][14] = "wall";
			squareMaze[11][16] = "wall";
			squareMaze[11][18] = "wall";
			squareMaze[12][1] = "wall";
			squareMaze[12][9] = "wall";
			squareMaze[12][10] = "wall";
			squareMaze[12][11] = "wall";
			squareMaze[12][13] = "wall";
			squareMaze[12][16] = "wall";
			squareMaze[12][18] = "wall";
			squareMaze[13][1] = "wall";
			squareMaze[13][2] = "wall";
			squareMaze[13][6] = "wall";
			squareMaze[13][7] = "wall";
			squareMaze[13][8] = "wall";
			squareMaze[13][12] = "wall";
			squareMaze[13][13] = "wall";
			squareMaze[13][14] = "wall";
			squareMaze[13][15] = "wall";
			squareMaze[13][16] = "wall";
			squareMaze[13][18] = "wall";
			squareMaze[14][2] = "wall";
			squareMaze[14][3] = "wall";
			squareMaze[14][4] = "wall";
			squareMaze[14][5] = "wall";
			squareMaze[14][6] = "wall";
		
			break; 


			case 13: 			// first pipe maze. by Taft
			$("#message").html("Plumbing can be a mouse's best friend.  \n-Squeaky");
			$("#level").html("Level: 13");
			$("#cheeseCount").html("Cheese Left: 4");
			$("#key1Count").html("Gold Keys: 0");
			mazeSizeX = 20;
			mazeSizeY = 7;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [2,19,0,19];
			cheeseLocationY = [0,0,6,6];
			cheeseLocation = ['2-0','19-0','0-6','19-6'];
			cheeseCount = 4;
			portalLocationBlueX = [15,14];
			portalLocationBlueY = [0,6];
			portalLocationBlue = ['15-0','14-6'];
			portalLocationRedX = [];
			portalLocationRedY = [];
			portalLocationRed = [];
			key1Location = ['5-6'];
			key1Count = 0;
			lock1Location = ['1-0'];
			pipeVertLocation = ['7-0','8-0','18-0','0-1','5-1','6-1','7-1','8-1','13-1','1-2','2-2','3-2','5-2','8-2','9-2','10-2','13-2','4-3','5-3','13-3','15-3','16-3','17-3','0-4','13-4','0-5','3-5','5-5'];
			pipeVertAlignment = [2,2,2,1,1,1,2,2,1,2,2,2,1,2,2,2,1,1,1,1,2,2,2,1,1,1,1,2];
			pipeCornerLocation = ['5-0','13-0','18-1','19-1','0-2','4-2','7-2','14-2','18-2','19-2','7-3','14-3','18-3','19-3','3-4','5-4','15-5','19-5','3-6'];
			pipeCornerAlignment = [3,4,3,1,2,4,3,2,2,4,2,3,3,1,3,1,2,4,1];
			cat1LocationX = [10,18,8,13,17];
			cat1LocationY = [0,4,6,6,6];
			cat1Location = ['10-0','18-4','8-6','13-6','17-6'];
			cat2LocationX = [3,7,11,14];
			cat2LocationY = [3,4,4,4];
			cat2Location = ['3-3','7-4','11-4','14-4'];
			cat3LocationX = [];
			cat3LocationY = [];
			cat3Location = [];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}

			squareMaze[3][9] = "wall";
			squareMaze[3][10] = "wall";
			squareMaze[4][10] = "wall";
			squareMaze[5][4] = "wall";
			squareMaze[5][8] = "wall";
			squareMaze[5][9] = "wall";
			squareMaze[5][10] = "wall";
			squareMaze[5][14] = "wall";
			squareMaze[6][4] = "wall";
			squareMaze[6][9] = "wall";
			squareMaze[6][10] = "wall";
			squareMaze[6][15] = "wall";

			break; 


		case 14: 				//really hard, tight pathway maze by Erik
			$("#message").html("Uhh... Good Luck. \n  -Squeaky");
			$("#level").html("Level: 14");
			$("#cheeseCount").html("Cheese Left: 1");
			$("#key1Count").html("Gold Keys: 0");
			mazeSizeX = 20;
			mazeSizeY = 15;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [18];
			cheeseLocationY = [14];
			cheeseLocation = ['18-14'];
			cheeseCount = 1;
			portalLocationBlueX = [10,17];
			portalLocationBlueY = [1,14];
			portalLocationBlue = ['10-1','17-14'];
			portalLocationRedX = [2,5];
			portalLocationRedY = [0,9];
			portalLocationRed = ['2-0','5-9'];
			key1Location = ['19-0','7-3'];
			key1Count = 0;
			lock1Location = ['8-0','9-0'];
			cat1LocationX = [7];
			cat1LocationY = [6];
			cat1Location = ['7-6'];
			cat2LocationX = [12,14];
			cat2LocationY = [1,8];
			cat2Location = ['12-1','14-8'];
			cat3LocationX = [3];
			cat3LocationY = [1];
			cat3Location = ['3-1'];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}

			squareMaze[0][1] = "wall";
			squareMaze[0][7] = "wall";
			squareMaze[0][11] = "wall";
			squareMaze[0][12] = "wall";
			squareMaze[0][13] = "wall";
			squareMaze[0][18] = "wall";
			squareMaze[1][1] = "wall";
			squareMaze[1][5] = "wall";
			squareMaze[1][9] = "wall";
			squareMaze[1][11] = "wall";
			squareMaze[1][15] = "wall";
			squareMaze[1][16] = "wall";
			squareMaze[1][18] = "wall";
			squareMaze[2][1] = "wall";
			squareMaze[2][2] = "wall";
			squareMaze[2][5] = "wall";
			squareMaze[2][6] = "wall";
			squareMaze[2][7] = "wall";
			squareMaze[2][8] = "wall";
			squareMaze[2][9] = "wall";
			squareMaze[2][10] = "wall";
			squareMaze[2][11] = "wall";
			squareMaze[2][18] = "wall";
			squareMaze[3][3] = "wall";
			squareMaze[3][4] = "wall";
			squareMaze[3][5] = "wall";
			squareMaze[3][6] = "wall";
			squareMaze[3][8] = "wall";
			squareMaze[3][10] = "wall";
			squareMaze[3][11] = "wall";
			squareMaze[4][1] = "wall";
			squareMaze[4][3] = "wall";
			squareMaze[4][6] = "wall";
			squareMaze[4][8] = "wall";
			squareMaze[4][11] = "wall";
			squareMaze[4][13] = "wall";
			squareMaze[4][14] = "wall";
			squareMaze[4][15] = "wall";
			squareMaze[4][16] = "wall";
			squareMaze[4][17] = "wall";
			squareMaze[4][18] = "wall";
			squareMaze[4][19] = "wall";
			squareMaze[5][1] = "wall";
			squareMaze[5][3] = "wall";
			squareMaze[5][5] = "wall";
			squareMaze[5][6] = "wall";
			squareMaze[5][8] = "wall";
			squareMaze[5][10] = "wall";
			squareMaze[5][11] = "wall";
			squareMaze[5][13] = "wall";
			squareMaze[5][16] = "wall";
			squareMaze[5][18] = "wall";
			squareMaze[6][1] = "wall";
			squareMaze[6][5] = "wall";
			squareMaze[6][6] = "wall";
			squareMaze[6][11] = "wall";
			squareMaze[6][13] = "wall";
			squareMaze[6][18] = "wall";
			squareMaze[7][1] = "wall";
			squareMaze[7][2] = "wall";
			squareMaze[7][3] = "wall";
			squareMaze[7][4] = "wall";
			squareMaze[7][5] = "wall";
			squareMaze[7][6] = "wall";
			squareMaze[7][9] = "wall";
			squareMaze[7][11] = "wall";
			squareMaze[7][13] = "wall";
			squareMaze[8][1] = "wall";
			squareMaze[8][3] = "wall";
			squareMaze[8][5] = "wall";
			squareMaze[8][6] = "wall";
			squareMaze[8][9] = "wall";
			squareMaze[8][11] = "wall";
			squareMaze[8][13] = "wall";
			squareMaze[8][18] = "wall";
			squareMaze[9][1] = "wall";
			squareMaze[9][3] = "wall";
			squareMaze[9][6] = "wall";
			squareMaze[9][7] = "wall";
			squareMaze[9][9] = "wall";
			squareMaze[9][11] = "wall";
			squareMaze[9][13] = "wall";
			squareMaze[9][15] = "wall";
			squareMaze[9][18] = "wall";
			squareMaze[10][1] = "wall";
			squareMaze[10][5] = "wall";
			squareMaze[10][6] = "wall";
			squareMaze[10][7] = "wall";
			squareMaze[10][9] = "wall";
			squareMaze[10][11] = "wall";
			squareMaze[10][15] = "wall";
			squareMaze[10][17] = "wall";
			squareMaze[10][18] = "wall";
			squareMaze[10][19] = "wall";
			squareMaze[11][1] = "wall";
			squareMaze[11][2] = "wall";
			squareMaze[11][3] = "wall";
			squareMaze[11][5] = "wall";
			squareMaze[11][6] = "wall";
			squareMaze[11][7] = "wall";
			squareMaze[11][8] = "wall";
			squareMaze[11][9] = "wall";
			squareMaze[11][11] = "wall";
			squareMaze[11][12] = "wall";
			squareMaze[11][13] = "wall";
			squareMaze[11][14] = "wall";
			squareMaze[11][15] = "wall";
			squareMaze[11][18] = "wall";
			squareMaze[12][1] = "wall";
			squareMaze[12][6] = "wall";
			squareMaze[12][11] = "wall";
			squareMaze[12][14] = "wall";
			squareMaze[12][18] = "wall";
			squareMaze[13][3] = "wall";
			squareMaze[13][4] = "wall";
			squareMaze[13][8] = "wall";
			squareMaze[13][9] = "wall";
			squareMaze[13][10] = "wall";
			squareMaze[13][11] = "wall";
			squareMaze[13][12] = "wall";
			squareMaze[13][16] = "wall";
			squareMaze[13][17] = "wall";
			squareMaze[13][18] = "wall";
			squareMaze[13][19] = "wall";
			squareMaze[14][1] = "wall";
			squareMaze[14][3] = "wall";
			squareMaze[14][6] = "wall";
			squareMaze[14][14] = "wall";
			squareMaze[14][16] = "wall";
			squareMaze[14][19] = "wall";

			break; 





			case 15:
			$("#message").html("Congradulations! You win! \nMore coming soon!  -");
			visibleOn();
			$("#level").html("Level: 15");
			$("#cheeseCount").html("Cheese Left: 71");
			mazeSizeX = 14;
			mazeSizeY = 10;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [4,5,8,11,3,6,8,10,12,2,3,7,9,13,3,4,5,8,11,12,3,7,9,0,2,4,6,7,10,11,12,13,0,2,6,8,9,13,0,1,2,3,5,7,8,11,12,0,2,3,5,6,7,8,9,10,12,13,0,1,2,3,4,5,6,8,9,10,11,12,13];
			cheeseLocationY = [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9];
			cheeseLocation = ['4-0','5-0','8-0','11-0','3-1','6-1','8-1','10-1','12-1','2-2','3-2','7-2','9-2','13-2','3-3','4-3','5-3','8-3','11-3','12-3','3-4','7-4','9-4','0-5','2-5','4-5','6-5','7-5','10-5','11-5','12-5','13-5','0-6','2-6','6-6','8-6','9-6','13-6','0-7','1-7','2-7','3-7','5-7','7-7','8-7','11-7','12-7','0-8','2-8','3-8','5-8','6-8','7-8','8-8','9-8','10-8','12-8','13-8','0-9','1-9','2-9','3-9','4-9','5-9','6-9','8-9','9-9','10-9','11-9','12-9','13-9'];
			cheeseCount = 71;
			portalLocationBlueX = [2,0];
			portalLocationBlueY = [0,3];
			portalLocationBlue = ['2-0','0-3'];
			portalLocationRedX = [];
			portalLocationRedY = [];
			portalLocationRed = [];
			key1Location = [];
			key1Count = 0;
			lock1Location = [];
			pipeVertLocation = ['0-2'];
			pipeVertAlignment = [1];
			pipeCornerLocation = [];
			pipeCornerAlignment = [];
			cat1LocationX = [];
			cat1LocationY = [];
			cat1Location = [];
			cat2LocationX = [];
			cat2LocationY = [];
			cat2Location = [];
			cat3LocationX = [];
			cat3LocationY = [];
			cat3Location = [];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}

			squareMaze[0][1] = "wall";
			squareMaze[1][1] = "wall";
			squareMaze[2][1] = "wall";
			squareMaze[3][1] = "wall";
			squareMaze[4][0] = "wall";
			squareMaze[4][1] = "wall";

			break; 







/////////////////////////////////////////////////////////////////
////////////////////// Testing //////////////////////////////////
/////////////////////////////////////////////////////////////////







		case 100:				//for testing
			$("#level").html("Level: 100");
			$("#cheeseCount").html("Cheese Left: 1");
			$("#key1Count").html("Gold Keys: 0");
			mazeSizeX = 14;
			mazeSizeY = 14;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [10];
			cheeseLocationY = [5];
			cheeseLocation = ['10-5'];
			cheeseCount = 1;
			portalLocationBlueX = [];
			portalLocationBlueY = [];
			portalLocationBlue = [];
			portalLocationRedX = [];
			portalLocationRedY = [];
			portalLocationRed = [];
			key1Location = ['0-1','0-4'];
			lock1Location = ['5-0','5-2'];
			pipeVertLocation = ['1-5'];
			pipeVertAlignment = [2];
			pipeCornerLocation = ['4-5', '6-5', '4-7', '6-7'];
			pipeCornerAlignment = [1,2,3,4];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}

			squareMaze[5][0] = "wall";

			break;



		case 101:
			$("#level").html("Level: 101");
			$("#cheeseCount").html("Cheese Left: 2");
			mazeSizeX = 14;
			mazeSizeY = 14;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [13,0];
			cheeseLocationY = [8,13];
			cheeseLocation = ['13-8','0-13'];
			cheeseCount = 2;
			portalLocationBlueX = [];
			portalLocationBlueY = [];
			portalLocationBlue = [];
			portalLocationRedX = [];
			portalLocationRedY = [];
			portalLocationRed = [];
			key1Location = [];
			key1Count = 0;
			lock1Location = [];
			pipeVertLocation = ['9-1','3-2','3-3','4-4','5-4','6-5','4-6','5-6','10-6','11-6','7-12','8-13'];
			pipeVertAlignment = [1,1,1,2,2,1,2,2,2,2,1,2];
			pipeCornerLocation = ['3-1','12-1','4-2','3-4','6-4','3-6','6-6','7-13'];
			pipeCornerAlignment = [3,1,1,2,4,3,1,2];
			cat1LocationX = [2];
			cat1LocationY = [7];
			cat1Location = ['2-7'];
			cat2LocationX = [7];
			cat2LocationY = [7];
			cat2Location = ['7-7'];
			cat3LocationX = [];
			cat3LocationY = [];
			cat3Location = [];
			squareMaze = new Array(mazeSizeY);

			for (var Y = 0; Y < mazeSizeY; Y++) {
				squareMaze[Y] = new Array(mazeSizeX);
				for (var X = 0; X < mazeSizeX; X++) {
					squareMaze[Y][X] = "path";
				}
			}

			squareMaze[0][6] = "wall";
			squareMaze[0][7] = "wall";
			squareMaze[0][8] = "wall";
			squareMaze[0][9] = "wall";
			squareMaze[0][10] = "wall";
			squareMaze[0][11] = "wall";
			squareMaze[0][12] = "wall";
			squareMaze[3][0] = "wall";
			squareMaze[3][1] = "wall";
			squareMaze[4][1] = "wall";
			squareMaze[4][2] = "wall";
			squareMaze[4][7] = "wall";
			squareMaze[4][9] = "wall";
			squareMaze[4][10] = "wall";
			squareMaze[5][2] = "wall";
			squareMaze[5][3] = "wall";
			squareMaze[5][4] = "wall";
			squareMaze[5][5] = "wall";
			squareMaze[5][10] = "wall";
			squareMaze[5][11] = "wall";
			squareMaze[5][12] = "wall";
			squareMaze[6][12] = "wall";
			squareMaze[7][0] = "wall";
			squareMaze[7][13] = "wall";
			squareMaze[8][0] = "wall";
			squareMaze[8][3] = "wall";
			squareMaze[8][4] = "wall";
			squareMaze[8][5] = "wall";
			squareMaze[9][0] = "wall";
			squareMaze[9][2] = "wall";
			squareMaze[9][3] = "wall";
			squareMaze[9][6] = "wall";
			squareMaze[9][7] = "wall";
			squareMaze[9][13] = "wall";
			squareMaze[10][0] = "wall";
			squareMaze[10][7] = "wall";
			squareMaze[10][8] = "wall";
			squareMaze[10][13] = "wall";
			squareMaze[11][0] = "wall";
			squareMaze[11][9] = "wall";
			squareMaze[11][13] = "wall";
			squareMaze[12][0] = "wall";
			squareMaze[12][13] = "wall";
			squareMaze[13][3] = "wall";
			squareMaze[13][4] = "wall";
			squareMaze[13][5] = "wall";
			squareMaze[13][6] = "wall";
			squareMaze[13][13] = "wall";

			break; 



		default: 
			$("#message").html("I said you win! Be patient, more will come.");
			visibleOn();
			loaded = false; 	//just for mazeMaker.js loadingMaze function

			//alert("Error, please contact Taft.\nError: default reached in mazes.js switch statement.");
	}
}