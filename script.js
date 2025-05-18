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



  const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(container => {
  const track = container.querySelector('.carousel-track');
  const items = track.querySelectorAll('.carousel-item');
  const prev = container.querySelector('.prev');
  const next = container.querySelector('.next');
  let index = 0;

  function updatePosition() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updatePosition();
  });

  next.addEventListener('click', () => {
    index = (index + 1) % items.length;
    updatePosition();
  });

  // Auto-slide facultatif :
  setInterval(() => {
    index = (index + 1) % items.length;
    updatePosition();
  }, 4000);
});
