const tabs = document.querySelectorAll('.tab') // Representar o elemento HTML.

// Identificar cada Aba separadamente, apos o click do Mouse
tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    if (tab.classList.contains('select')) {
      return
    }

    selectTab(tab) //function selecao Abas
    infoSelectTab(tab)
  })
})

function selectTab(tab) {
  const tabSelect = document.querySelector('.tab.select')
  tabSelect.classList.remove('select') // Remover uma Classe no HTML

  tab.classList.add('select') // Adiciona uma Classe no HTML
}

function infoSelectTab(tab) {
  const infoSelect = document.querySelector('.info.select')
  infoSelect.classList.remove('select')

  const idElementInfoTabs = `info-${tab.id}` // Buscar ID em HTML
  console.log(idElementInfoTabs)

  const infoScreen = document.getElementById(idElementInfoTabs)
  infoScreen.classList.add('select')
}
