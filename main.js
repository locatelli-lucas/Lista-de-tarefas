var tasks = []

function addTask() {
    let writenTask = document.getElementById('task')

    while(true) {    
        let task = {
            name: '',
            date: '',
            status: ''
        }

        let question = prompt('Do you wish to create a task? (yes or no)') 
        
        if(question.toLowerCase() === 'yes' || question.toLowerCase() === 'y') {
            let name = prompt("How will you call this task? ")
            task.name = name

            let date = prompt('When will you do this task? (MM/DD/YYYY)');
            task.date = new Date(date).toLocaleDateString();

            let status = prompt('Is it done? ')
            task.status = status
            
            tasks.push(task)
        } 
            else if(question == 'no' || question == 'n') {
                alert('Goodbye then!')
                break
            }
        }

        showTasks() 
}

function showTasks() {
    const tasksDiv = document.getElementById('tasks');

    tasks.map((task) => {
        const newElement = document.createElement('div');
        newElement.innerHTML = `Task name: ${task.name}\n
                                    Task date: ${task.date}\n
                                    Task status: ${task.status}`;
        tasksDiv.appendChild(newElement);

        const line = document.createElement('hr');
        tasksDiv.appendChild(line);
    });
}


console.log(tasks)
    




