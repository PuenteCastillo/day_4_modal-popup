// Variables

const modal = document.querySelector(".modal");
const button = document.querySelector(".btn");
const close = document.querySelector(".close");

// Event Listeners

button.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// Functions
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
