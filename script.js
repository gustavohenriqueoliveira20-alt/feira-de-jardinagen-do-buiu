// script.js

// O evento 'DOMContentLoaded' garante que o script só rode após todo o HTML ser carregado
document.addEventListener("DOMContentLoaded", () => {
    
    // Mensagem exibida no console do navegador para confirmar que o script está funcionando
    console.log("Portfólio de Jardineiro carregado com sucesso!");

    // Adiciona uma interatividade ao link do repositório no rodapé
    const linkRepositorio = document.getElementById("link-repositorio");
    
    if (linkRepositorio) {
        linkRepositorio.addEventListener("click", (event) => {
            // Se o link ainda for apenas "#", impede que a página pule para o topo e exibe um alerta
            if (linkRepositorio.getAttribute("href") === "#") {
                event.preventDefault(); // Previne a ação padrão do link
                alert("Olá! O link para o repositório oficial será adicionado em breve.");
            }
        });
    }

});
