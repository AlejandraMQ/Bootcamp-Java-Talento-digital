// Mostrar y ocultar el div #text2
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

text1.addEventListener('mouseenter', () => {
    text2.classList.remove('hidden');
});

text1.addEventListener('mouseleave', () => {
    text2.classList.add('hidden');
});

// Agrandar imagen al hacer clic
const caja2 = document.getElementById('caja2');
const img = document.getElementById('img');

caja2.addEventListener('click', () => {
    img.style.width = '40%';
});

caja2.addEventListener('mouseleave', () => {
    img.style.width = '20%';
});

// Agrandar texto al hacer doble clic
const caja3 = document.getElementById('caja3');

caja3.addEventListener('dblclick', () => {
    caja3.classList.toggle('p-large');
});
