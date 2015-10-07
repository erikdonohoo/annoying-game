// JavaScript Document
$(function(){
	$('#key5').click(function(e) {
        window.location="phone.html";
    });
	for(var i = 50; i > 0; i--){
$('.fly').animate({
	left: "+=150"},350);
$('.fly').animate({
	top: "+=350"},350);
$('.fly').animate({
	left: "-=125"},350);
$('.fly').animate({
	top: "-=250"},350);
$('.fly2').animate({
	left: "+=250"},400);
$('.fly2').animate({
	top: "+=550"},550);
$('.fly2').animate({
	left: "-=225"},400);
$('.fly2').animate({
	top: "-=450"},500);
$('.fly3').animate({
	left: "+=650"},600);
$('.fly3').animate({
	top: "+=750"},400);
$('.fly3').animate({
	left: "-=620"},550);
$('.fly3').animate({
	top: "-=725"},500);
$('.fly4').animate({
	left: "+=80"},100);
$('.fly4').animate({
	top: "+=1000"},750);
$('.fly4').animate({
	left: "-=40"},150);
$('.fly4').animate({
	top: "-=950"},700);
	}
});