
function openSection(sectionId) {
 
  document.getElementById('dashboard-view').classList.add('hidden');
  

  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.classList.add('hidden'));

 
  document.getElementById('detail-view').classList.remove('hidden');
  document.getElementById('panel-' + sectionId).classList.remove('hidden');
}


function goBack() {
 
  document.getElementById('detail-view').classList.add('hidden');
  

  document.getElementById('dashboard-view').classList.remove('hidden');
}

function voltarParaLoja(event) {
 
  window.location.href = 'index.html'; 
}


function copyTracking() {
  const code = document.getElementById('track-code').innerText;
  navigator.clipboard.writeText(code);
  showToast('Código de rastreio copiado!');
}


function toggleForm(formId) {
  const form = document.getElementById(formId);
  form.classList.toggle('hidden');
}


function handleFormSubmit(event, message) {
  event.preventDefault();
  showToast(message);
}


function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}