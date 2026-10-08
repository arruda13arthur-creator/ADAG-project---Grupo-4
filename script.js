/**
 
 * @param {string} sectionId - 
 * @param {string} sectionName - 
 */
function openSection(sectionId, sectionName) {
    document.getElementById('mainDashboard').style.display = 'none';
   
   
    document.getElementById(sectionId).style.display = 'block';
   
   
    document.getElementById('breadcrumb').innerText = 'Minha conta > ' + sectionName;
}
 

 

function backToDashboard() {
   
    const sections = document.querySelectorAll('.details-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
   
   
    document.getElementById('mainDashboard').style.display = 'block';
   
   
    document.getElementById('breadcrumb').innerText = 'Minha conta';
}