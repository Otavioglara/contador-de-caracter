document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    
    if (email !== confirmEmail) {
        alert('Os emails não coincidem!');
    } else {
        alert('Registro bem-sucedido!');
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
    }
});
