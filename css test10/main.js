function fistDo{
	var barsize=600;
	var myMovie=document.getElementById('movie');
	var myPlayButton=document.getElementById('playButton');
	var outBar=document.getElementById('defaultBar');
	var inBar=document.getElementById('progressBar');
	
	myPlayButton.addEventListener('click',playOrpause,false);
	outBar.addEventListener('click',clickedBar,false);
}
function playOrpause(){
		if(!myMovie.paused&&!myMovie.ended)
		{
			myMovie.pause();
			playButton.innerHTML('play');
			}
			else if
			
	}