const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

const remove = e => {
	e.target.closest(".task").remove();
}
  
const add = e => {  
  if (taskInput.value.trim()) {
        text =
          `<div class="task">
            <div class="task__title">
              ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`;
        taskList.insertAdjacentHTML('afterend', text);
        const tasksList = document.querySelector(".task__remove");
        tasksList.addEventListener("click", remove);
      }
    	taskInput.value = "";
    	e.preventDefault();
    }

document.getElementById("tasks__add").addEventListener("click", add);