let todolist = [
    { item: 'cow milk', duedate: '10/04/2022', status: 'In progress' }, 
    { item: 'study plan', duedate: '20/06/2024', status: 'In progress' }
];

// Initial display of tasks
displayadded();

function addTodo() {
    let inputItem = document.querySelector('#input-todo');
    let inputDate = document.querySelector('#input-date');
    let todoItem = inputItem.value;
    let todoDate = inputDate.value || new Date().toLocaleDateString(); // Use current date if none provided

    if (todoItem.trim() !== '') {
        todolist.push({ item: todoItem, duedate: todoDate, status: 'In progress' });
        inputItem.value = '';
        inputDate.value = '';
        displayadded();
    } else {
        alert('Please enter a task!');
    }
}

function displayadded() {
    let taskList = document.querySelector('#task-list');
    let taskTable = document.querySelector('#taskTable');
    taskList.innerHTML = ''; // Clear previous tasks

    if (todolist.length > 0) {
        taskTable.style.display = 'table'; // Show the table if there are tasks
        todolist.forEach((todo, index) => {
            let { item, duedate, status } = todo;

            let taskRow = document.createElement('tr');
            taskRow.innerHTML = `
                <td>${index + 1}</td>
                <td>${item}</td>
                <td>${status}</td>
                <td>${duedate}</td>
                <td>
                    <button class="deleteBtn" onClick="deleteTask(${index})">DELETE</button>
                    <button class="finishedBtn" onClick="markAsFinished(${index})">FINISHED</button>
                </td>
            `;

            taskList.appendChild(taskRow);
        });
    } else {
        taskTable.style.display = 'none'; // Hide the table if there are no tasks
    }
}

function deleteTask(index) {
    todolist.splice(index, 1);
    displayadded();
}

function markAsFinished(index) {
    todolist[index].status = 'Finished';
    displayadded();
}
