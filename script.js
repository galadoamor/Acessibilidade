// Função para alternar entre as seções
function showSection(sectionId) {
    // Ocultar todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Mostrar a seção que foi clicada
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
  }
  