function addItem() {
	const input = document.getElementById('input').value;
	const body = document.getElementById('toDoList');
	const div = document.createElement('div');
	const text = document.createElement('h3');

	text.innerHTML = input;
	body.appendChild(div);
	div.appendChild(text);
}

const addList = document.getElementById('input');

addList.addEventListener('keypress', function(e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
		addItem();
	}
});