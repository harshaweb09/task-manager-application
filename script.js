const createBtn = document.querySelector("#create");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".modal-close");
const taskForm = document.querySelector(".task-form");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const categorySelect = document.querySelector("#category");
const taskContainer = document.querySelector(".task-container");

createBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const category = categorySelect.value;
  console.log(task);
  if (!title || !description) {
    alert("Please fill all fields");
    return;
  }
  const task = {
    id: Date.now(),
    title,
    description,
    category,
    status: "pending",
  };
  modalOverlay.classList.add("hidden");
});
