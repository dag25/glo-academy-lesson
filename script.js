const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const e_btn = document.getElementById('e_btn');
const textSpan = document.getElementById('text-span');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');



btn.addEventListener('click', () => {
  square.style.backgroundColor = input.value;
  e_btn.style.display = 'none';
});

range.addEventListener('input', (event) => {
  rangeSpan.textContent = event.target.value;
  circle.style.width = event.target.value + '%';
  circle.style.height = event.target.value + '%';
});
