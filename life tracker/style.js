function disappear(){
	document.getElementsByClassName('images')[0].style.display = 'none';
	document.getElementsByClassName('runner')[0].style.display = 'block';
}
function appear(){
	document.getElementById('appear').style.display = "block";
}
function timing(){
	setTimeout(disappear, 4000);
	setTimeout(appear, 600);
};
timing();
