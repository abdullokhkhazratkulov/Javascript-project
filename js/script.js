import tabs from './modules/tabs';
import modal from './modules/modal';
import data from './modules/data';
import loader from './modules/loader';
import cards from './modules/cards';
import slider from './modules/slider';
import accordion from './modules/accordion';
import form from './modules/form';
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {        

  const modalTimer = setTimeout( () => openModal('.modal', modalTimer), 5000);

  tabs();
  modal('[data-modal]', '.modal', modalTimer);
  data();
  loader();
  cards();
  slider();
  accordion();
  form(modalTimer);
});
