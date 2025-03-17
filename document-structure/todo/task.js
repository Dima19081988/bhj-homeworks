document.getElementById('tasks__form').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputArea = document.getElementById('task__input');
    const taskText = inputArea.value.trim();

    if (taskText !== '') {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <div class="task__title">${taskText}</div>
            <a href="#" class="task__remove">&times;</a>
        `;

        taskElement.querySelector('.task__remove').addEventListener('click', function(event) {
            event.preventDefault();
            taskElement.remove();
        })

        document.getElementById('tasks__list').appendChild(taskElement);
        inputArea.value = '';
    }
})