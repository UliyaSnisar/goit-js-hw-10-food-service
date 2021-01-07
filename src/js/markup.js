import template from '../templates/gallery-item.hbs';
import foods from '../menu.json';

const refs = {
  gallery: document.querySelector('.js-menu'),
};

const markup = template(foods);

refs.gallery.insertAdjacentHTML('beforeend', markup);