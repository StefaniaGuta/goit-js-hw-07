import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const createGallaryItems = galleryItems
  .map(({ original, preview, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}" />
      </a>
    </li>`
  )
  .join("");

galleryContainer.insertAdjacentHTML('beforeend', createGallaryItems);

const galleryHandler = new SimpleLightbox('ul.gallery a', { 
  captionsData: 'alt',
  captionDelay: 250
});
galleryHandler.on("show.simplelightbox");