// count for items' ID
count = 1;

function addItem() {
	// gets user's input value
	const input = document.getElementById('input').value;
	// if user input is empty, don't add anything to to-do list
	if (input != '') {
	const body = document.getElementById('toDoList');
	const div = document.createElement('div');
	const text = document.createElement('li');
	text.className = 'list-group-item col-md-4 col-md-offset-4 item';
	text.id = "item"+count;

	text.innerHTML = input;
	body.appendChild(div);
	div.appendChild(text);
	}
	// clears out input form after content has been added
	document.getElementById('input').value = '';
	
	console.log(input + count);

	// delete this item when clicked
	const deleteButton = document.createElement('button');
	deleteButton.className = 'remove';
	deleteButton.id = 'remove'+count;
	const deleteButtonText = document.createTextNode('x');
	deleteButton.appendChild(deleteButtonText);
	const addButton = document.getElementsByClassName('list-group-item')[count-1];
	addButton.appendChild(deleteButton);

	document.getElementById(deleteButton.id).onclick = function() {
		deleteItem(text);
	}

	return count++;
}

// adds functionality to Add button
document.getElementById('add').onclick = function() {
	addItem(); // calls addItem function
};

// create delete button next to new to-do item
function deleteItem(item) {
	const remove = document.getElementById(item);
	const itemList = remove.parentNode;
	itemList.removeChild(remove);
	console.log("removed")
}

// adds input on Enter/Return key
const addList = document.getElementById('input');
addList.addEventListener('keypress', function(e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
		addItem();
	}
});