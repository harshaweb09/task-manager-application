const createBtn = document.querySelector("#create");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".modal-close");
const taskForm = document.querySelector(".task-form");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const categorySelect = document.querySelector("#category");
const taskContainer = document.querySelector(".task-container");
const submitBtn = document.querySelector("#submit-btn");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editingTaskId = null;

function renderTasks() {
  taskContainer.innerHTML = "";

  tasks.forEach((task) => {
    createTaskCard(task);
  });
}

renderTasks();

createBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  editingTaskId = null;
  submitBtn.textContent = "Add Task";
  modalOverlay.classList.add("hidden");
});

taskContainer.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  if (!action) return;
  const taskCard = e.target.closest(".task-card");
  const taskId = Number(taskCard.dataset.id);
  if (action === "delete") {
    const index = tasks.findIndex((task) => task.id === taskId);
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
  if (action === "complete") {
    const task = tasks.find((task) => task.id === taskId);
    task.status = "completed";
    saveTasks();
    renderTasks();
  }
  if (action === "edit") {
    const task = tasks.find((task) => task.id === taskId);
    editingTaskId = task.id;
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    categorySelect.value = task.category;
    submitBtn.textContent = "Update Task";
    modalOverlay.classList.remove("hidden");
  }
});

function createTaskCard(task) {
  const article = document.createElement("article");
  article.classList.add("task-card", task.status);
  article.dataset.id = task.id;
  article.dataset.status = task.status;
  article.dataset.category = task.category;

  const taskContent = document.createElement("div");
  taskContent.classList.add("task-content");

  const taskHeader = document.createElement("div");
  taskHeader.classList.add("task-header");

  const taskTitleWrapper = document.createElement("div");
  taskTitleWrapper.classList.add("task-title-wrapper");

  const statusDot = document.createElement("span");
  statusDot.classList.add("status-dot");

  const taskTitle = document.createElement("h2");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = task.title;

  taskTitleWrapper.append(statusDot, taskTitle);

  const taskStatus = document.createElement("span");
  taskStatus.classList.add("task-status", "badge", task.status);
  taskStatus.textContent =
    task.status.charAt(0).toUpperCase() + task.status.slice(1);

  taskHeader.append(taskTitleWrapper, taskStatus);

  const taskDescription = document.createElement("p");
  taskDescription.classList.add("task-description");
  taskDescription.textContent = task.description;

  const taskCategory = document.createElement("span");
  taskCategory.classList.add("task-category", "badge");
  taskCategory.textContent = task.category;

  taskContent.append(taskHeader, taskDescription, taskCategory);

  const taskDivider = document.createElement("div");
  taskDivider.classList.add("task-divider");

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.dataset.action = "edit";
  editBtn.classList.add("btn", "btn-edit");
  editBtn.textContent = "Edit";

  const completeBtn = document.createElement("button");
  completeBtn.type = "button";
  completeBtn.dataset.action = "complete";
  completeBtn.classList.add("btn", "btn-complete");
  completeBtn.textContent = "Complete";

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.dataset.action = "delete";
  deleteBtn.classList.add("btn", "btn-delete");
  deleteBtn.textContent = "Delete";

  taskActions.append(editBtn, completeBtn, deleteBtn);

  article.append(taskContent, taskDivider, taskActions);

  taskContainer.append(article);
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const category = categorySelect.value;
  if (!title || !description) {
    alert("Please fill all fields");
    return;
  }

  if (editingTaskId) {
    const task = tasks.find((task) => task.id === editingTaskId);
    task.title = title;
    task.description = description;
    task.category = category;
    task.status = "pending";
    editingTaskId = null;
  } else {
    const task = {
      id: Date.now(),
      title,
      description,
      category,
      status: "pending",
    };
    tasks.push(task);
  }

  saveTasks();

  renderTasks();
  titleInput.value = "";
  descriptionInput.value = "";
  categorySelect.value = "study";
  submitBtn.textContent = "Add Task";
  modalOverlay.classList.add("hidden");
});
