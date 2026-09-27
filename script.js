document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.toggle('open'));

/* =====================================================
   PROJECT IMAGE LIGHTBOX
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Find all project screenshots
  const projectImages = document.querySelectorAll(
    ".project-shot .project-img"
  );

  // Stop here if the page has no project images
  if (!projectImages.length) return;


  // Create lightbox
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";

  lightbox.innerHTML = `
    <button
      class="lightbox-close"
      type="button"
      aria-label="Close image"
    >
      &times;
    </button>

    <img src="" alt="">
  `;

  document.body.appendChild(lightbox);


  const lightboxImage = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector(".lightbox-close");


  // Open image
  function openLightbox(image) {

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt || "Enlarged project screenshot";

    lightbox.classList.add("active");
    document.body.classList.add("lightbox-open");
  }


  // Close image
  function closeLightbox() {

    lightbox.classList.remove("active");
    document.body.classList.remove("lightbox-open");

    // Clear after transition
    setTimeout(() => {
      if (!lightbox.classList.contains("active")) {
        lightboxImage.src = "";
      }
    }, 250);
  }


  // Add click event to every project image
  projectImages.forEach((image) => {

    image.addEventListener("click", () => {
      openLightbox(image);
    });

  });


  // Close button
  closeButton.addEventListener("click", closeLightbox);


  // Click outside image to close
  lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
      closeLightbox();
    }

  });


  // Clicking enlarged image also closes it
  lightboxImage.addEventListener("click", closeLightbox);


  // ESC key closes it
  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      lightbox.classList.contains("active")
    ) {
      closeLightbox();
    }

  });

});
