console.log("Tasks");

// const btn = document.querySelector<HTMLButtonElement>(".test-btn")!; ! -> not null assertion
// const btn = document.querySelector(".test-btn") as HTMLButtonElement;
// btn.addEventListener;
// btn.disabled = true;

//This is not sure so to make sure to check before doign anything and any type related
// const btn = document.querySelector<HTMLButtonElement>(".test-btn");

// if we do not add not null assertion
// btn?.addEventListener

// if (btn) {
//   btn.disabled = true;
// }

const taskForm = document.querySelector<HTMLFormElement>(".form");

const formInput = document.querySelector<HTMLInputElement>(".form-input");

const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");

  return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const taskDescription = formInput?.value;

  if (taskDescription) {
    //Add Task to List
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    addTask(task);

    //Render Tasks
    renderTask(task);

    //Update Local Storage
    updateStorage();
    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});

function addTask(task: Task): void {
  tasks.push(task);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  //Adding a Checkbox to the Task
  const taskCheckBox = document.createElement("input");
  taskCheckBox.type = "checkbox";

  taskCheckBox.checked = task.isCompleted;

  //Toggle CheckBox
  taskCheckBox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckBox);

  taskListElement?.appendChild(taskElement);
}

function updateStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function isChecked() {}
