(function () {
  const todos = [];
  const todoContainer = document.getElementById("todo");

  const inputTask = document.createElement("input");
  inputTask.type = "text";
  inputTask.placeholder = "Enter task...";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add";

  const todoList = document.createElement("div");

  todoContainer.append(inputTask, addBtn, todoList);

  function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
      const row = document.createElement("div");
      row.className = "task-row";

      const taskText = document.createElement("span");
      taskText.className = "task-text";
      taskText.textContent = todo.text;
      if (todo.completed) {
        taskText.classList.add("completed");
      }

      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.className = "task-edit";
      editInput.value = todo.text;

      const actions = document.createElement("div");
      actions.className = "actions";

      const completeBtn = document.createElement("button");
      completeBtn.textContent = todo.completed ? "Completed" : "Complete";

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.style.display = "none";

      completeBtn.addEventListener("click", () => {
        todo.completed = !todo.completed;
        renderTodos();
      });

      editBtn.addEventListener("click", () => {
        taskText.style.display = "none";
        editInput.style.display = "inline-block";
        editBtn.style.display = "none";
        completeBtn.style.display = "none";
        deleteBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
        editInput.focus();
      });

      saveBtn.addEventListener("click", () => {
        const updatedTask = editInput.value.trim();
        if (updatedTask) {
          todo.text = updatedTask;
        }
        renderTodos();
      });

      deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        renderTodos();
      });

      editInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          saveBtn.click();
        }
      });

      actions.append(completeBtn, editBtn, deleteBtn, saveBtn);
      row.append(taskText, editInput, actions);
      todoList.appendChild(row);
    });
  }

  function addTodo() {
    const task = inputTask.value.trim();
    if (!task) return;

    todos.unshift({ text: task, completed: false });
    renderTodos();
    inputTask.value = "";
    inputTask.focus();
  }

  addBtn.addEventListener("click", addTodo);
  inputTask.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  });
})();
