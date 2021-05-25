// Pasirenkam  kintamuosius

var todoinput = document.getElementById('todo-input');
var todoform = document.getElementById('todo-form');
var task = document.getElementById('todo-input');
var todoslist = document.getElementById('todos');
var doneslist = document.getElementById('dones');



todoform.addEventListener('submit', function (e) {
    e.preventDefault();
    if (task.value) {
        var newtask = `
        <div class="border border-1 shadow-sm p-3 mb-3 bg-body rounded todo-item">
             <h4 class="mb-3 input-name">${task.value}</h4>
             <button type="button" class="btn btn-danger delete">Delete</button>
             <button type="button" class="btn btn-success move-todo">Move to Done</button>
        </div>`

        todoslist.innerHTML += newtask;
        task.value = '';
    }

})




document.addEventListener('click', function(event){
    if (event.target.matches('.delete')){
        event.target.closest('.todo-item').remove();
    }
})



























