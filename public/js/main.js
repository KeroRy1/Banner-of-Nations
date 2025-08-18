// main.js

document.addEventListener("DOMContentLoaded", function () {
  // Başkonsolosluk Modal
  const consulateModal = document.getElementById("consulateModal");
  const consYes = document.getElementById("consYes");
  const consNo = document.getElementById("consNo");

  if (consulateModal && !localStorage.getItem("consulateChoice")) {
    consulateModal.setAttribute("aria-hidden", "false");
    consulateModal.style.display = "flex";
  }

  if (consYes) {
    consYes.addEventListener("click", function () {
      localStorage.setItem("consulateChoice", "yes");
      closeModal(consulateModal);
    });
  }

  if (consNo) {
    consNo.addEventListener("click", function () {
      localStorage.setItem("consulateChoice", "no");
      closeModal(consulateModal);
    });
  }

  function closeModal(modal) {
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
  }

  // Scroll animasyonları (isteğe bağlı)
  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  elements.forEach((el) => observer.observe(el));
});
