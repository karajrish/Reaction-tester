var clickedTime; var createdTime; var reactionTime;
	
	var Top ; var left; 
	var shape;
	var color;
	var x; var y;
	
	function makeBox(){
		
		var time = Math.random();
		time = time * 2000;
		setTimeout(function(){
			
			document.getElementById("box").style.display="block";
			createdTime = Date.now();
			},time);
	}
	
	function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
	var domic = ['0','100','0','100'];

	function randPos()
	{
		Top = Math.random();
		Top = Top * 320;
		left = Math.random();
		left = left * 1150;
		return;
	}
	
	document.getElementById("box").onclick = function(){
		clickedTime = Date.now();
		reactionTime = (clickedTime - createdTime)/1000;
		randPos();
		document.getElementById("box").style.top=Top.toString()+'px';
		document.getElementById("box").style.left=left.toString()+'px';
		
		shape = Math.random();
		shape = shape * 5;
		shape = Math.floor(shape);
		x = domic[shape];
		
		
		document.getElementById("box").style.backgroundColor = getRandomColor();
		document.getElementById("box").style.borderRadius = x + 'px';
		document.getElementById("time").innerHTML = reactionTime + ' seconds';
		this.style.display="none";
		makeBox();
	}
	makeBox();