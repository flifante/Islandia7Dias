function abrirLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  // Mostrar imagen ampliada
  lightboxImg.src = img.src;

  // Mostrar pie de foto (usa alt o data-caption)
  caption.textContent = img.alt || img.getAttribute("data-caption") || "";

  // Mostrar lightbox
  lightbox.style.display = "flex";
}

function cerrarLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
