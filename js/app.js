//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners() {
//"agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

//elimina cursos
    carrito.addEventListener('click', eliminarCurso);
//Vaciar mi carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
    })
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();


    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
    
        leerDatosCurso(cursoSeleccionado);
    }
}

//Eliina curso

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
        
        carritoHTML();
    }
}

//extracción de la información del curso
function leerDatosCurso(curso) {
/*     console.log(curso); */

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
        }

//revisa si existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        })
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    console.log(articulosCarrito);

    carritoHTML();
}


// carrito de compras en HTML
function carritoHTML() {

    //limpia
    limpiarHTML();

    
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>

        <td>
            ${curso.titulo}
        </td>

        <td>
            ${curso.precio}
        </td>

        <td>
            ${curso.cantidad}
        </td>

        <td>
           <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>
        `;
//Esto agrega el HTML del carrito en mi tbody
        contenedorCarrito.appendChild(row);
    });
} 

//eliminar cursos

function limpiarHTML() {

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}