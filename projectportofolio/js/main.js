// js/main.js
document.addEventListener('DOMContentLoaded', function(){
  // Toggle nav (hamburger)
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle && navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    // For accessibility:
    const expanded = mainNav.classList.contains('open');
    navToggle.setAttribute('aria-expanded', expanded);
  });

  // Modal project detail
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  // data proyek (hardcoded di JS or bisa di HTML). Contoh object:
  const projects = {
    proj1: {
      title: "Nama Proyek 1",
      img: "images/proj1.jpg",
      description: "Deskripsi panjang proyek 1. Tools: HTML,CSS,JS. Tahun: 2024."
    },
    proj2: {
      title: "Nama Proyek 2",
      img: "images/proj2.jpg",
      description: "Deskripsi panjang proyek 2. Tools: Figma, CSS, responsif."
    }
  };

  document.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = btn.dataset.modal;
      if(!projects[key]) return;
      const p = projects[key];
      modalBody.innerHTML = `
        <h2>${p.title}</h2>
        <img src="${p.img}" alt="${p.title}" style="width:100%;max-height:300px;object-fit:cover;border-radius:6px;margin:10px 0">
        <p>${p.description}</p>
      `;
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  modalClose && modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));

  // close modal when clicking outside
  modal && modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
  });
});