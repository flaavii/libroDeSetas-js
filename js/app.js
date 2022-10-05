/*
// pregunta por prompt la edad, la guarda en el localStorage  
function conocerEdad() {
  let edad = localStorage.getItem("edad");
  if (edad == null) {
    edad = prompt("Ingrese su edad");
  }
  localStorage.setItem("edad", edad);
  // OPERADOR TERNARIO
  edad < 18 ? alert("Eres menor de edad, cuentale a un adulto sobre Libro de Setas"): alert("Vamos a crear tu Libro de Cultivo" );

}

conocerEdad();
*/

//crear usuario
class Usuario {
  constructor(nombre, mail, location) {
    this.nombre = nombre;
    this.mail = mail;
    this.location = location;
  }
}

let boton = document.getElementById("enviarInfo");
boton.addEventListener("click", cargarUsuario);



//capturar elementos
let arrayCliente = [];
let cart = [];

function cargarUsuario() {
  let nombre = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let location = document.getElementById("location").value;
  let usuario1 = new Usuario(nombre, mail, location);
  arrayCliente.push(usuario1);
  console.log(usuario1);
  mostrarUsuario(usuario1);

//guarda los datos del usuario en el localStorage
  localStorage.setItem("usuario", JSON.stringify( arrayCliente ));
  
  /* Template y uso los metodos DOM para enviar la información*/
  arrayCliente.forEach((usuario) => {
    const div = document.createElement("div");
    let contenido = document.getElementById("contenidoCliente");
contenido.innerHTML=""
    div.innerHTML = `<div d-flex><h2>Usuario</h2></div>
  <div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item"><strong>Nombre:</strong> ${usuario.nombre}</li>
  <li class="list-group-item"><strong>Email:</strong> ${usuario.mail}</li>
  <li class="list-group-item"><strong>Pais:</strong> ${usuario.location}</li>
  </ul>
  </div>
  
  `;
  
    contenido.appendChild(div);
    
  });

  Toastify({
    text: "Cargamos tus datos, encuentralos en el menú de opciones",
    duration: 3000,
    close: true,
    gravity: "bottom", 
    position: "right",  
    style: {
    background: "#312954",
    },
    offset: {
      x: 2.5,
      y: 2.5
    },
  }).showToast();
}
  


//crear usuario
function mostrarUsuario(usuario) {
  let formulario = document.getElementById("customer");
  formulario.innerHTML = "";

  //agregar mensaje
  let nuevoContenido = document.createElement("div");
  nuevoContenido.innerHTML = `<h3> Bienvenidx ${usuario.nombre}!</h3><h4>Elegí una variedad para crear Tu Libro de Setas</h4>`;

  nuevoContenido.className = "info-usuario";
  formulario.appendChild(nuevoContenido);
}

/*creacion de setas

let setas = [
  {
    id: 1,
    variedad: "B+",
    tiempoCultivo: 6,
    imagen: "./img/b+.webp",
  },
  {
    id: 2,
    variedad: "Golden Teacher",
    tiempoCultivo: 10,
    imagen: "./img/goldenTeacher.webp",
  },
  {
    id: 3,
    variedad: "Malbar Coast",
    tiempoCultivo: 15,
    imagen: "./img/malbarCoast.webp",
  },
  {
    id: 4,
    variedad: "Thai Koh Samui",
    tiempoCultivo: 12,
    imagen: "./img/thaiKohSamui.jpeg",
  },
];

const dibujarSetas = () => {
  let contenedor = document.getElementById("container");
  setas.forEach((seta) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-3", "col-lg-2");
    card.innerHTML = `<img src="${seta.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${seta.variedad}</h5>
          <p id="p" class="card-text text-center">El tiempo estimado para cosechar es de ${seta.tiempoCultivo} días.</p>
          <a href="#" class="btn btn-outline-dark d-grid comenzarLibro" id='setas-${seta.id}' data-bs-toggle="modal" data-bs-target="#exampleModal">Comenzar Libro</a>
          </div>`;
    contenedor.appendChild(card);
  });
  
};

dibujarSetas();
*/

// CREO LAS SETAS USANDO FETCH - NO FUNCIONA
const dibujarSetas = document.querySelector("#container")

fetch ("/data.json")
.then((res)=>res.json())
.then((data)=>{
  data.forEach((seta) => {
    
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-3", "col-lg-2");
    card.innerHTML = `<img src="${seta.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${seta.variedad}</h5>
          <p id="p" class="card-text text-center">El tiempo estimado para cosechar es de ${seta.tiempoCultivo} días.</p>
          <a href="#" class="btn btn-outline-dark d-grid comenzarLibro" id='setas-${seta.id}' data-bs-toggle="modal" data-bs-target="#exampleModal">Comenzar Libro</a>
          </div>`;
    contenedor.appendChild(card);
  });

  })


//Llamo al todos los botones con clase comenzarLibro
const btncomenzarLibro = document.getElementsByClassName("comenzarLibro");

//Ciclo para agregar la funcion agregarLibro, a todo los botones btncomenzarLibro

// NO FUNCIONA import Swal from 'sweetalert2';
for (const btn of btncomenzarLibro) {
  btn.onclick = agregarLibro; 
}

// Funcion para seleccionar Setas
function agregarLibro(e) {
  const btn = e.target;
  const id = btn.id.split("-")[1];
  const seta = setas.find((p) => p.id == id);
  

  /* creo Array para enviar la informacion con la cual voy a mostrar */
  cart.push(seta);
  console.log(cart);
  /* creo template sobre el modal */
  cart.forEach((seta) => {
    /* selecciono el DIV del modal donde se ubicará la info */
    const div = document.createElement("div");
    let contenido = document.getElementById("contenidoSetas");
    /* Creo unas Card copiadas de Bootstrap */
    contenido.innerHTML = "";
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${seta.imagen}" class="card-img-top" alt="${seta.variedad}">
    <div class="card-body">
      <h5 class="card-title text-center">${seta.variedad}</h5>
      <p class="card-text text-center">El tiempo estimado para cosechar es de ${seta.tiempoCultivo} días.</p>
    </div>
  </div>
  
  `;
  
    contenido.appendChild(div);
  });
}

// OPERADOR LOGICO AND
cart.length === 0 && console.log("El libro está vacio");