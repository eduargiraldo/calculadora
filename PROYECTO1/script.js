const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");
let operatorCount = 0;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent;

        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            operatorCount = 0;
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        
        if (botonOn === '/') {
            operatorCount++;
            if (operatorCount > 2) {
                pantalla.textContent = "¡Error!";
                operatorCount = 0;
            }
        } 
        
        if (boton.id === "igual"){
            try {  
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "¡Error!";
            }
            return;
        }
        
        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!"){   
            pantalla.textContent = botonOn;
    
        } else {
            pantalla.textContent += botonOn;
        }
    });
});