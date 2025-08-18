// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Modal logic for Başkonsolosluk
  const modal = document.getElementById('consulateModal');
  const openBtn = document.getElementById('openConsulate');
  const yesBtn = document.getElementById('consYes');
  const noBtn = document.getElementById('consNo');

  // localStorage key: "bon_consulate_choice"
  const choice = localStorage.getItem('bon_consulate_choice');

  function showModal() {
    modal.setAttribute('aria-hidden', 'false');
  }
  function hideModal() {
    modal.setAttribute('aria-hidden', 'true');
  }

  // Show automatically if no choice saved (yeni save-like behavior)
  if (!choice) {
    setTimeout(showModal, 600); // küçük gecikme ile göster
  }

  openBtn && openBtn.addEventListener('click', showModal);

  yesBtn && yesBtn.addEventListener('click', () => {
    localStorage.setItem('bon_consulate_choice', 'yes');
    hideModal();
    flashMessage('Başkonsolosluk inşa etmeyi seçtiniz. Diplomasi açık.');
  });

  noBtn && noBtn.addEventListener('click', () => {
    localStorage.setItem('bon_consulate_choice', 'no');
    hideModal();
    flashMessage('Başkonsolosluk inşa edilmedi — diplomasi kısıtlı ve ceza uygulanır.');
  });

  // Simple flash message
  function flashMessage(msg, duration = 3500) {
    const div = document.createElement('div');
    div.className = 'flash';
    div.style.position = 'fixed';
    div.style.right = '18px';
    div.style.bottom = '78px';
    div.style.background = 'rgba(12,18,18,0.95)';
    div.style.color = '#dfffe0';
    div.style.padding = '12px 16px';
    div.style.borderRadius = '8px';
    div.style.border = '1px solid rgba(255,255,255,0.03)';
    div.style.boxShadow = '0 6px 20px rgba(0,0,0,0.6)';
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(() => div.style.opacity = '0.0', duration - 500);
    setTimeout(() => div.remove(), duration);
  }

  // Simple nav smooth scroll for local links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Close modal on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });

});

