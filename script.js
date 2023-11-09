document.addEventListener("DOMContentLoaded", function () {
    const comentariosLista = document.getElementById("comentarios-lista");
    const formularioComentario = document.getElementById("formulario-comentario");

    formularioComentario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const mensaje = document.getElementById("mensaje").value;

        if (nombre && mensaje) {
            const comentario = document.createElement("div");
            comentario.className = "comentario";
            comentario.innerHTML = `<strong>${nombre}:</strong> ${mensaje}`;
            comentariosLista.appendChild(comentario);

            // Limpiar los campos del formulario después de agregar el comentario
            document.getElementById("nombre").value = "";
            document.getElementById("mensaje").value = "";
        }
    });
});
