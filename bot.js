// JavaScript Document

var cwidth = 650;
var cheight = 450;
var ballrad = 10;
var boxx = 20;
var boxy = 80;
var boxwidth = 600;
var boxheight = 300;
var boxboundx = boxwidth+boxx-ballrad;
var boxboundy = boxheight+boxy-ballrad;
var inboxboundx = boxx+ballrad;
var inboxboundy = boxy+ballrad;
var ballx = boxwidth/2+boxx;
var bally = boxheight/2+boxy;
var ctx;
var ballvx = 2;
var ballvy = 2;
var maxv = 4;
var up = false;
var down = false;
var up2 = false;
var down2 = false;
var intervalid;
var moveinterval;
var speedinterval;
var player1=0;
var player2=0;
var countdown = 0;
var snd = new Audio("file.wav"); 
var snd2 = new Audio("file2.wav");


//////////////////////////////////////
//Moving Ball Functions
//////////////////////////////////////
function init() {
	ctx = 	document.getElementById('canvas').getContext('2d');
	ctx.lineWidth = ballrad;
	moveball();
	getready();
	setTimeout(function() {
	startCountdown();},1000);// buffers automatically when created
	setTimeout(function(){
	speedinterval = setInterval(speedup,1000);
	moveinterval = setInterval(doublemovement,16.5);
	intervalid = setInterval(moveball,16.5);clearInterval(startInterval);snd2.play();start();},5000);
	
	
	
}

function speedup()
{
	if(ballvy<0)
		ballvy-=.05;
	else
	ballvy +=.05;
	if(ballvx<0)
		ballvx-=.05;
	else
	ballvx +=.05;
}

function calcspeed(right)
{
	if(right==false)			//////check for hit on the left paddle
	{
		if(bally<=y+ll/2+5&&bally>=y+ll/2-5)
		{
			ballvy = 0;
			if(ballvx<maxv)
			ballvx +=1.1;
		}
		else if(ballvy<0&&up)
		{
			ballvy+=.25;
			ballvx-=.1;
		}
		else if(ballvy<0&&down)
		{
			ballvy-=.25;
			ballvx+=.1;
		}
		else if(ballvy>0&&down)
		{
			ballvy-=.25;
			ballvx+=.1;
		}
		else if(ballvy>0&&up)
		{
			ballvy+=.25;
			ballvx-=.1;
		}
	}
	else if(right==true)				///check for hit on right paddle
	{
		if(bally<=yy+ll/2+5&&bally>=yy+ll/2-5)
		{
			ballvy = 0;
			if(ballvx<maxv)
			ballvx +=1.1;
		}
		if(ballvy<0&&up2)
		{
			ballvy+=.25;
			ballvx-=.1;
		}
		else if(ballvy<0&&down2)
		{
			ballvy-=.25;
			ballvx+=.1;
		}
		else if(ballvy>0&&down2)
		{
			ballvy-=.25;
			ballvx+=.1;
		}
		else if(ballvy>0&&up2)
		{
			ballvy+=.25;
			ballvx-=.1;
		}
	
	}
}
function doublemovement()
{
	if(up)
	{	
		if(y-boxy>0)
		y-=dy;
	}
	if(up2)
	{
		if(yy-boxy>0)
		yy-=dyy;
	}
	if(down)
	{
		if(y+l/2<boxheight)
		y+=dy;
	}
	if(down2)
	{
		if(yy+l/2<boxheight)
		yy+=dyy;
	}
	draw();
	draw2();
}
//////////////////////////////////////////////////
////calculates and draws the balls movements
//////////////////////////////////////////////////
function moveball() {
	ctx.lineWidth = ballrad;
	ctx.clearRect(boxx,boxy,boxwidth,boxheight);;
	ctx.beginPath();
	ctx.strokeRect(boxx,boxy,boxwidth,boxheight);
	ctx.fillStyle = "rgb(0,0,255)";
	ctx.fill();						///draw playing field
	ctx.lineWidth = 4;
    ctx.moveTo(boxx+boxwidth/2,boxy);		
    ctx.lineTo(boxx+boxwidth/2,boxy+boxheight);						///draw middle line
	ctx.strokeRect(boxx,boxy-50+boxheight/2,15,100);				///draw left goal box
	ctx.strokeRect(boxx+boxwidth-15,boxy-50+boxheight/2,15,100);													///draw right goal box
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = "rgb(200,0,50)";
	ctx.arc(ballx,bally,ballrad,0,Math.PI*2,true);				///draw ball
	ctx.fill();
	//paddleBot(boxy);
	moveandcheck();
	draw();
	draw2();
	
}

