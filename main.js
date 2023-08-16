import './style.css'
const $ = r => document.querySelector(r)
const fila = $('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

//BTNCANDIDATAS
const btnCandidata1 = $("#img-candidata-1")
const btnCandidata2 = $("#img-candidata-2")
const btnCandidata3 = $("#img-candidata-3")
const btnCandidata4 = $("#img-candidata-4")
const btnCandidata5 = $("#img-candidata-5")
const btnCandidata6 = $("#img-candidata-6")
const btnCandidata7 = $("#img-candidata-7")
const btnCandidata8 = $("#img-candidata-8")
const btnCandidata9 = $("#img-candidata-9")
const btnCandidata10 = $("#img-candidata-10")
const btnCandidata11 = $("#img-candidata-11")
const btnCandidata12 = $("#img-candidata-12")

const informacionContenedor = $("#indormacion-integrantes")

const flechaIzquierda = $('#flecha-izquierda');
const flechaDerecha = $('#flecha-derecha');
const btnAturorizacion = $("#btn-autorizacion")
const btnIr = $("#btn-propuestas-ir")
const btninicio = $("#a-inicio")
const btnCandidatos= $("#a-candidatos")
const btnPropuestas = $("#a-propuestas")
const btnVisionMision = $("#a-vison-mision")


// ------- ------- BTN AUTORIZACION ------- ------
btnAturorizacion.addEventListener("click", () => {
  window.open("https://drive.google.com/drive/folders/1SiG8Ol56LhzlVdasUn3BdKaN7krG4-2f?usp=sharing", "_blank")
})

// ------- ------- BTN candidatas ------- ------
btnCandidata1.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "María Renee Chavez Ortiz",
	cargo = "Presidenta",
	tel = "4608-1168",
	promedio = "90-100",
	grado24 = "Cuarto Bachillerato en computación",
	correo = "20140008",
	promedioAcademico = "99.1",
	gradoActual = "Tercero Básico D",
	img = "img/1.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})

btnCandidata2.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "Jimena Barreda González",
	cargo = "Vicepresidenta",
	tel = "5940-5607",
	promedio = "90-100",
	grado24 = "Cuarto Bachillerato en ciencias y letras",
	correo = "20190095",
	promedioAcademico = "97.1",
	gradoActual = "Tercero Básico D",
	img = "img/2.png"
	
	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})
btnCandidata3.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "Nicole Rangel Almazán",
	cargo = "Secretaria y Encargada de R.R.P.P.",
	tel = "4175-6842",
	grado24 = "Quinto Bachillerato en computación",
	correo = "20110267",
	promedioAcademico = "89.6",
	gradoActual = "Cuarto Bachillerato en computación",
	img = "img/3.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})

btnCandidata4.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "Valeria Estefanía Mansilla Orellana",
	cargo = "Vocal de Tecnología",
	tel = "3806-7381",
	grado24 = "Segundo Básico",
	correo = "20130157",
	promedioAcademico = "94.8",
	gradoActual = "Primero Básico E",
	img = "img/4.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})

btnCandidata5.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "Débora Esther Cruz Sagastume",
	cargo = "Vocal de Tecnología",
	tel = "5821-5353",
	grado24 = "Primero Básico",
	correo = "20180114",
	promedioAcademico = "95.9",
	gradoActual = "Sexto primaria",
	img = "img/5.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})

btnCandidata6.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "Karla Leticia Flores Veliz",
	cargo = "Vocal de Civismo y Proyección",
	tel = "4541-0536",
	grado24 = "Tercero Básico",
	correo = "20130142",
	promedioAcademico = "92.5",
	gradoActual = "Segundo básico",
	img = "img/6.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})

btnCandidata7.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "Liliana Kang",
	cargo = "Vocal de Salud y Bienestar",
	tel = "5629-0460",
	grado24 = "Segundo Básico",
	correo = "20170177",
	promedioAcademico = "96.3",
	gradoActual = "Primero básico",
	img = "img/7.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})

btnCandidata8.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "María Daniela Soto Marroquín",
	cargo = "Vocal de Inglés",
	tel = "5986-5087",
	grado24 = "Sexto Empresarial",
	correo = "20160258",
	promedioAcademico = "85.6",
	gradoActual = "Quinto Empresarial",
	img = "img/8.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})
	
	btnCandidata9.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "Alexia Sara Daniela Cuevas Pedraza",
	cargo = "Vocal de Inglés",
	tel = "5332-1951",
	grado24 = "Sexto Magisterio",
	correo = "20220071",
	promedioAcademico = "92",
	gradoActual = "Quinto Magisterio",
	img = "img/9.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})

btnCandidata10.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "Kristel Betsabé Sáenz Posadas",
	cargo = "Vocal de Formación Cristiana",
	tel = "5634-8683",
	grado24 = "Primero Básico",
	correo = "20140061",
	promedioAcademico = "99.3",
	gradoActual = "Sexto de primaria ",
	img = "img/10.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})

btnCandidata11.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "Marcela del Rosario Fajardo Sanchez ",
	cargo = "Vocal de Cultura y Arte",
	tel = "3540-3382",
	grado24 = "Cuarto bachillerato en diseño gráfico",
	correo = "20130109",
	promedioAcademico = "96.9",
	gradoActual = "Tercero Básico",
	img = "img/11.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})

btnCandidata12.addEventListener("click", e => {
	e.preventDefault()
	informacionContenedor.scrollIntoView({ behavior: 'smooth' });
	const nombre = "Ximena Castillo Sanchez",
	cargo = "Vocal de Eco-Science",
	tel = "5691-1665",
	grado24 = "Tercero Básico",
	correo = "20140094",
	promedioAcademico = "91.3",
	gradoActual = "Segundo Básico",
	img = "img/12.png"

	candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img)
})

// ------- ------- FUNCION CAMBIAR HTML ------- ------
function candidataInfo(nombre, cargo, tel, grado24, correo, promedioAcademico, gradoActual, img){
	const nombreIntegrante = $("#nombre-integrante")
	const cargoIntegrante = $("#cargo-integrante")
	const telefonoIntegrante = $("#telefono")
	const promedioActIntegrante = $("#promedioAct")
	const grado24Integrante = $("#grado24")
	const correoIntegrante = $("#correo")
	const promedioAcademicoIntegrante = $("#promedioAcademico")
	const gradoCursandoIntegrante = $("#gradoCursando")
	const imgInformacionIntegrantes = $("#img-informacion-integrantes")
	
	nombreIntegrante.textContent = nombre 
	cargoIntegrante.textContent = cargo 
	telefonoIntegrante.textContent = tel 
	promedioActIntegrante.textContent = "90-100" 
	grado24Integrante.textContent = grado24 
	correoIntegrante.textContent = correo 
	promedioAcademicoIntegrante.textContent = promedioAcademico 
	gradoCursandoIntegrante.textContent = gradoActual 
	imgInformacionIntegrantes.src = img
}

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

btnVisionMision.addEventListener("click", (e) => {
	e.preventDefault()
	const sitio = $("#menu")
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