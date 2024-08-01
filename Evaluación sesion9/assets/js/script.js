let tareas = [
    { tarea: "Pintar la reja de la casa" },
    { tarea: "Comprar el pan" },
    { tarea: "Sacar la basura" },
    { tarea: "Pagar las cuentas de la casa" }
];

document.addEventListener('DOMContentLoaded', function () {
    const mostrarFormularioBtn = document.getElementById('mostrar-formulario');
    const formulario = document.getElementById('formulario');
    const formTarea = document.getElementById('form-tarea');
    const nuevaTareaInput = document.getElementById('nuevaTarea');
    const cuerpoTabla = document.getElementById('cuerpo-tabla');

    function toggleFormulario() {
        if (formulario.style.display === 'none' || formulario.style.display === '') {
            formulario.style.display = 'block';
        } else {
            formulario.style.display = 'none';
        }
    }

    function renderTareas() {
        cuerpoTabla.innerHTML = '';
        tareas.forEach((item, index) => {
            const tr = document.createElement('tr');

            const tdTarea = document.createElement('td');
            tdTarea.textContent = item.tarea;
            tr.appendChild(tdTarea);

            const tdFinalizar = document.createElement('td');
            const btnFinalizar = document.createElement('button');
            btnFinalizar.textContent = 'Finalizar';
            btnFinalizar.classList.add('btn', 'btn-danger');
            btnFinalizar.addEventListener('click', function () {
                tareas.splice(index, 1);
                renderTareas();
            });
            tdFinalizar.appendChild(btnFinalizar);
            tr.appendChild(tdFinalizar);

            cuerpoTabla.appendChild(tr);
        });
    }

    mostrarFormularioBtn.addEventListener('click', toggleFormulario);

    formTarea.addEventListener('submit', function (event) {
        event.preventDefault();
        const nuevaTarea = nuevaTareaInput.value.trim();
        if (nuevaTarea !== '') {
            tareas.push({ tarea: nuevaTarea });
            nuevaTareaInput.value = '';
            renderTareas();
            toggleFormulario();
        }
    });

    renderTareas();
});
