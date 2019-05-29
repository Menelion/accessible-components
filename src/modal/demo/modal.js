const openModalButton = document.getElementById('open-modal-button');
const modal = document.getElementById('modal');
const content = document.getElementById('modal-content');
const closeButton = document.getElementById('modal-close-button');

let modalFocusTrap;

openModalButton.addEventListener('click', () => {
  modal.classList.toggle('modal--open');

  modalFocusTrap = focusTrap(content, {
    clickOutsideDeactivates: true,
    onDeactivate: () => {
      modal.classList.toggle('modal--open');
    }
  });

  modalFocusTrap.activate();
});

closeButton.addEventListener('click', () => {
  modalFocusTrap.deactivate();
});