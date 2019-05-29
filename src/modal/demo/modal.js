const btn = document.querySelector('.js-button');
const modal = document.querySelector('.js-modal');
const content = document.querySelector('.js-modal-content');

let modalFocusTrap;

btn.addEventListener('click', () => {
  modal.classList.toggle('modal--open');

  modalFocusTrap = focusTrap(content, {
    initialFocus: content,
    clickOutsideDeactivates: true,
    onDeactivate: () => {
      modal.classList.toggle('modal--open');
    }
  });

  modalFocusTrap.activate();
});