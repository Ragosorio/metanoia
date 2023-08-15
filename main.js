import './style.css'
const $ = r => document.querySelector(r)
const fila = $('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = $('#flecha-izquierda');
const flechaDerecha = $('#flecha-derecha');
const btnAturorizacion = $("#btn-autorizacion")
const btnIr = $("#btn-propuestas-ir")
const btninicio = $("#a-inicio")
const btnCandidatos= $("#a-candidatos")
const btnPropuestas = $("#a-propuestas")


// ------- ------- BTN AUTORIZACION ------- ------
btnAturorizacion.addEventListener("click", () => {
  window.open("https://drive.google.com/drive/folders/1SiG8Ol56LhzlVdasUn3BdKaN7krG4-2f?usp=sharing", "_blank")
})

// ? ----- ----- Event Listener para btn de ir y de los a ----- -----
btnIr.addEventListener("click", () => {
  const sitio = $("#propuestas-contenedor")
  sitio.scrollIntoView({ behavior: 'smooth' });
})

btninicio.addEventListener("click", (e) => {
  e.preventDefault()
  const sitio = $("#inicio")
  sitio.scrollIntoView({ behavior: 'smooth' });
})

btnCandidatos.addEventListener("click", (e) => {
  e.preventDefault()
  const sitio = $("#contenedor-candidatas")
  sitio.scrollIntoView({ behavior: 'smooth' });
})

btnPropuestas.addEventListener("click", (e) => {
  e.preventDefault()
  const sitio = $("#propuestas-contenedor")
  sitio.scrollIntoView({ behavior: 'smooth' });
})

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});