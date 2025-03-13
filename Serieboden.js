const Animationcss = document.getElementsByClassName("Animationcss");
const formus = document.getElementsByClassName("formus");
const Inloggning = document.getElementById("Inloggning");

Animationcss.addEventListener("click", event =>{
    formus.style.display = "none";
    Inloggning.style.display = "none";
    myButton.textContent = "Show";
});