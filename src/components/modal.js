//Function Close Modal Window
export function closeModal() {
  const modal = document.querySelector('.popup_is-opened');
  const btnModalClose = modal.querySelector('.popup__close');

  if(modal) modal.classList.remove('popup_is-opened');

  document.removeEventListener('keydown', closeModalWithEsc);
  btnModalClose.removeEventListener('click', closeModal);
  modal.removeEventListener('click', closeModalOverlay);
}

//Close Modal Window with button "Esc"
function closeModalWithEsc(evt) {
  if(evt.code === 'Escape') closeModal();
}

//Close Modal Window with Overlay
function closeModalOverlay(evt) {
  if(evt.target.classList.contains('popup')) closeModal();
}

//Function Open Modal Window
export function openModal(modal) {
  const btnModalClose = modal.querySelector('.popup__close');

  modal.classList.add('popup_is-animated');
  setTimeout(() => {modal.classList.add('popup_is-opened')}, 0);

  btnModalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalWithEsc);
  modal.addEventListener('click', closeModalOverlay);
}


