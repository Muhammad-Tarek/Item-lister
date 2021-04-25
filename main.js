var form = document.getElementById('addForm'),
    itemList = document.getElementById('items'),
    filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// add item
function addItem (e) {
    'use strict';
    
    e.preventDefault();
    
    if (document.getElementById('item').value != '') {
         // get input value
        var newItem = document.getElementById('item').value;

        // creat new li element
        var li = document.createElement('li');

        // add class
        li.className = 'list-group-item';

        // add next node with input value
        li.appendChild(document.createTextNode(newItem));

        // create del button element
        var deleteBtn = document.createElement('button');

        // add classes to del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

        //append text node
        deleteBtn.appendChild(document.createTextNode('X'));

        // append button to li
        li.appendChild(deleteBtn);

        // append li to list
        itemList.appendChild(li);
    } else {
        alert('You can\'t add an empty value');
    }
   
}


// delete event
itemList.addEventListener('click', removeItem)

function removeItem (e) {
    'use strict';
    
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
            
        }        
    }
}


// filter event
filter.addEventListener('keyup', filterItems);

function filterItems (e) {
    'use strict';
    
    var text = e.target.value.toLowerCase(),
        items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}