const span = document.getElementById('display');
const input = document.getElementById('input');
const addButton = document.getElementById('add-button');

let number = 0;
function update(){
    display.innerText = number;
}

function add(){
    var x = 0;
    x = Number(input.value);
    if (Number.isNaN(x)){
        alert('input number only');
        input.value = 0;
    }
    else{
        number += Number(x)
    }
    update();
}

//addButton.onclick = add;
addButton.addEventListener('click', add);