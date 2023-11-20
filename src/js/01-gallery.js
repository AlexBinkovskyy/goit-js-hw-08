// Add imports above this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onClick);

const key = [];
galleryItems.map(item => {
  key.push(
    `<li class="gallery"> <a href="${item.original}"><img src="${item.preview}" alt="" title="${item.description}"/></a>`
  );
});
galleryList.insertAdjacentHTML('afterbegin', key.join(''));

function onClick(event) {
  if (event.target === event.currentTarget) {
    event.preventDefault();
    return;
  }
}

const gallery = new SimpleLightbox('.gallery a');
