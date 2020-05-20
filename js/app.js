/*variables for selecting elements*/
const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  const text = input.value;
  input.value = "";
  li.textContent = text;
  ul.appendChild(li);
})
