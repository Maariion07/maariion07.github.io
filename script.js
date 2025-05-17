document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci pour votre message !");
  });

  function openPDFPopup(pdfUrl) {
    const popup = document.getElementById('pdfPopup');
    const frame = document.getElementById('pdfFrame');
    frame.src = pdfUrl;
    popup.style.display = 'block';
  }

  function closePDFPopup() {
    const popup = document.getElementById('pdfPopup');
    const frame = document.getElementById('pdfFrame');
    frame.src = ''; // vide l'iframe
    popup.style.display = 'none';
  }



  document.querySelectorAll('.skills-carousel-container').forEach(container => {
    const carousel = container.querySelector('.skills-carousel');
    const items = carousel.querySelectorAll('.skill');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    let index = 0;

    function updateCarousel() {
      const offset = -index * 260; // doit correspondre à la largeur .skill
      carousel.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener('click', () => {
      index = Math.max(index - 1, 0); // bloque au début
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      index = Math.min(index + 1, items.length - 1); // bloque à la fin
      updateCarousel();
    });

    // (optionnel) auto-slide :
   setInterval(() => {
   index = (index + 1) % items.length;
   updateCarousel();
   }, 3000);

    updateCarousel(); // init
  });
