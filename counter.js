let count = 0;
let intervalId;  // Variável para armazenar o ID do intervalo
let isIncreasing = false;  // Variável para rastrear se o aumento contínuo está acontecendo

const value = document.querySelector("#value");
const btn =  document.querySelectorAll(".btn");

btn.forEach(function (btn){

    btn.addEventListener("mousedown", function (e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
            isIncreasing = true; 
            intervalId = setInterval(function () {
                count++;
                value.textContent = count;
            }, 150);  // Intervalo de 100ms
        } else {
            count = 0;
        }
        value.textContent = count;
    });

    // Parar o intervalo quando o botão é liberado
    btn.addEventListener("mouseup", function () {
        if (isIncreasing) {
            clearInterval(intervalId);
            isIncreasing = false;  // Parar o aumento contínuo
        }
    });

    // Parar o intervalo também se o cursor sair da área do botão
    btn.addEventListener("mouseout", function () {
        if (isIncreasing) {
            clearInterval(intervalId);
            isIncreasing = false;  // Parar o aumento contínuo
        }
    });

});
