
let divContenedor = document.getElementsByClassName('contenedor-cartas') 
let template = document.querySelector('.contenedor-cartas')
const datos = {
    contenedor: '.contenedor-cartas'
};
  
const contenedorCartas = document.querySelector(datos.contenedor);

const boton1 = document.getElementsByClassName('boton1')[0];
const boton2 = document.querySelector('.boton2');
boton1.addEventListener('click',()=>{
  console.log('Botón 1 clickeado!');
  mostrarToast()
});

boton2.addEventListener('click', ()=> {
  console.log('Botón 2 clickeado!');
  mostrarToast()
});

//Agregando las tostaditas
function mostrarToast(){
    Toastify({
        text: '¡Agregado al carrito 🌟!',
        duration: 2000,
        position: 'center',
    }).showToast();
}

const totalPagoAmount = document.getElementById('total-pago-amount');
let total = 0;
boton1.addEventListener('click', () => {
  total += 35499;
  actualizarTotal();
  guardarCompra();

});
boton2.addEventListener('click', () => {
  total += 22500;
  actualizarTotal();
  guardarCompra();
});

function actualizarTotal() {
  totalPagoAmount.innerText = `¡Total del pago🤑!: $${total}`;
}

// Función para guardar la compra en localStorage
function guardarCompra() {
  localStorage.setItem('totalCompra', total);
}

// Función para recuperar la compra de localstorage
function recuperarCompra() {
  const totalGuardado = localStorage.getItem('totalCompra');
  if (totalGuardado) {
    total = parseInt(totalGuardado);
    actualizarTotal();
  }
}

//Aca lo que hacemos es que mediante un boton llamado cancelar compra, la compra se resetee a 0


document.addEventListener('DOMContentLoaded', function() {
  recuperarCompra();
});

document.querySelector('.cancelar-compra').addEventListener('click', ()=>{
  total = 0;
  actualizarTotal()
  localStorage.removeItem('totalCompra');
})

//Tostadita para el realizar compra



document.querySelector('.hacer-compra').addEventListener('click', ()=> {
  Toastify({
    text: '¡Gracias por realizar la compra!',
    duration: 2000,
    position: 'center',
  }).showToast();
})

document.querySelector('.hacer-compra').addEventListener('click', ()=>{
  total = 0;
  actualizarTotal()
  localStorage.removeItem('totalCompra');
})


