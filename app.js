String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

window.onload = function(){
	const submit = document.querySelector('.submit');
	const result = document.getElementById('result');
	const inputField = document.querySelector('#input');
	const url = 'http://localhost:8080/info2180-lab6/superheroes.php';
	const queryParam = '?query=';
	fetch('http://localhost:8080/info2180-lab6/superheroes.php?query=').then(res => res.text()).then(data => result.innerHTML = data);
	submit.onclick = function(){
		const input = DOMPurify.sanitize(inputField.value, {SAFE_FOR_TEMPLATES: true});
		const endpoint = url+queryParam+input.capitalize();
		fetch(endpoint).then(res => res.text()).then(data => result.innerHTML = data);
	};
};
