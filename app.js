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
function cargarUsuario(){
    let nombre = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let location= document.getElementById("location").value;
    let usuario1 = new Usuario(nombre, mail, location);
    console.log(usuario1);
    mostrarUsuario(usuario1);

}

//eliminar elementos
function mostrarUsuario(usuario){
    let formulario = document.getElementById("customer");
    formulario.innerHTML = "";

//agregar mensaje
let nuevoContenido = document.createElement("div");
nuevoContenido.innerHTML = `<h3> Bienvenidx ${usuario.nombre}!</h3><h4>es momento de elegir la Seta</h4>`;

nuevoContenido.className = "info-usuario";
formulario.appendChild(nuevoContenido);
}


//creacion de setas 

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
];

const dibujarSetas = () => {
  let contenedor = document.getElementById("container");
  setas.forEach((seta) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    card.innerHTML = `<img src="${seta.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${seta.variedad}</h5>
          <p id="p" class="card-text text-center">El tiempo estimado para tu cultivo es de ${seta.tiempoCultivo} días.</p>
          <a href="#" class="btn btn-outline-dark d-grid comenzarLibro" id='setas-${seta.id}'>Comenzar Libro</a>
          </div>`;
    contenedor.appendChild(card);
  });
};

dibujarSetas();


/*Llamo al todos los botones con clase comenzarLibro 
const btncomenzarLibro = document.getElementsByClassName("comenzarLibro");


/* Ciclo para agregar la funcion agregarLibro, a todo los botones btncomenzarLibro 
for (const btn of btncomenzarLibro) {
  btn.onclick = agregarLibro;
}

agregarLibro();

// Funcion para seleccionar Setas 
function agregarLibro(e) {
    const btn = e.target
    const id = btn.id.split('-')[1]

    
    const seta = setas.find(p => p.id == id)
    console.log('Creando libro', seta)
}

*/

//Creacion de libro
let cart = [];
let modalLibro = document.getElementById("cart");

//Si la seleccion es mayor a 0 crear el libro
let total = 0;
const dibujarLibro = () => {
  modalLibro.className = "cart";
  modalLibro.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((seta, indice) => {
      total = total + seta.tiempoCultivo + seta.tiempoCultivo;
      const libroConteiner = document.createElement("div");
      libroConteiner.className = "seta-libro";
      libroConteiner.innerHTML = `
            <img class="card.img" src= "${seta.imagen}"/>
            <div class="product-details">${seta.variedad}</div>
            <div class="product-details">Seta:${seta.variedad}</div>
            <div class="product-details">Dias de cultivo:${seta.tiempoCultivo}</div>
            <div class="product-details">Estimado:${seta.tiempoCultivo}</div>
            <button class="btn btn-info" id="removeProduct" onClick="remove-product(${indice})>Eliminar Selección</button> `;

      modalLibro.appendChild(libroConteiner);   
      libroConteiner();  
    });

  // Una vez creado el libro expresar el total y crear boton de finalizar o remover
    const totalConteiner = document.createElement("div");
    totalConteiner.className = "total-libro";
    totalConteiner.innerHTML = `<div class="total"> TIEMPO: ${total}</div>
        <button class= "btn btn-info finalizar" id="finalizar" onClick="finalizarLibro">`;
    modalLibro.appendChild(totalConteiner);
  } else {
    modalLibro.classList.remove("cart");
  }

  totalConteiner();
};

const removeProduct = (indice) => {
  cart.splice(indice, 1);
  dibujarLibro();
};

const finalizarLibro = () => {
  const total = document.getElementsByClassName("total")[0].innerHTML;
  modalLibro.innerHTML = "";
  const libroFinalizado = `<div class="libro-finalizado"><p class= "libro-parrafo">SE CREÓ TU LIBRO</p></div>`;
  modalLibro.innerHTML = libroFinalizado;

  libroFinalizado();
};




