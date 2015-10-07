function setUpMazeElements(levelNumSelected){

	switch(levelNumSelected){
		case 1: 			// first maze made for testing, by Taft
			$("#message").html("I left you some cheese, good luck finding them. \n  -Squeaky");
			$("#level").html("Level: 1");
			$("#cheeseCount").html("Cheese Left: 4");
			mazeSizeX = 14;						//The Taft standard testing size.  X = width. Y = Height.
			mazeSizeY = 14;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [13,2,8,13];		// X and Y locations are linked by their index. 0 to 0, 1 to 1, etc. (see cheeseLocation)
			cheeseLocationY = [1,6,9,13];
			cheeseLocation = ['13-1','2-6','8-9','13-13'];
			cheeseCount = 4;
			wallLocation = ['1-0','5-0','6-0','7-0','11-0','12-0','13-0','1-1','3-1','7-1','9-1','3-2','4-2','5-2','9-2','11-2','12-2','13-2','0-3','1-3','3-3','7-3','9-3','11-3','12-3','3-4','4-4','5-4','7-4','1-5','3-5','7-5','8-5','9-5','11-5','12-5','1-6','3-6','5-6','7-6','1-7','2-7','3-7','5-7','7-7','9-7','10-7','12-7','13-7','5-8','7-8','8-8','9-8','0-9','2-9','4-9','5-9','9-9','11-9','12-9','13-9','5-10','6-10','8-10','9-10','1-11','2-11','3-11','8-11','11-11','12-11','3-12','5-12','7-12','8-12','10-12','11-12','12-12','0-13','1-13','5-13','7-13','12-13'];
			break;


		case 2: 			// mouse in the middle, a basic cheese maze by Taft
			$("#message").html("");
			$("#level").html("Level: 2");
			$("#cheeseCount").html("Cheese Left: 6");
			mazeSizeX = 14;
			mazeSizeY = 14;
			mouseLocationX = 5;
			mouseLocationY = 10;
			mouseLocation = '5-10';
			cheeseLocationX = [1,13,1,10,2,13];
			cheeseLocationY = [0,2,5,7,11,12];
			cheeseLocation = ['1-0','13-2','1-5','10-7','2-11','13-12'];
			cheeseCount = 6;
			wallLocation = ['0-0','0-1','1-1','2-1','3-1','5-1','6-1','7-1','8-1','9-1','10-1','11-1','13-1','3-2','5-2','7-2','12-2','1-3','10-3','1-4','3-4','5-4','6-4','8-4','9-4','10-4','11-4','13-4','2-5','0-6','1-6','5-6','6-6','8-6','9-6','11-6','12-6','13-6','3-7','5-7','6-7','9-7','13-7','1-8','2-8','3-8','5-8','7-8','9-8','10-8','11-8','13-8','1-10','2-10','3-10','4-10','6-10','7-10','9-10','10-10','11-10','1-11','5-11','9-11','12-11','13-11','1-12','2-12','3-12','5-12','7-12','8-12','9-12','11-12','12-12'];
			break;


		case 3: 			// first maze maker test by Kevin
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
			wallLocation = ['1-0','2-0','3-0','7-0','8-0','9-0','5-1','11-1','12-1','13-1','0-2','2-2','3-2','4-2','5-2','7-2','9-2','13-2','0-3','2-3','5-3','7-3','9-3','11-3','0-4','3-4','5-4','7-4','9-4','11-4','12-4','0-5','1-5','3-5','11-5','12-5','3-6','5-6','6-6','7-6','9-6','11-6','12-6','1-7','2-7','3-7','5-7','6-7','11-7','12-7','3-8','8-8','1-9','5-9','6-9','8-9','9-9','11-9','12-9','1-10','2-10','3-10','8-10','9-10','11-10','12-10','1-11','4-11','6-11','0-12','2-12','6-12','9-12','11-12','12-12','0-13','4-13','5-13','6-13','8-13','12-13','13-13'];
			break;


		case 4: 			// First test of maze maker by Taft
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
			wallLocation = ['1-1','2-1','3-1','4-1','5-1','6-1','7-1','8-1','9-1','10-1','11-1','12-1','1-2','11-2','1-3','3-3','5-3','6-3','7-3','8-3','9-3','10-3','11-3','13-3','1-4','3-4','5-4','9-4','11-4','1-5','3-5','5-5','7-5','11-5','12-5','1-6','3-6','6-6','9-6','11-6','12-6','1-7','3-7','4-7','5-7','8-7','1-8','3-8','10-8','11-8','12-8','13-8','1-9','3-9','5-9','6-9','7-9','8-9','10-9','11-9','1-10','3-10','7-10','10-10','11-10','12-10','1-11','6-11','8-11','11-11','1-12','3-12','5-12','9-12','11-12','13-12','3-13','4-13'];
			break;


		case 5: 			// a portal maze, by Emily
			$("#message").html("");
			$("#level").html("Level: 5");
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
			wallLocation = ['3-0','4-0','10-0','1-1','4-1','6-1','8-1','10-1','11-1','12-1','13-1','1-2','2-2','3-2','4-2','6-2','8-2','12-2','3-3','7-3','9-3','10-3','12-3','0-4','1-4','5-4','7-4','10-4','12-4','1-5','2-5','3-5','4-5','5-5','7-5','9-5','10-5','1-6','5-6','6-6','7-6','10-6','12-6','0-7','1-7','10-7','11-7','12-7','3-8','4-8','5-8','7-8','8-8','11-8','1-9','5-9','9-9','1-10','2-10','3-10','5-10','6-10','7-10','9-10','11-10','12-10','3-11','9-11','11-11','1-12','2-12','3-12','5-12','6-12','7-12','9-12','10-12','11-12','13-12','0-13','1-13','5-13','9-13','13-13'];
			break;

		
		case 6: 			// First intro to portals. Diagonal walls by Taft
			$("#message").html("Mouse portals are useful to get hard to reach cheeses. \n  -Squeaky");
			$("#level").html("Level: 6");
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
			portalLocationRedX = [4,13];
			portalLocationRedY = [0,4];
			portalLocationRed = ['4-0','13-4'];
			wallLocation = ['1-0','5-0','8-0','13-0','1-1','4-1','9-1','2-2','6-2','7-2','11-2','0-3','3-3','5-3','10-3','13-3','1-4','4-4','9-4','12-4','2-5','5-5','6-5','7-5','8-5','11-5','0-6','3-6','10-6','13-6','0-7','3-7','6-7','7-7','10-7','13-7','2-8','5-8','8-8','11-8','1-9','4-9','9-9','12-9','0-10','3-10','8-10','10-10','13-10','2-11','6-11','7-11','11-11','1-12','4-12','9-12','0-13','5-13','8-13','13-13'];
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
			wallLocation = ['1-0','2-0','6-0','7-0','8-0','10-0','1-1','4-1','8-1','10-1','2-2','3-2','5-2','7-2','10-2','12-2','1-3','9-3','11-3','13-3','1-4','3-4','5-4','6-4','8-4','11-4','3-5','8-5','9-5','0-6','2-6','4-6','5-6','7-6','12-6','13-6','1-7','6-7','10-7','3-8','10-8','12-8','13-8','1-9','3-9','4-9','5-9','6-9','7-9','8-9','9-9','10-9','1-10','9-10','0-11','2-11','3-11','4-11','5-11','8-11','4-12','7-12','9-12','10-12','12-12','0-13','2-13','6-13','13-13'];
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
			cat1LocationX = [21,0];
			cat1LocationY = [6,7];
			cat1Location = ['21-6','0-7'];
			wallLocation = ['7-0','19-0','20-0','22-0','23-0','0-1','4-1','6-1','7-1','8-1','9-1','10-1','11-1','12-1','13-1','14-1','15-1','16-1','17-1','20-1','22-1','1-2','2-2','4-3','5-3','6-3','7-3','8-3','9-3','10-3','11-3','12-3','13-3','14-3','15-3','16-3','17-3','18-3','21-3','22-3','23-3','1-4','2-4','4-4','8-4','11-4','15-4','18-4','20-4','1-5','8-5','13-5','14-5','15-5','18-5','20-5','22-5','1-6','3-6','4-6','5-6','6-6','8-6','10-6','6-7','9-7','12-7','13-7','20-7','21-7','22-7'];
			break;

 
		case 9: 			//first pipe maze, by Taft
			$("#message").html("These green pipes are great. You can hide from cats in them.   \n-Squeaky");
			$("#level").html("Level: 9");
			$("#cheeseCount").html("Cheese Left: 7");
			mazeSizeX = 16;
			mazeSizeY = 13;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [15,1,15,3,6,5,4];
			cheeseLocationY = [0,4,4,6,7,10,12];
			cheeseLocation = ['15-0','1-4','15-4','3-6','6-7','5-10','4-12'];
			cheeseCount = 7;
			pipeVertLocation = ['0-3','0-4','5-4','0-5','13-5','7-6','8-6','9-6','3-7','4-7','5-7','7-7','8-7','9-7','10-7','7-8','8-8','15-8','2-10','3-10','4-10','12-10','0-11','1-11','11-11','10-12','11-12','15-12'];
			pipeVertAlignment = [1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,1,1,2,2,2,2];
			pipeCornerLocation = ['4-0','8-0','4-1','12-3','11-4','6-6','10-6','11-7','6-8','9-8','10-8','11-8','10-9','11-9','0-10','1-10','10-10','11-10','10-11'];
			pipeCornerAlignment = [3,4,1,1,1,3,1,4,2,4,3,1,2,4,2,4,3,1,2];
			cat1LocationX = [9,2,15,6,15,0,8,3,12];
			cat1LocationY = [1,2,2,4,5,7,11,12,12];
			cat1Location = ['9-1','2-2','15-2','6-4','15-5','0-7','8-11','3-12','12-12'];
			wallLocation = ['1-0','1-1','1-2','4-2','4-3','13-3','14-3','15-3','4-4','12-4','13-4','1-5','2-5','3-5','4-5','5-5','11-5','12-5','4-6','5-6','11-6','3-8','4-8','5-8','2-9','3-9','4-9','5-9','5-11','5-12'];
			break;


		case 10: 			//first level with scary cats, by Taft
			$("#message").html("");
			$("#level").html("Level: 10");
			$("#cheeseCount").html("Cheese Left: 5");
			$("#key1Count").html("Gold Keys: 0");
			mazeSizeX = 20;
			mazeSizeY = 10;
			mouseLocationX = 10;
			mouseLocationY = 9;
			mouseLocation = '10-9';
			cheeseLocationX = [0,14,9,0,0];
			cheeseLocationY = [0,2,4,6,9];
			cheeseLocation = ['0-0','14-2','9-4','0-6','0-9'];
			cheeseCount = 5;
			portalLocationRedX = [18,0];
			portalLocationRedY = [0,1];
			portalLocationRed = ['18-0','0-1'];
			key1Location = ['2-1'];
			key1Count = 0;
			lock1Location = ['19-2'];
			pipeVertLocation = ['6-2','18-3','6-6','14-6','14-7','0-8','14-8'];
			pipeVertAlignment = [1,2,1,1,1,1,1];
			cat1LocationX = [9];
			cat1LocationY = [0];
			cat1Location = ['9-0'];
			cat2LocationX = [4,17,1];
			cat2LocationY = [3,3,9];
			cat2Location = ['4-3','17-3','1-9'];
			wallLocation = ['1-0','5-0','17-0','1-1','3-1','13-1','15-1','17-1','0-2','1-2','2-2','3-2','4-2','5-2','7-2','8-2','9-2','10-2','11-2','13-2','15-2','17-2','18-2','13-3','14-3','15-3','1-4','2-4','5-4','6-4','7-4','10-4','11-4','18-4','18-5','1-6','2-6','3-6','4-6','5-6','7-6','8-6','9-6','10-6','11-6','13-6','15-6','18-6','13-7','15-7','18-7','1-8','2-8','3-8','4-8','5-8','6-8','7-8','8-8','9-8','10-8','11-8','13-8','15-8','18-8'];
			break;


		case 11: 			// tunnel-like maze with lots of loops and scary cats, by Taft
			$("#message").html("Did you know that I'm afraid of the dark?  \n-Squeaky");
			$("#level").html("Level: 11");
			$("#cheeseCount").html("Cheese Left: 5");
			mazeSizeX = 18;
			mazeSizeY = 13;
			mouseLocationX = 17;
			mouseLocationY = 0;
			mouseLocation = '17-0';
			cheeseLocationX = [15,4,17,10,0];
			cheeseLocationY = [0,1,3,7,11];
			cheeseLocation = ['15-0','4-1','17-3','10-7','0-11'];
			cheeseCount = 5;
			pipeVertLocation = ['1-4','17-6','9-8'];
			pipeVertAlignment = [1,1,2];
			pipeCornerLocation = ['13-4'];
			pipeCornerAlignment = [4];
			cat1LocationX = [10,12];
			cat1LocationY = [0,2];
			cat1Location = ['10-0','12-2'];
			cat2LocationX = [0,17,10,0];
			cat2LocationY = [0,7,9,12];
			cat2Location = ['0-0','17-7','10-9','0-12'];
			wallLocation = ['5-0','6-0','7-0','16-0','1-1','3-1','9-1','11-1','12-1','13-1','14-1','15-1','3-2','4-2','5-2','6-2','7-2','8-2','9-2','11-2','17-2','11-3','13-3','14-3','16-3','3-4','4-4','5-4','6-4','7-4','8-4','9-4','10-4','11-4','14-4','16-4','3-5','16-5','3-6','5-6','7-6','8-6','9-6','10-6','11-6','13-6','14-6','15-6','16-6','1-7','3-7','5-7','7-7','11-7','13-7','3-8','11-8','13-8','15-8','16-8','0-9','2-9','3-9','4-9','5-9','6-9','7-9','11-9','13-9','15-9','16-9','8-10','9-10','10-10','11-10','13-10','1-11','2-11','3-11','4-11','5-11','6-11','13-11','14-11','15-11','16-11','8-12','9-12','10-12','11-12'];
			break;

		
		case 12: 			//lots of cats caged up by locks, that need to be let loose for you to get out too. by Taft
			$("#message").html("I finally caged up all the cats, please guard them for me.\n  -Squeaky");
			$("#level").html("Level: 12");
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
			key1Location = ['4-2','8-8','7-9','8-9'];
			key1Count = 0;
			lock1Location = ['4-5','4-6','4-7','12-8'];
			cat1LocationX = [1,0,2];
			cat1LocationY = [6,7,8];
			cat1Location = ['1-6','0-7','2-8'];
			cat2LocationX = [0,2,0];
			cat2LocationY = [5,5,6];
			cat2Location = ['0-5','2-5','0-6'];
			wallLocation = ['9-0','1-1','3-1','4-1','5-1','6-1','9-1','10-1','11-1','12-1','13-1','14-1','16-1','1-2','5-2','6-2','13-2','16-2','2-3','12-3','13-3','14-3','15-3','16-3','0-4','1-4','2-4','3-4','4-4','5-4','6-4','9-4','10-4','13-5','14-5','16-5','5-7','7-7','8-7','12-7','13-7','14-7','15-7','3-8','5-8','7-8','9-8','15-8','16-8','3-9','5-9','6-9','9-9','12-9','13-9','16-9','3-10','5-10','7-10','9-10','13-10','14-10','15-10','0-11','1-11','2-11','3-11','9-11'];
			break;

		
		case 13: 			//this maze is made of a checker board design with cat seekers chasing you, by Taft
			$("#message").html("Watch out for these cats. They'll smell you out and chase you. \n  -Squeaky");
			$("#level").html("Level: 13");
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
			cat3LocationX = [13,0,13];
			cat3LocationY = [0,13,13];
			cat3Location = ['13-0','0-13','13-13'];
			wallLocation = ['1-1','5-1','9-1','13-1','3-2','7-2','11-2','1-3','5-3','9-3','13-3','3-4','7-4','11-4','1-5','5-5','9-5','13-5','3-6','7-6','11-6','1-7','5-7','9-7','13-7','3-8','7-8','11-8','1-9','5-9','9-9','13-9','3-10','7-10','11-10','1-11','5-11','9-11','13-11','3-12','7-12','11-12'];
			break;		
		 
		 
		case 14: 			// back and forth with portals, by Taft
			$("#message").html("Use the portals to your advantage.  \n -Squeaky");
			$("#level").html("Level: 14");
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
			cat1LocationX = [6];
			cat1LocationY = [1];
			cat1Location = ['6-1'];
			cat3LocationX = [5,11,4,11];
			cat3LocationY = [5,5,11,11];
			cat3Location = ['5-5','11-5','4-11','11-11'];
			wallLocation = ['2-0','1-1','13-1','14-1','2-2','6-2','7-2','8-2','9-2','13-2','2-3','3-3','4-3','5-3','6-3','7-3','8-3','9-3','10-3','11-3','12-3','13-3','2-6','3-6','4-6','5-6','6-6','7-6','8-6','9-6','10-6','11-6','12-6','13-6','5-7','6-7','7-7','8-7','9-7','10-7','13-7','0-8','1-8','2-8','14-8','6-9','7-9','8-9','9-9','14-9','15-9','15-10','4-12','5-12','6-12','7-12','8-12','9-12','10-12','11-12'];
			break;		 


		case 15: 			// difficult maze with tight paths and several cats. by Taft
			$("#message").html("Several cats hold this maze tightly. Use your keys wisely. \n  -Squeaky");
			$("#level").html("Level: 15");
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
			key1Location = ['7-14','8-14','17-14'];
			key1Count = 0;
			lock1Location = ['12-9','12-10','16-14'];
			cat1LocationX = [19,5];
			cat1LocationY = [1,13];
			cat1Location = ['19-1','5-13'];
			cat2LocationX = [0,9];
			cat2LocationY = [0,14];
			cat2Location = ['0-0','9-14'];
			wallLocation = ['3-0','6-0','18-0','19-0','1-1','3-1','5-1','6-1','7-1','9-1','10-1','11-1','12-1','13-1','14-1','15-1','18-1','1-2','9-2','15-2','18-2','1-3','3-3','4-3','5-3','6-3','9-3','10-3','14-3','16-3','1-4','10-4','11-4','17-4','1-5','2-5','3-5','4-5','11-5','12-5','17-5','4-6','7-6','8-6','9-6','12-6','13-6','17-6','1-7','2-7','4-7','9-7','10-7','13-7','14-7','1-8','2-8','4-8','10-8','13-8','14-8','15-8','16-8','17-8','4-9','10-9','11-9','15-9','16-9','0-10','1-10','2-10','3-10','4-10','5-10','11-10','13-10','16-10','4-11','8-11','9-11','11-11','13-11','14-11','16-11','18-11','1-12','9-12','10-12','11-12','13-12','16-12','18-12','1-13','2-13','6-13','7-13','8-13','12-13','13-13','14-13','15-13','16-13','18-13','2-14','3-14','4-14','5-14','6-14'];
			break;
		

		case 16: 			// crazy pipe maze. by Taft
			$("#message").html("Plumbing can be a mouse's best friend.  \n-Squeaky");
			$("#level").html("Level: 16");
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
			key1Location = ['5-6'];
			key1Count = 0;
			lock1Location = ['1-0'];
			pipeVertLocation = ['7-0','8-0','18-0','0-1','5-1','6-1','7-1','8-1','13-1','1-2','2-2','3-2','5-2','8-2','9-2','10-2','13-2','4-3','5-3','13-3','15-3','16-3','17-3','0-4','13-4','0-5','3-5','5-5'];
			pipeVertAlignment = [2,2,2,1,1,1,2,2,1,2,2,2,1,2,2,2,1,1,1,1,2,2,2,1,1,1,1,2];
			pipeCornerLocation = ['5-0','13-0','18-1','19-1','0-2','4-2','7-2','14-2','18-2','19-2','7-3','14-3','18-3','19-3','3-4','5-4','15-5','19-5','3-6'];
			pipeCornerAlignment = [3,4,3,1,2,4,3,2,2,4,2,3,3,1,3,1,2,4,1];
			cat1LocationX = [11,8,17];
			cat1LocationY = [2,6,6];
			cat1Location = ['11-2','8-6','17-6'];
			cat2LocationX = [3,7,11,14];
			cat2LocationY = [3,4,4,4];
			cat2Location = ['3-3','7-4','11-4','14-4'];
			wallLocation = ['9-3','10-3','10-4','4-5','8-5','9-5','10-5','14-5','4-6','9-6','10-6','15-6'];
			break;


		case 17: 			//really hard, tight pathway maze by Erik
			$("#message").html("Uhh... Good Luck. \n  -Squeaky");
			$("#level").html("Level: 17");
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
			wallLocation = ['1-0','7-0','11-0','12-0','13-0','18-0','1-1','5-1','9-1','11-1','15-1','16-1','18-1','1-2','2-2','5-2','6-2','7-2','8-2','9-2','10-2','11-2','18-2','3-3','4-3','5-3','6-3','8-3','10-3','11-3','1-4','3-4','6-4','8-4','11-4','13-4','14-4','15-4','16-4','17-4','18-4','19-4','1-5','3-5','5-5','6-5','8-5','10-5','11-5','13-5','16-5','18-5','1-6','5-6','6-6','11-6','13-6','18-6','1-7','2-7','3-7','4-7','5-7','6-7','9-7','11-7','13-7','1-8','3-8','5-8','6-8','9-8','11-8','13-8','18-8','1-9','3-9','6-9','7-9','9-9','11-9','13-9','15-9','18-9','1-10','5-10','6-10','7-10','9-10','11-10','15-10','17-10','18-10','19-10','1-11','2-11','3-11','5-11','6-11','7-11','8-11','9-11','11-11','12-11','13-11','14-11','15-11','18-11','1-12','6-12','11-12','14-12','18-12','3-13','4-13','8-13','9-13','10-13','11-13','12-13','16-13','17-13','18-13','19-13','1-14','3-14','6-14','14-14','16-14','19-14'];
			break;


		case 18:
			$("#message").html("");
			$("#level").html("Level: 18");
			$("#cheeseCount").html("Cheese Left: 4");
			$("#key1Count").html("Gold Keys: 0");
			mazeSizeX = 25;
			mazeSizeY = 15;
			mouseLocationX = 12;
			mouseLocationY = 7;
			mouseLocation = '12-7';
			cheeseLocationX = [10,14,10,14];
			cheeseLocationY = [5,5,9,9];
			cheeseLocation = ['10-5','14-5','10-9','14-9'];
			cheeseCount = 4;
			portalLocationBlueX = [4,14];
			portalLocationBlueY = [0,2];
			portalLocationBlue = ['4-0','14-2'];
			portalLocationRedX = [23,10];
			portalLocationRedY = [2,11];
			portalLocationRed = ['23-2','10-11'];
			key1Location = ['1-5'];
			key1Count = 0;
			lock1Location = ['18-9'];
			pipeVertLocation = ['17-6','4-9','5-9','7-11','8-11','0-12','3-12','9-12','11-13','13-13','1-14','4-14','5-14','8-14'];
			pipeVertAlignment = [1,2,2,2,2,1,2,2,2,2,2,2,2,2];
			pipeCornerLocation = ['0-9','9-9','9-10','10-10','6-11','10-12','9-13','2-14','3-14','9-14'];
			pipeCornerAlignment = [3,4,2,1,3,4,4,1,2,1];
			cat1LocationX = [15,4];
			cat1LocationY = [4,10];
			cat1Location = ['15-4','4-10'];
			cat2LocationX = [12,6,15,2,7,12];
			cat2LocationY = [0,2,9,10,13,14];
			cat2Location = ['12-0','6-2','15-9','2-10','7-13','12-14'];
			cat3LocationX = [0,24,2];
			cat3LocationY = [7,7,12];
			cat3Location = ['0-7','24-7','2-12'];
			wallLocation = ['11-0','1-1','2-1','6-1','7-1','8-1','9-1','11-1','13-1','14-1','15-1','16-1','17-1','18-1','19-1','20-1','21-1','22-1','23-1','3-2','5-2','11-2','13-2','15-2','22-2','0-3','1-3','3-3','5-3','7-3','9-3','11-3','13-3','17-3','19-3','20-3','22-3','0-4','5-4','7-4','9-4','10-4','11-4','13-4','14-4','16-4','17-4','20-4','24-4','2-5','3-5','7-5','11-5','13-5','20-5','22-5','1-6','2-6','3-6','4-6','5-6','6-6','7-6','8-6','9-6','10-6','11-6','13-6','14-6','15-6','16-6','18-6','19-6','20-6','21-6','22-6','23-6','0-8','1-8','2-8','3-8','4-8','5-8','6-8','7-8','8-8','9-8','10-8','11-8','13-8','14-8','15-8','16-8','17-8','18-8','19-8','20-8','21-8','22-8','23-8','11-9','13-9','21-9','23-9','11-10','13-10','14-10','15-10','16-10','17-10','18-10','19-10','21-10','11-11','13-11','21-11','23-11','11-12','13-12','15-12','17-12','18-12','19-12','21-12','23-12','15-13','17-13','18-13','19-13','23-13','11-14','13-14','15-14','23-14'];
			break;
						

		case 19:
			$("#message").html("");
			$("#level").html("Level: 19");
			$("#cheeseCount").html("Cheese Left: 6");
			$("#key1Count").html("Gold Keys: 0");
			mazeSizeX = 25;
			mazeSizeY = 15;
			mouseLocationX = 0;
			mouseLocationY = 0;
			mouseLocation = '0-0';
			cheeseLocationX = [5,19,18,19,22,0];
			cheeseLocationY = [0,2,9,10,10,12];
			cheeseLocation = ['5-0','19-2','18-9','19-10','22-10','0-12'];
			cheeseCount = 6;
			portalLocationBlueX = [3,24];
			portalLocationBlueY = [0,6];
			portalLocationBlue = ['3-0','24-6'];
			portalLocationRedX = [0,8];
			portalLocationRedY = [3,7];
			portalLocationRed = ['0-3','8-7'];
			key1Location = ['19-8','24-14'];
			key1Count = 0;
			lock1Location = ['12-2','7-12'];
			pipeVertLocation = ['11-9'];
			pipeVertAlignment = [2];
			pipeCornerLocation = ['13-10','14-10'];
			pipeCornerAlignment = [2,4];
			cat1LocationX = [7,15,0];
			cat1LocationY = [0,0,8];
			cat1Location = ['7-0','15-0','0-8'];
			cat2LocationX = [21,0,10];
			cat2LocationY = [4,13,14];
			cat2Location = ['21-4','0-13','10-14'];
			cat3LocationX = [14];
			cat3LocationY = [12];
			cat3Location = ['14-12'];
			wallLocation = ['4-0','6-0','16-0','17-0','23-0','24-0','3-1','6-1','12-1','13-1','14-1','15-1','19-1','21-1','22-1','23-1','24-1','2-2','5-2','6-2','8-2','9-2','17-2','18-2','21-2','1-3','5-3','6-3','12-3','15-3','16-3','17-3','18-3','19-3','20-3','21-3','23-3','0-4','3-4','4-4','8-4','9-4','10-4','11-4','12-4','13-4','14-4','19-4','20-4','24-4','3-5','6-5','7-5','16-5','17-5','19-5','22-5','5-6','9-6','10-6','11-6','12-6','13-6','14-6','15-6','16-6','19-6','21-6','22-6','23-6','1-7','3-7','4-7','5-7','7-7','9-7','16-7','18-7','1-8','5-8','8-8','9-8','11-8','12-8','13-8','14-8','16-8','18-8','20-8','21-8','22-8','23-8','0-9','2-9','5-9','6-9','14-9','16-9','19-9','20-9','21-9','22-9','23-9','2-10','3-10','8-10','9-10','11-10','12-10','17-10','18-10','21-10','23-10','4-11','5-11','6-11','8-11','13-11','14-11','18-11','19-11','21-11','1-12','2-12','8-12','11-12','16-12','21-12','22-12','23-12','24-12','1-13','4-13','5-13','6-13','8-13','10-13','11-13','12-13','15-13','18-13','19-13','24-13','8-14','18-14','19-14','22-14'];
			break;
			

		case 20: 			//maze of cheeses for victory, by Taft
			visibleOn();
			$("#message").html("Congradulations! You win! \nMore coming soon!");
			$("#level").html("Level: 20");
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
			pipeVertLocation = ['0-2'];
			pipeVertAlignment = [1];
			wallLocation = ['1-0','1-1','1-2','1-3','0-4','1-4'];
			break;
		







/////////////////////////////////////////////////////////////////
////////////////////// Testing Mazes ////////////////////////////
/////////////////////////////////////////////////////////////////



		default: 
			$("#message").html("I said you win! Be patient, more will come.");
			visibleOn();
			loaded = false; 	//just for mazeMaker.js loadingMaze function
	}
}