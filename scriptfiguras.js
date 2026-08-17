const contenedor = document.getElementById("contenedor");

const botonSelector = document.getElementById("botonSelector");
const menuFiguras = document.getElementById("menuFiguras");

const opcionesFigura = document.querySelectorAll(".opcion-figura");

const eliminarUltima = document.getElementById("eliminarUltima");

const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");

const MAX_FIGURAS = 5;

botonSelector.addEventListener("click", function () {

    menuFiguras.classList.toggle("mostrar");

});

function crearFigura(tipo) {

    if (contenedor.children.length >= MAX_FIGURAS) {

        contenedor.removeChild(
            contenedor.firstElementChild
        );

        mensaje.textContent =
            "Se eliminó la figura más antigua y se agregó la nueva.";
    }

    const imagenNueva = document.createElement("img");

    if (tipo === "circulo") {

        imagenNueva.src = "../ui/figuras/circulo.png";

    }

    else if (tipo === "cuadrado") {

        imagenNueva.src = "../ui/figuras/cuadrado.png";

    }

    else if (tipo === "triangulo") {

        imagenNueva.src = "../ui/figuras/2.png";

    }

    imagenNueva.classList.add("figura");

    contenedor.appendChild(imagenNueva);

    actualizarContador();

    if (contenedor.children.length < MAX_FIGURAS) {

        mensaje.textContent =
            "Se agregó un " + nombreFigura(tipo);

    }

    menuFiguras.classList.remove("mostrar");
}

function nombreFigura(tipo) {

    if (tipo === "circulo") {
        return "círculo";
    }

    if (tipo === "cuadrado") {
        return "cuadrado";
    }

    if (tipo === "triangulo") {
        return "triángulo";
    }

}

opcionesFigura.forEach(function (opcion) {

    opcion.addEventListener("click", function () {

        const tipoFigura = opcion.dataset.figura;

        crearFigura(tipoFigura);

    });

});

eliminarUltima.addEventListener("click", function () {

    if (contenedor.children.length === 0) {

        mensaje.textContent =
            "No hay figuras para eliminar.";

        return;
    }

    const ultimaFigura =
        contenedor.lastElementChild;

    contenedor.removeChild(ultimaFigura);

    actualizarContador();

    mensaje.textContent =
        "Se eliminó la última figura.";

});

function actualizarContador() {

    const cantidadFiguras =
        contenedor.children.length;

    contador.textContent =
        cantidadFiguras;

}

document.addEventListener("click", function (evento) {

    if (!evento.target.closest(".selector-contenedor")) {

        menuFiguras.classList.remove("mostrar");

    }

});