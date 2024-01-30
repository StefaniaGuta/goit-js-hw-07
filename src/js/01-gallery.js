import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);


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

galleryContainer.insertAdjacentHTML('beforeend', createGallary);


function openModalImage() {
    galleryContainer.addEventListener("click", (event) => {
        event.preventDefault();
      if (event.target.nodeName === 'IMG') {
        const imageSrc = event.target.dataset.src;
        const instance = basicLightbox.create(`
        <img src="${imageSrc}" alt = "${event.target.alt}" width="800" height="600">
      `);

     instance.show();
      } 
    });
  }
  
  openModalImage();

 