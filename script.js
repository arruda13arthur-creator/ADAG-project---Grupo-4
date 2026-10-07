// Função para decodificar o token JWT que o Google envia
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }
  
  // Atualize a função 'handleCredentialResponse' que criamos no passo anterior:
  function handleCredentialResponse(response) {
    // Decodifica os dados do usuário contidos no token do Google
    const userData = parseJwt(response.credential);
    
    // userData agora contém: name, email, picture, etc.
    console.log(userData);
  
    // Injeta os dados em tempo real no HTML do Perfil
    document.getElementById("user-name").innerText = userData.name;
    document.getElementById("user-email").innerText = userData.email;
    document.getElementById("user-photo").src = userData.picture;
    
    // (Opcional) Salva no navegador para não sumir ao atualizar a página
    localStorage.setItem("user_profile", JSON.stringify(userData));
  }
  
  // Função para deslogar
  function logout() {
    localStorage.removeItem("user_profile");
    alert("Você saiu da conta.");
    window.location.reload(); // Recarrega a página para resetar os campos
  }
  
  // Ao carregar a página, verifica se o usuário já estava logado antes
  window.addEventListener("DOMContentLoaded", () => {
    const savedUser = localStorage.getItem("user_profile");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      document.getElementById("user-name").innerText = userData.name;
      document.getElementById("user-email").innerText = userData.email;
      document.getElementById("user-photo").src = userData.picture;
    }
  });