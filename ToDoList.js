const newItem = document.getElementById('item_list');
const List = document.getElementById('TodoList');
const addButton = document.getElementById('add_button');

function Addto() {
    const newInput = newItem.value;
    newItem.value = '';

    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const del = document.createElement('button');
    const text = document.createElement('span');

    checkbox.type = 'checkbox';
    text.textContent = newInput;
    del.textContent = 'DELETE';

    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(del);

    List.append(listItem);

    del.addEventListener('click', function () {
        console.log('Delete button clicked');  // Debugging line
        List.removeChild(listItem);
    });
}

addButton.addEventListener('click', Addto);
