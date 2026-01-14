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

// Lazy load para YT (solo cargará al hacer clic)
document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(
    ".video-container[data-youtube-id]"
  );

  containers.forEach(container => {
    const videoId = container.getAttribute("data-youtube-id");
    const button = container.querySelector(".yt-lite");

    if (!videoId || !button) return;

    button.addEventListener("click", () => {
      const iframe = document.createElement("iframe");

      iframe.src =
        "https://www.youtube.com/embed/" +
        encodeURIComponent(videoId) +
        "?autoplay=1&rel=0";

      iframe.width = "560";
      iframe.height = "315";
      iframe.loading = "lazy";
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.title = "Vídeo de YouTube";

      container.innerHTML = "";
      container.appendChild(iframe);
    });
  });
});
