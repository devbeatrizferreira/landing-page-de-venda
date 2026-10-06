// ======================================
// DARK MODE
// ======================================

const darkModeBtn = document.getElementById("darkModeBtn");


// Verifica se o usuário já escolheu
// o modo escuro anteriormente

const modoSalvo = localStorage.getItem("darkMode");

if (modoSalvo === "ativado") {

    document.body.classList.add("dark");

    darkModeBtn.textContent = "☀️";
}


// Clique no botão

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    // Verifica qual modo está ativo

    const darkAtivo =
        document.body.classList.contains("dark");


    if (darkAtivo) {

        // Muda o ícone

        darkModeBtn.textContent = "☀️";

        // Salva preferência

        localStorage.setItem(
            "darkMode",
            "ativado"
        );

    } else {

        // Volta para lua

        darkModeBtn.textContent = "🌙";

        // Remove preferência

        localStorage.setItem(
            "darkMode",
            "desativado"
        );

    }

});

