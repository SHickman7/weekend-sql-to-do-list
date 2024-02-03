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
    let todoItemsTableBody = document.getElementById('viewTodoItems');
    todoItemsTableBody.innerHTML = ''
    
    for(let todoItem of todoList){
    //     let markCompleteButton = '';
    // if (!todoItem.isComplete){
    //     markCompleteButton = `<button onClick="markCompleteTodoItem(${todoItem.id})" data-testid="completeButton">Mark Complete</button>`
    // } //end if statement
    todoItemsTableBody.innerHTML += `
        <tr data-testid="toDoItem" data-id="${todoItem.id}">
            <td>${todoItem.text}</td>
            <td>
                <button onClick="markCompleteTodoItem(${todoItem.id})" data-testid="completeButton">
                    Mark Complete
                </button>
            </td>
            <td>
                <button onClick="deleteTodoItem(${todoItem.id})" data-testid="deleteButton">Delete</button>
            </td>
        </tr>
        `;
       }
    }

    function addTodoItem (event){
        event.preventDefault();
        console.log ('in addTodoItem');

        let text = document.getElementById('text').value

        let newTodoItem = { text: text}

        //axios call to the server to add the to-do item

        axios({
            method: 'POST',
            url: '/todos',
            data: newTodoItem

        }).then(response => {
            console.log('POST request successful', response);
            getTodoItems();
            document.getElementById('text').value = '';
        }).catch(error => {
            console.log('Error in POST request', error);
        });
    }


    function deleteTodoItem(todoItemId){
        console.log('In deleteTodoItem');

        axios.delete(`/todos/${todoItemId}`).then((response)=> {
            getTodoItems();
        }).catch((error)=>{
            console.log('Error in the deleteTodoItem function', error);
            alert('Something went wrong');
        });
    }