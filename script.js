var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);
var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);






function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if(item === ''){
        var p = document.getElementById('valMsg');
        var message = document.createTextNode('Enter a Todo');
        p.appendChild(message);
        setTimeout(() => {
            message.remove();
        }, 500);
        return false;
    }
    else{
        //li
        li = document.createElement('li');
        
        //checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');

        //label
        var label = document.createElement('label');
        
        //add these elements in web page
        //<li class="mycheck"><input type="checkbox" name="" id="check"><label>Learn Code</label></li>
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);

        input.value = ''

        setTimeout(() => {
            li.className = 'visual';
        }, 3);

    }
}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}