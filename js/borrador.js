//Llamo al todos los botones con clase comenzarLibro
const btncomenzarLibro = document.getElementsByClassName("comenzarLibro");

//Ciclo para agregar la funcion agregarLibro, a todo los botones btncomenzarLibro

// NO FUNCIONA import Swal from 'sweetalert2';
for (const btn of btncomenzarLibro) {
  btn.onclick = agregarLibro;
/*NO FUNCIONA
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )
  */
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

/* crear entrada <div> BOOTSTRAP formato card
{
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>

elegir accion <div> BOOTSTRAP formato dropstart

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

*/ 
