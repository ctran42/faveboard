const buttons = document.querySelectorAll('.media-btn');
const hiddenInput = document.getElementById('media-type-input');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    hiddenInput.value = btn.dataset.type; // Set hidden input value
  });
});