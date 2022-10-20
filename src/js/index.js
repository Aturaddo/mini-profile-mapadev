const tabs = document.querySelectorAll('.tab') // Representar o elemento HTML.

// Identificar cada Aba separadamente, apos o click do Mouse
tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    if (tab.classList.contains('select')) {
      return
    }

    const tabSelect = document.querySelector('.tab.select')
    tabSelect.classList.remove('select') // Remover uma Classe no HTML

    tab.classList.add('select') // Adiciona uma Classe no HTML
  })
})
