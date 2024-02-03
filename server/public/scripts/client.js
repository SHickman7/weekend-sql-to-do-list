console.log('JS is sourced!');

getTodoItems();

function getTodoItems(){
    console.log( 'in getTodoItems')

    //axios call to server to get To-do Items

    axios({
        method:  'GET',
        url: 'todos'
    }).then (response => {
        console.log('GET response is good', response);
        appendTodoItemsToDom(response.data);
    }) .catch (error => {
        console.log('GET response went wrong', error);
    });

} // end getTodoItems

function appendTodoItemsToDom (todoList){
    console.log ('in appendTodoItemsToDom function')
    for(let todoItem of todoList){
        let markCompleteButton = '';
    if (!todoItem.isComplete){
        markCompleteButton = `<button onClick="markCompleteTodoItem(${todoItem.id})" data-testid="completeButton">Mark Complete</button>`
    } //end if statement
    document.getElementById('viewTodoItems').innerHTML += `
        <tr data-testid="toDoItem" data-id="${todoItem.id}">
        <td>${todoItem.text}</td>
        <td>${markCompleteButton}</td>
        <td>
        <button onClick="deleteTodoItem(${todoItem.id})" data-testid="deleteButton">Delete</button>
        </td>
        </tr>
        `
        



    }}