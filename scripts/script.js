const barras = document.querySelectorAll(".bar"); // Capturando as barras do menu Hambúrger.
let menuAtivado = false;

document.addEventListener("click", event => {
    const element = event.target;
    
    if(element.classList.contains("bar") || element.classList.contains("menuH")){
        let menu = [barras[0], barras[1], barras[2]];

        if(menuAtivado){ // Usando codição de ímpar ou par no contador.
            menu[0].style.transform = "rotate(0deg) translate(0px, 0px)";
            menu[1].style.opacity = "1";
            menu[2].style.transform = "rotate(0deg) translate(0px, 0px)";

            return menuAtivado = false;
        };

        // Não será acionado o trecho abaixo, caso a condição acima seja verdadeira por conta do "return".
        menu[0].style.transform = "rotate(-45deg) translate(-8px, 8px)";
        menu[1].style.opacity = "0";
        menu[2].style.transform = "rotate(45deg) translate(-8px, -8px)";

        menuAtivado = true;
    };
});