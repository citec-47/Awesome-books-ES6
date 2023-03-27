const bookStorage = JSON.parse(localStorage.getItem('bookStorage')) || [];

export default class Allbookshop {
  constructor(titleOfBooks, authorOfbooks) {
    this.titleOfBooks = titleOfBooks;
    this.authorOfbooks = authorOfbooks;
  }

  additionTionOfBooks() {
    document.querySelector('.Allbookshop-btn__add').addEventListener('click', () => {
      const titleOfBooks = document.getElementById('titleOfBooks').value;
      const authorOfbooks = document.getElementById('authorOfbooks').value;
      if (titleOfBooks && authorOfbooks) {
        const newBookCreated = {
          titleOfBooks,
          authorOfbooks,
        };
        bookStorage.push(newBookCreated);
        localStorage.setItem('bookStorage', JSON.stringify(bookStorage));
        this.giveOutBooks();
        document.querySelector('.forming').reset();
        document.querySelector('.displayText').innerHTML = 'Congrats you have successfully added the book, <br> Check list.';
        document.querySelector('.displayText').style.color = 'blue';
      } else {
        document.querySelector('.displayText').innerHTML = 'Please fill in the informations on both author and Title';
        document.querySelector('.displayText').style.color = 'red';
      }
      setTimeout(() => {
        document.querySelector('.displayText').innerHTML = '';
      }, 1500);
    });
  }

  giveOutBooks() {
    if (!bookStorage.length) {
      document.querySelector('.Allbookshop-bookStorage__books').innerHTML = 'No books added';
    } else {
      let markup = '';
      bookStorage.forEach((elem, iindex) => {
        markup += `<div class="Allbookshop-book" style="background-color: ${iindex % 2 && 'rgb(225, 223, 223)'}">
        <p class="Allbookshop-book__titleOfBooks">"${elem.titleOfBooks}"</p> <span> by </span>
        <p class="Allbookshop-book__authorOfbooks">${elem.authorOfbooks}</p>    
        <button type="button" class="Allbookshop-btn_rmv" id=${iindex}>Remove</button>
    </div>`;
      });
      document.querySelector('.Allbookshop-bookStorage__books').innerHTML = markup;
    }

    const remoMovingBook = () => {
      const remoVingBtnsEl = [...document.getElementsByClassName('Allbookshop-btn_rmv')];
      remoVingBtnsEl.forEach((item) => {
        item.addEventListener('click', (e) => {
          bookStorage.splice(e.target.id, 1);
          localStorage.setItem('bookStorage', JSON.stringify(bookStorage));
          this.giveOutBooks();
        });
      });
    };
    remoMovingBook();
  }
}