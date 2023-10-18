const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");
let operatorCount = 0;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent ;

        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            operatorCount = 0;
            return;
        }

        if(/[/]/.test(pantalla.textContent.slice(-1)) && /[/]/.test(botonOn)){
            throw new Error("Error")}

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
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
        
        
        } else if (pantalla.textContent.length < 16) {
            pantalla.textContent += botonOn;
        }
    
    });
});