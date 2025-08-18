// main.js

document.addEventListener("DOMContentLoaded", function () {
  // --- Başkonsolosluk Modal ---
  const consulateModal = document.getElementById("consulateModal");
  const openConsulateBtn = document.getElementById("openConsulate");
  const consYes = document.getElementById("consYes");
  const consNo = document.getElementById("consNo");

  // LocalStorage kontrolü: popup sadece ilk seferde görünür
  if (consulateModal && !localStorage.getItem("consulateChoice")) {
    consulateModal.setAttribute("aria-hidden", "false");
    consulateModal.style.display = "flex";
  }

  // Popup açma butonu (eklenmiş)
  if (openConsulateBtn) {
    openConsulateBtn.addEventListener("click", function () {
      consulateModal.setAttribute("aria-hidden", "false");
      consulateModal.style.display = "flex";
    });
  }

  // Evet butonu
  if (consYes) {
    consYes.addEventListener("click", function () {
      localStorage.setItem("consulateChoice", "yes");
      closeModal(consulateModal);
    });
  }

  // Hayır butonu
  if (consNo) {
    consNo.addEventListener("click", function () {
      localStorage.setItem("consulateChoice", "no");
      closeModal(consulateModal);
    });
  }

  // Modal dışına tıklayınca kapanma
  if (consulateModal) {
    consulateModal.addEventListener("click", function (e) {
      if (e.target === consulateModal) {
        closeModal(consulateModal);
      }
    });
  }

  function closeModal(modal) {
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
  }

  // --- Scroll animasyonları ---
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
