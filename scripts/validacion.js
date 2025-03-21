document.getElementById('asistenciaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Formulario enviado correctamente');
    }
});

function validateForm() {
    let esValido = true;
    const nombreSoftware = document.getElementById('nombreSoftware').value;
    if (nombreSoftware.trim() === '') {
        document.getElementById('errorNombreSoftware').textContent = 'Este campo es obligatorio';
        document.getElementById('errorNombreSoftware').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('errorNombreSoftware').style.display = 'none';
    }

    const fechaAsistencia = document.getElementById('fechaAsistencia').value;
    if (fechaAsistencia === '') {
        document.getElementById('errorFechaAsistencia').textContent = 'Este campo es obligatorio';
        document.getElementById('errorFechaAsistencia').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('errorFechaAsistencia').style.display = 'none';
    }

    const horaInicio = document.getElementById('horaInicio').value;
    if (horaInicio === '') {
        document.getElementById('errorHoraInicio').textContent = 'Este campo es obligatorio';
        document.getElementById('errorHoraInicio').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('errorHoraInicio').style.display = 'none';
    }

    const duracion = document.getElementById('duracion').value;
    if (duracion === '' || duracion <= 0) {
        document.getElementById('errorDuracion').textContent = 'La duración debe ser un número entero positivo mayor a 0';
        document.getElementById('errorDuracion').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('errorDuracion').style.display = 'none';
    }

    const docenteSolicitante = document.getElementById('docenteSolicitante').value;
    if (docenteSolicitante === '' || !validarEmail(docenteSolicitante)) {
        document.getElementById('errorDocenteSolicitante').textContent = 'Ingrese un correo electrónico válido';
        document.getElementById('errorDocenteSolicitante').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('errorDocenteSolicitante').style.display = 'none';
    }

    // Validar Correo del Monitor Asignado
    const monitorAsignado = document.getElementById('monitorAsignado').value;
    if (monitorAsignado === '' || !validarEmail(monitorAsignado)) {
        document.getElementById('errorMonitorAsignado').textContent = 'Ingrese un correo electrónico válido';
        document.getElementById('errorMonitorAsignado').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('errorMonitorAsignado').style.display = 'none';
    }
    console.log(esValido);
    return esValido;
}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}