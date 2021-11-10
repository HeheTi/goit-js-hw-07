import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

const createMarkup = ({ preview, original, description }) => `
<div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				alt="${description}"
			/>
		</a>
	</div>`;

const renderGalleryMarckup = (array) => {
  refs.gallery.innerHTML = array.map((item) => createMarkup(item)).join("");
};

renderGalleryMarckup(galleryItems);

const lightbox = new SimpleLightbox(".gallery .gallery__link", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
