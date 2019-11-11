window.onload = function(){
	let submit = document.querySelector('.submit');
	submit.onclick = function(){
		fetch('http://localhost:8080/info2180-lab6/superheroes.php')
		.then(res => res.text())
		.then(data => alert(data));
	};
};
