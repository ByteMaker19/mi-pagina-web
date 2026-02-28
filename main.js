// Menu hamburguesa
const btn = document.querySelector('.menu-btn'); 
const menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('open');
});


function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('#contenido section');
  secciones.forEach(sec => sec.classList.remove('activo'));
  const seccion = document.getElementById(id);
  if(seccion) {
    seccion.classList.add('activo');
    seccion.scrollIntoView({ behavior: 'smooth' });
  }
}


document.querySelectorAll('.menu a').forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    const id = enlace.dataset.contenido;
    mostrarSeccion(id);
    menu.classList.remove('open'); 
  });
});


document.querySelectorAll('#contenido a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    const id = enlace.getAttribute('href').substring(1);
    mostrarSeccion(id);
  });
});

const form = document.getElementById('form-contacto');  
const mensajeExito = document.getElementById('mensaje-exito');

form.addEventListener('submit', (e) => { 
  e.preventDefault(); 
  mensajeExito.textContent = "¡Gracias! Tu mensaje ha sido enviado.";
  form.reset(); 
});

const tarjetas = document.querySelectorAll('.tarjeta');
tarjetas.forEach(tarjeta => {
  tarjeta.classList.add('visible');
});


const irContactos = document.getElementById("irContactos");


irContactos.addEventListener("click", function() {
  mostrarSeccion("contacto")
});

const iryou = document.getElementById("youtube");

iryou.addEventListener("click", function() {
  window.location.assign('https://www.youtube.com/@CIPFPLaTorretadeElche')
});

const irins = document.getElementById("instagram");

irins.addEventListener("click", function() {
  window.location.assign('https://www.instagram.com/cipfplatorretaelche/')
});

document.querySelectorAll('.faq-item h3').forEach(pregunta => {
  pregunta.addEventListener('click', () => {
    pregunta.parentElement.classList.toggle('activo');
  });
});