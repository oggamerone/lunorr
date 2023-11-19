var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("pageHeader").style.top = "0";
    } else {
        document.getElementById("pageHeader").style.top = "-80px";
    }

    prevScrollpos = currentScrollPos;
    atualizarBarraProgresso();
};

function toggleMobileMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
}

function atualizarBarraProgresso() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress").style.width = scrollPercentage + "%";
}

document.addEventListener('DOMContentLoaded', function () {
    // Obtém o número do capítulo a partir do URL, por exemplo, "capitulo2.html" resultaria em 2
    var currentChapter = parseInt(window.location.pathname.match(/\d+/)[0]);

    // Obtém o elemento do seletor
    var chapterSelect = document.getElementById("chapterSelect");

    // Itera sobre as opções do seletor para encontrar o capítulo atual
    for (var i = 0; i < chapterSelect.options.length; i++) {
        if (chapterSelect.options[i].value.includes("capitulo" + currentChapter)) {
            chapterSelect.selectedIndex = i;
            break;
        }
    }
});

function irParaCapitulo() {
    var selectedChapter = document.getElementById("chapterSelect").value;
    window.location.href = selectedChapter;
}

function irParaCapituloAnterior() {
    // Lógica para ir para o capítulo anterior
}

function irParaProximoCapitulo() {
    // Lógica para ir para o próximo capítulo
}

function irParaCapituloMobile() {
    var selectedChapter = document.getElementById("chapterSelectMobile").value;
    window.location.href = selectedChapter;
}

function esconderBarraProgresso() {
    document.getElementById("progress-bar").style.display = "none";
}

function reiniciarPagina() {
    location.reload();
}

  





 // Array de capítulos
 var capitulos = [
    "Capítulo 1", "Capítulo 2", "Capítulo 3", "Capítulo 4", "Capítulo 5",
    "Capítulo 6", "Capítulo 7", "Capítulo 8", "Capítulo 9", "Capítulo 10",
    "Capítulo 11", "Capítulo 12", "Capítulo 13", "Capítulo 14", "Capítulo 15",
    "Capítulo 16", "Capítulo 17", "Capítulo 18", "Capítulo 19", "Capítulo 20",
    "Capítulo 21", "Capítulo 22", "Capítulo 23"
];

// Selecionar o elemento de menu suspenso
var selectMenu = document.getElementById("chapterSelect");
// Selecionar o link "Próximo Capítulo"
var proximaPaginaLink = document.getElementById("proximaPagina");

// Adicionar opções ao menu suspenso
capitulos.forEach(function(capitulo, index) {
    var option = document.createElement("option");
    option.value = "capitulo" + (index + 1) + ".html";
    option.textContent = capitulo;
    selectMenu.appendChild(option);
});

// Atualizar o link "Próximo Capítulo" com base na seleção atual
selectMenu.addEventListener("change", function() {
    var selectedIndex = selectMenu.selectedIndex;
    
    // Verificar se não é o último capítulo
    if (selectedIndex < capitulos.length - 1) {
        proximaPaginaLink.href = capitulos[selectedIndex + 1] + ".html";
    } else {
        proximaPaginaLink.href = "#"; // Pode definir como uma página de "Capítulos Futuros" ou outro link desejado.
    }
});

// Função para ir para o capítulo selecionado
function irParaCapitulo() {
    var selectedValue = selectMenu.value;
    // Redirecionar para o capítulo selecionado
    window.location.href = selectedValue;
}

  if (window.location.pathname.endsWith('.html')) {
    window.history.replaceState({}, document.title, window.location.pathname.slice(0, -5));
  }
