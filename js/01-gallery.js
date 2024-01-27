import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imagesGallery = document.querySelector(".gallery");

const gallery = galleryItems.map((item) => {
  const galleryList = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");

  galleryList.classList.add("gallery__item");
  link.classList.add("gallery__link");
  image.classList.add("gallery__image");

  link.href = item.original;
  image.src = item.preview;

  image.alt = item.description;

  link.appendChild(image);
  galleryList.appendChild(link);
  return galleryList;
});

imagesGallery.append(...gallery);

let lightboxInstance;

imagesGallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    lightboxInstance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", onEscape);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", onEscape);
        },
      }
    );
    lightboxInstance.show();
  }
});

function onEscape(event) {
  if (event.key === "Escape" && lightboxInstance) {
    lightboxInstance.close();
  }
}
