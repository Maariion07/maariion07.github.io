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
