import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

const createImgMarkup = ({ preview, original, description }) =>
  `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;

const renderGalleryMarkup = (array) => {
  refs.gallery.innerHTML = array.map((item) => createImgMarkup(item)).join("");
};

function onGettingUrlOfLargeImage(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) return;
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">`);

  instance.show();

  const onCloseModalEsc = (e) => {
    console.log(e.code);
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onCloseModalEsc);
    }
  };

  window.addEventListener("keydown", onCloseModalEsc);
}

renderGalleryMarkup(galleryItems);

refs.gallery.addEventListener("click", onGettingUrlOfLargeImage);
