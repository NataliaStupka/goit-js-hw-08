
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const galleryEl = document.querySelector('.gallery');
// разметка
const createMarkup = galleryItems.map((item) =>
    `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
    <img
        class ="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        
        alt="${item.description}"
    />
</a>
 </div>`,)
    .join('');
galleryEl.insertAdjacentHTML('beforeend', createMarkup)


let gallery = new SimpleLightbox('.gallery a');