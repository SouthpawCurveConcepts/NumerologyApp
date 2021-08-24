'use strict';
// Todo: Done
// Links to HTML buttons
const btnShowTestModal = document.querySelector('.show-test-modal');
const btnShowLifeModal = document.querySelector('.show-life-modal');
const btnShowSoulModal = document.querySelector('.show-soul-modal');
const btnShowPersonalityModal = document.querySelector(
  '.show-personality-modal'
);
const btnShowPathModal = document.querySelector('.show-path-modal');

// Links to HTML div elements
const overlay = document.querySelector('.overlay');
const showTestModal = document.querySelector('.modaltest');
const showLifeModal = document.querySelector('.modallife');
const showSoulModal = document.querySelector('.modalsoul');
const showPersonalityModal = document.querySelector('.modalpersonality');
const showPathModal = document.querySelector('.modalpath');
const btnCloseModal = document.querySelector('.close-modal');

// Function expressions for buttons
const openTestModal = function () {
  console.log('Test button clicked, Test Window open');
  console.log(typeof showTestModal);
  showTestModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openLifeModal = function () {
  console.log('Life button clicked, Life Window open');
  console.log(typeof btnShowLifeModal);
  showLifeModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openSoulModal = function () {
  console.log('Soul button clicked, Soul Window open');
  console.log(typeof btnShowSoulModal);
  showSoulModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openPersonalityModal = function () {
  console.log('Personality button clicked, Personality Window open');
  console.log(typeof btnShowPersonalityModal);
  showPersonalityModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openPathModal = function () {
  console.log('Path button clicked, Path Window open');
  console.log(typeof btnShowPathModal);
  showPathModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  console.log('Modal closed');
  showTestModal.classList.add('hidden');
  showLifeModal.classList.add('hidden');
  showSoulModal.classList.add('hidden');
  showPersonalityModal.classList.add('hidden');
  showPathModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Event listeners for the buttons
btnShowTestModal.addEventListener('click', openTestModal);
btnShowLifeModal.addEventListener('click', openLifeModal);
btnShowSoulModal.addEventListener('click', openSoulModal);
btnShowPersonalityModal.addEventListener('click', openPersonalityModal);
btnShowPathModal.addEventListener('click', openPathModal);

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
