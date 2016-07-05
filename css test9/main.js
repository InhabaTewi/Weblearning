function getStuff(){
	var listID = document.querySelectorAll('#ID');

<!--ocument.querySelector this will use on the first item has #ID-->
<!--ocument.querySelectorAll put all same ID items in an array-->
<!--listID[1].onclick=talk;-->
	for(var i=0; i<listID.length; i++)
	{
		listID[i].onclick=talk;
		}
}
function talk(){
	alert('this is the alert when you cloclick #ID stuff');
}
window.onload=getStuff;<!-- when webpage is load get this function-->

<!--后来+离开地球表面-->