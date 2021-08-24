'use strict';
// Todo: Write the code for lesson 79...
const btnShowTestModal = document.querySelector('.show-test-modal');
const btnShowLifeModal = document.querySelector('.show-life-modal');
const btnShowSoulModal = document.querySelector('.show-soul-modal');
const btnShowPersonalityModal = document.querySelector(
  '.show-personality-modal'
);
const btnShowPathModal = document.querySelector('.show-path-modal');

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsShowModal = document.querySelectorAll('.show-test-modal');

// console.log(btnsShowModal);

const openModal = function () {
  console.log('Any button clicked, Window open');
  // console.log(typeof btnsShowModal);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const showTestModal = function () {
  console.log('Test button clicked, Test Window open');
  console.log(typeof btnShowTestModal);
  modalTest.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const showLifeModal = function () {
  console.log('Life button clicked, Life Window open');
  console.log(typeof btnShowLifeModal);
  modalLife.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const showSoulModal = function () {
  console.log('Soul button clicked, Soul Window open');
  console.log(typeof btnShowSoulModal);
  modalSoul.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const showPersonalityModal = function () {
  console.log('Personality button clicked, Personality Window open');
  console.log(typeof btnShowPersonalityModal);
  modalPersonality.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const showPathModal = function () {
  console.log('Path button clicked, Path Window open');
  console.log(typeof btnShowPathModal);
  modalPath.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  console.log('Modal closed');
  modal.classList.add('hidden');
  modalTest.classList.add('hidden');
  modalLife.classList.add('hidden');
  modalSoul.classList.add('hidden');
  modalPersonality.classList.add('hidden');
  modalPath.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsShowModal.length; i++)
//   btnsShowModal[i].addEventListener('click', openModal);

btnShowTestModal.addEventListener('click', showTestModal);
btnShowLifeModal.addEventListener('click', showLifeModal);
btnShowSoulModal.addEventListener('click', showSoulModal);
btnShowPersonalityModal.addEventListener('click', showPersonalityModal);
btnShowPathModal.addEventListener('click', showPathModal);

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
