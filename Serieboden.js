window.onload = function(e) {
    let Animationcss = document.getElementById("Animationcss");
console.log(Animationcss);
const formus = document.getElementById("Formulr");
console.log(formus);
const Inloggning = document.getElementById("Inloggning");

Animationcss.addEventListener("click", (event) =>{
    if (formus.style.display == "none") {
    formus.style.display = "inline-block";
    //myButton.textContent = "Show";
}
else {
    formus.style.display = "none";
}
});
};

/* Försöker fixa men det kan ta ett tag. const Serieboxen = document.getElementById("Serieboxen");
Animationcss.addEventListener("click", (event) =>{


 } */