import Allbookshop from './module/add-remove.js';
import showwindow from './module/navigation.js';
import * as dateTime from './module/Date-time.js';

const ourLocalDate = document.querySelector('.ourLocalDate');
ourLocalDate.innerHTML = `${dateTime.ourLocalDate} ${dateTime.hour}:${dateTime.min}:${dateTime.sec}`;

const aweSomeBookshop = new Allbookshop();

aweSomeBookshop.additionTionOfBooks();
aweSomeBookshop.giveOutBooks();
showwindow();