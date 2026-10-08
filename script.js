<<<<<<< HEAD
/**
 * Abre uma seção de detalhes específica escondendo a dashboard principal
 * @param {string} sectionId - ID do elemento HTML da seção
 * @param {string} sectionName - Nome que aparecerá no breadcrumb
 */
function openSection(sectionId, sectionName) {
    document.getElementById('mainDashboard').style.display = 'none';
    
   
    document.getElementById(sectionId).style.display = 'block';
    
    
    document.getElementById('breadcrumb').innerText = 'Minha conta > ' + sectionName;
}

/**
 
 */
function backToDashboard() {
    
    const sections = document.querySelectorAll('.details-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    
    document.getElementById('mainDashboard').style.display = 'block';
    
    
    document.getElementById('breadcrumb').innerText = 'Minha conta';
=======

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
>>>>>>> eb746539aa857656fa798c99765a0f19cfc39a3f
}