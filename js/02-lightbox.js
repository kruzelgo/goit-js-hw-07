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
  image.dataset.source = item.original;
  image.alt = item.description;

  link.appendChild(image);
  galleryList.appendChild(link);
  return galleryList;
});

imagesGallery.append(...gallery);

var images = document.querySelectorAll(".gallery img");
images.forEach(function (image) {
  image.addEventListener("click", function (event) {
    event.preventDefault();

    const lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });
  });
});
console.log(galleryItems);
