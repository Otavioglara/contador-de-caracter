document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Aqui você pode adicionar a lógica para processar o login
    console.log('Email:', email);
    console.log('Senha:', password);

    // Redireciona para a página caracter.html após o login
    window.location.href = 'caracter.html';
});
