

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
  mostrarUsuario(usuario1);

//guarda los datos del usuario en el localStorage
  localStorage.setItem("usuario", JSON.stringify( arrayCliente ));
  
//template y envio de informacion 
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
    text: "Cargamos tus datos, encontralos en el menú de opciones",
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

//crear card setas 
const dibujarSetas = document.querySelector("#container");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((seta) => {
      let contenedor = document.getElementById("container");
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
  
    for (const btn of btncomenzarLibro) {
      btn.onclick = agregarLibro;
    }

    //funcion para seleccionar Setas
    function agregarLibro(e) {
      const btn = e.target;
      const id = btn.id.split("-")[1];
      const seta = data.find((p) => p.id == id);
    
      //envia informacion a cart
      cart.push(seta);

      //guarda los datos de la seta elegida en el localStorage
  localStorage.setItem("seta", JSON.stringify( seta));
      

      //creo modal
      cart.forEach((seta) => {
      
        const div = document.createElement("div");
        let contenido = document.getElementById("contenidoSetas");
        
        contenido.innerHTML = "";
        div.innerHTML = `<div class="card" style="width: 17rem;">
        <img src="${seta.imagen}" class="card-img" alt="${seta.variedad}">
        <div class="card-body">
          <h5 class="card-title text-center">Cultivo de ${seta.variedad}</h5>
          <p class="card-text text-center">El tiempo estimado para cosechar es de ${seta.tiempoCultivo} días.</p>
        </div>
      </div>
      
      `;
        contenido.appendChild(div);
      });
    }});

//Llamo al todos los botones con clase comenzarLibro
const btncomenzarLibro = document.getElementsByClassName("comenzarLibro");

//Ciclo para agregar la funcion agregarLibro, a todo los botones btncomenzarLibro
for (const btn of btncomenzarLibro) {
  btn.onclick = agregarLibro;
} 

//Funcion para seleccionar Setas
function agregarLibro(e) {
  const btn = e.target;
  const id = btn.id.split("-")[1];
  const seta = setas.find((p) => p.id == id);

  //envio informacion 
  cart.push(seta);

  //creacion de modal
  cart.forEach((seta) => {
    
    const div = document.createElement("div");
    let contenido = document.getElementById("contenidoSetas");
    
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

//llamo al boton btnEntrada y con el creo un div en modal
btnEntrada.addEventListener('click', e => {
  agregarEntrada(e)
})

function agregarEntrada(e) {

let entrada = document.getElementById("nuevaEntrada");
const div = document.createElement("div");


entrada.innerHTML =`<div class="my-4 mx-2">

<div class="input-group my-2">

  <input id="fecha" type="text" class="form-control" placeholder="Fecha" aria-label="Fecha" aria-describedby="basic-addon1">
  </div>

  <div class="form-floating mb-2">
  <select id="accion" class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected class= "bold">Seleccioná una acción</option>
    <option value="Esterilización">Esterilización</option>
    <option value="Hidratación de esporas">Hidratación de esporas</option>
    <option value="Inoculación">Inoculación</option>
    <option value="Armado de bulk">Armado de bulk</option>
    <option value="Cosecha">Cosecha</option>
    <option value="Secado y guardado">Secado y guardado</option>
    <option value="Otra">Otra</option>
  </select>
  <label for="floatingSelect">Acciones:</label>
</div>

<div class="form-floating mb-3">
<textarea id="observacion" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
<label for="floatingTextarea2">Observaciones</label>
</div>

</div>
  `;

  
  entrada.appendChild(div);


}

//crear entrada
class Entrada {
  constructor(fecha, accion, observacion) {
    this.fecha = fecha;
    this.accion = accion;
    this.observacion = observacion;
  }
}

//capturar elementos
let arrayEntrada = [];

let boton1 = document.getElementById("enviarEntrada");
boton1.addEventListener("click", cargarEntrada);

function cargarEntrada() {
  let fecha = document.getElementById("fecha").value;
  let accion = document.getElementById("accion").value;
  let observacion = document.getElementById("observacion").value;
  let entrada1 = new Entrada(fecha, accion, observacion);
  arrayEntrada.push(entrada1);
  

//guarda los datos de la entrada en el localStorage
  localStorage.setItem("entrada", JSON.stringify( arrayEntrada ));
  
//template y envio de informacion 
  arrayEntrada.forEach((entrada) => {
    const div = document.createElement("div");
    let contenido = document.getElementById("contenidoEntrada");
contenido.innerHTML=""
    div.innerHTML = `<div class= "d-flex mx-3"><h5 class="text-center m-3">Listo!<br> Tomamos nota de tu bitacora para crear en comunidad el Libro de Setas definitivo.<br> Pronto nos contactaremos por mail para contarte mas, hasta luego!</h5></div>
  <div>
  <ul class="list-group list-group-flush mb-3">
  <li class="list-group-item"><strong>Fecha:</strong> ${entrada.fecha}</li>
  <li class="list-group-item"><strong>Acción:</strong> ${entrada.accion}</li>
  <li class="list-group-item overflow-auto"><strong>Observaciones:</strong> ${entrada.observacion}</li>
  </ul>
  </div>
  
  `;
  
  
  contenido.appendChild(div);
 
  });

  Toastify({
    text: "Guardamos tu entrada, Gracias por participar!",
    duration: 4000,
    close: true,
    gravity: "bottom", 
    position: "right",  
    style: {
    background: "brown",
    },
    offset: {
      x: 2.5,
      y: 2.5
    },
  }).showToast();
}

// muestra inicio vacio
cart.length === 0 && localStorage.setItem("libro-nuevo", JSON.stringify(cart));
