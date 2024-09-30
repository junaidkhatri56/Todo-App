

var arr = [];
var ol = document.querySelector('#ol');
var input = document.querySelector('#input');


function renderTodo(){

    ol.innerHTML = "";

    for ( var i = 0; i < arr.length; i++){

        ol.innerHTML += `<li> ${arr[i]} 
        <div class="btn-div"><button class="deletebutton" onclick="deleteTodo(${i})">Delete</button>
        <button class="editbutton" onclick="editTodo(${i})">Edit</button></div></li>`
 
     }
}


function addTodo(){
     if (input.value === "") {
          alert("Please enter a todo item.");
          return;
      }

     arr.push(input.value);
     renderTodo();
     input.value = '';
}

function deleteTodo(index){
     arr.splice(index , 1);
     renderTodo();
}

function editTodo(index) {
     var newValue = prompt("Edit your todo item:", arr[index]);
     if (newValue !== null && newValue !== "") {
         arr[index] = newValue;
         renderTodo();
     }
 }