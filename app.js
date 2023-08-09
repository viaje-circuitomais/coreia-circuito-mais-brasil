const toggleQuestion = (id) => {
  const questionElement = document.querySelector(`#question-${id}`);
  const answerElement = questionElement.querySelector(`.answer-${id}`);
  const arrow = questionElement.querySelector(".question-header > button");
  const upArrow = "&uarr;";
  const downArrow = "&darr;";
  answerElement.classList.toggle("open");
  const isOpen = answerElement.classList.contains("open");
  arrow.innerHTML = isOpen ? upArrow : downArrow;
};

document.querySelector("nav button").onclick = () => {
  document.querySelector("nav").classList.toggle("open");
  document.querySelector(".menu-options").classList.toggle("open");
  const img = document.querySelector("nav button img");
  const isOpen = document.querySelector("nav").classList.contains("open");
  img.src = isOpen ? "./assets/close.webp" : "./assets/hamburger.webp";
};

// Modal
const modal = document.querySelector(".modal");

const hideModal = () => (modal.style.display = "none");
const showModal = () => (modal.style.display = "block");
const openModal = (pacoteId) => showModal();

document.querySelector(".modal button").onclick = hideModal;
document.querySelector(".close-modal-icon").onclick = hideModal;

window.onclick = ({ target }) => target === modal && hideModal();

function scrollToSectionFAQ() {
  const secaoDestino = document.getElementById("faq");
  secaoDestino.scrollIntoView({ behavior: "smooth" });
}

function scrollToSectionPacotes() {
  const secaoDestino = document.getElementById("pacotes");
  secaoDestino.scrollIntoView({ behavior: "smooth" });
}

function scrollToSectionReservas() {
  const secaoDestino = document.getElementById("reservas");
  secaoDestino.scrollIntoView({ behavior: "smooth" });
}

function scrollToSectionContato() {
  const secaoDestino = document.getElementById("contato");
  secaoDestino.scrollIntoView({ behavior: "smooth" });
}

function redirecionarPagina() {
  var urlDestino = "https://wa.me/5519998224113";
  window.open(urlDestino, "_blank");
}

// Event listener para o clique no botão
const btn = document.getElementById("wpp-link");
btn.addEventListener("click", redirecionarPagina);