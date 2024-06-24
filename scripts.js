document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    if (!validateEmail(email)) {
        showError('Correo electrónico no válido');
        return;
    }
    
    // Aquí puedes agregar más validaciones y lógica para manejar el inicio de sesión
    console.log('Iniciar sesión:', { email, password, role });
    
    // Simulación de éxito en el inicio de sesión
    alert('Inicio de sesión exitoso');
    // Redirigir a la página correspondiente
    // window.location.href = '/dashboard.html';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}
