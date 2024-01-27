import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");
const createGallary = galleryItems
   .map((galleryItems) =>
   `<li class="gallery__item">
   <a class="gallery__link" href="${galleryItems.original}">
   <img class="gallery__image" src="${galleryItems.preview}" data-src="${galleryItems.original}" alt="${galleryItems.description}" />
   </a>
   </li>`
   )
   .join("");
    console.log(createGallary);
galleryContainer.insertAdjacentHTML('beforeend', createGallary);