/////////////////////////////////////
//////checks balls motion with walls and collisions with the paddles
/////////////////////////////////////
function moveandcheck() {
	var nballx = ballx+ballvx;
	var nbally = bally +ballvy;
	
	doublemovement();
	if((nballx>=xx-ballrad&&nballx<=xx+5)&&(bally<yy+l+ballrad&&bally>yy-ballrad))			//////check for hit on the right paddle
	{
		nballx = xx-ballrad;
		ballx = nballx;
		bally = nbally;
		calcspeed(true);
		ballvx = -ballvx;
		
	}
	else if((nballx<=x+r+ballrad&&nballx>=x+r-5)&&(bally<y+l+ballrad&&bally>y-ballrad))					///check for hit on left paddle
	{
		nballx = x+r+ballrad;
		ballx = nballx;
		bally = nbally;
		calcspeed(false);
		ballvx = -ballvx;
	
	}
	else if(nballx>boxboundx) {													//point for player 1  = right side
		
		$('#winner').html('<h1>Player 1 Wins!!</h1>');
		$('#player1').html(++player1);
			
		resetnewgame();
	}
	else if(nballx<inboxboundx) {														//point for player 2 = left
			$('#winner').html('<h1>Player 2 Wins!!</h1>');
			$('#player2').html(++player2);
		resetnewgame();
		
	}
	else if(nbally>boxboundy) {
		nbally = boxboundy;
		ballvy = -ballvy;	
		ballx = nballx;
	bally = nbally;
	}
	else if(nbally<inboxboundy) {
		nbally = inboxboundy;
		ballvy = -ballvy;	
		ballx = nballx;
	bally = nbally;
	}
	else
	{
		ballx = nballx;
	bally = nbally;
	}
	
}

function getready()
{
	$('#winner').html('<h2 style ="text-align:center;">Get Ready</h2>');
}
function start()
{
	$('#winner').html('<h1 style ="text-align:center;">Go!</h1>');
}

function startCountdown()
{
	startInterval = setInterval(Countdown,1000);
}
function Countdown()
{
	snd.play();
	switch(++countdown)
	{
		case 1:
		$('#winner').html('<h3 style ="text-align:center;">3</h3>');
		break;
		case 2:
		$('#winner').html('<h2 style ="text-align:center;">2</h2>');
		break;
		case 3:
		$('#winner').html('<h1 style ="text-align:center;">1</h1>');
		break;
		
	}
}
function resetnewgame()
{
	clearInterval(moveinterval);
	clearInterval(intervalid);
	clearInterval(speedinterval);
	ballx = boxwidth/2+boxx;
	bally = boxheight/2+boxy;
	ballvx = 2;
	ballvy = 2;
	countdown = 0;
	moveball();
	getready();
	up = false;
	down = false;
	up2 = false;
	down2 = false;
	setTimeout(function() {
	startCountdown();},1000);
	setTimeout(function(){
	speedinterval = setInterval(speedup,1000);
	moveinterval = setInterval(doublemovement,16.5);
	intervalid = setInterval(moveball,16.5);clearInterval(startInterval);snd2.play(); start();},5000);
	
}
/*
$(function(){
	paddleBot();
	function paddleBot(){
		bally
	}
});
*/
//////////////////////////////////////////////
///Watches the Key presses and sets motion
//////////////////////////////////////////////
$(document).keydown(function (e) {
var keyCode = e.keyCode || e.which,
arrow = { up: 87, down: 83, up2:38,down2:40 };

switch (keyCode) {
	case arrow.up:
			up = true;
	break;
	case arrow.down:
				down = true;
	break;
	case arrow.up2:  /* Up arrow was pressed */
			up2 = true;
	break;
	case arrow.down2:  /* Down arrow was pressed */
			down2 = true;
}
});
//////////////////////////////////////////////
///Watches the Key presses and sets motion
//////////////////////////////////////////////
$(document).keyup(function (e) {
var keyCode = e.keyCode || e.which,
arrow = { up: 87, down: 83, up2:38, down2:40 };

switch (keyCode) {
	case arrow.up:
			up = false;
	break;
	case arrow.down:
				down = false;
	break;
	case arrow.up2:  /* Up arrow was pressed */
			up2 = false;
	break;
	case arrow.down2:  /* Down arrow was pressed */
			down2 = false;
}
});

////////////////////////////////
////Moving Right-Stick functions
////////////////////////////////
var dx = 5;
var dy = 5;
var x = 70;
var y = 100;
var r = 5;
var l = 50;
var WIDTH = 400;
var HEIGHT = 300;


/////////////////////////
///draws Right paddle
////////////////////////
function circle(x,y,r) {
ctx.beginPath();
ctx.rect(x,y,r,l);
ctx.closePath();
ctx.fill();
ctx.stroke();
}
/////////////////////////
///draws Right paddle
////////////////////////
function draw() {
	ctx.lineWidth = 1;
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.fillStyle = "black";

circle(x, y, r);
}

/////////////////////////////////
////Moving Left-Stick functions
/////////////////////////////////

var dxx = 5;
var dyy = 5;
var xx = boxx+boxwidth-x;
var yy = 100;
var rr = 5;
var ll = 50;
var WIDTH = 400;
var HEIGHT = 300;
/////////////////////////
///draws Left paddle
////////////////////////
function circle2(xx,yy,rr) {
ctx.beginPath();
ctx.rect(xx,yy,rr,ll);
ctx.closePath();
ctx.fill();
ctx.stroke();
}
/////////////////////////
///draws Left paddle
////////////////////////
function draw2() {
	ctx.lineWidth = 1;
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
circle2(xx, yy, rr);
}