/**
 * Abre uma seção de detalhes específica escondendo a dashboard principal
 * @param {string} sectionId - ID do elemento HTML da seção
 * @param {string} sectionName - Nome que aparecerá no breadcrumb
 */
function openSection(sectionId, sectionName) {
    // Esconde o painel de mosaico principal
    document.getElementById('mainDashboard').style.display = 'none';
    
    // Torna a seção escolhida visível
    document.getElementById(sectionId).style.display = 'block';
    
    // Atualiza a navegação estrutural superior (breadcrumb)
    document.getElementById('breadcrumb').innerText = 'Minha conta > ' + sectionName;
}

/**
 * Retorna para a dashboard principal escondendo qualquer tela de detalhe aberta
 */
function backToDashboard() {
    // Busca e oculta todas as seções internas abertas
    const sections = document.querySelectorAll('.details-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Traz de volta o mosaico principal de opções
    document.getElementById('mainDashboard').style.display = 'block';
    
    // Reseta o breadcrumb para o estado original
    document.getElementById('breadcrumb').innerText = 'Minha conta';
}