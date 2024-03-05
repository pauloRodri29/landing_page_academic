document.getElementById('floating-btn-toggle').addEventListener('click', function() {
    var menu = document.getElementById('floating-menu');
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
  

  ///forms
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obter os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Aqui você pode adicionar lógica para enviar os dados para um servidor
    // ou exibir uma mensagem de sucesso
  
    // Limpar os campos do formulário após o envio
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
  