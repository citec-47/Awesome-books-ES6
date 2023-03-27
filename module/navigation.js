const showwindow = () => {
  document.querySelector('.myHeadlist').addEventListener('click', () => {
    document.querySelector('.forming').classList.remove('show');
    document.querySelector('.myInformation').classList.remove('show');
    document.querySelector('.Allbookshop-bookStorage').classList.remove('hide_El');
    document.querySelector('.myHeadlist').style.color = 'blue';
    document.querySelector('.addnew_El').style.color = 'black';
    document.querySelector('mycontact').style.color = 'black';
  });

  document.querySelector('.addnew_El').addEventListener('click', () => {
    document.querySelector('.forming').classList.add('show');
    document.querySelector('.myInformation').classList.remove('show');
    document.querySelector('.Allbookshop-bookStorage').classList.add('hide_El');
    document.querySelector('.myHeadlist').style.color = 'black';
    document.querySelector('.addnew_El').style.color = 'blue';
    document.querySelector('.mycontact').style.color = 'black';
  });

  document.querySelector('.mycontact').addEventListener('click', () => {
    document.querySelector('.forming').classList.remove('show');
    document.querySelector('.myInformation').classList.add('show');
    document.querySelector('.Allbookshop-bookStorage').classList.add('hide_El');
    document.querySelector('.myHeadlist').style.color = 'black';
    document.querySelector('.addnew_El').style.color = 'black';
    document.querySelector('.mycontact').style.color = 'blue';
  });
};

export default showwindow;
