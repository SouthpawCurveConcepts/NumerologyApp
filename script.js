'use strict';
// Todo: Write the code for lesson 79...
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);
const openModal = function () {
  console.log('Button clicked, Window open');
  console.log(typeof btnsShowModal);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  console.log('Modal closed');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    console.log('Esc was pressed');
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
