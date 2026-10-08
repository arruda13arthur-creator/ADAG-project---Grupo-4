// Abre uma seção específica ao clicar no Card
function openSection(sectionId) {
  // Esconde o menu de 4 cards
  document.getElementById('dashboard-view').classList.add('hidden');
  
  // Esconde todos os painéis
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.classList.add('hidden'));

  // Mostra a área de detalhes e o painel específico clicado
  document.getElementById('detail-view').classList.remove('hidden');
  document.getElementById('panel-' + sectionId).classList.remove('hidden');
}

// Botão "← Voltar aos Cards"
function goBack() {
  // Esconde a área de detalhes
  document.getElementById('detail-view').classList.add('hidden');
  
  // Mostra o menu principal de 4 cards
  document.getElementById('dashboard-view').classList.remove('hidden');
}

// Ação do botão "← Voltar para a Loja"
function voltarParaLoja(event) {
  // Altere para a sua página principal ou catálogo (ex: 'index.html' ou 'produtos.html')
  window.location.href = 'index.html'; 
}

// Copia o código de rastreio
function copyTracking() {
  const code = document.getElementById('track-code').innerText;
  navigator.clipboard.writeText(code);
  showToast('Código de rastreio copiado!');
}

// Abre/fecha formulário de endereço
function toggleForm(formId) {
  const form = document.getElementById(formId);
  form.classList.toggle('hidden');
}

// Trata os envios dos formulários sem recarregar a página
function handleFormSubmit(event, message) {
  event.preventDefault();
  showToast(message);
}

// Exibe a mensagem de aviso temporária
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}