
const phrase =
"❤️ Porque Cada Dia a Tu Lado Solo Existe Para Amarte Mas y Mas a ti Mi Amor  ❤️";

let i = 0;

function typeText(){

    if(i < phrase.length){

        document.getElementById("typing").innerHTML += phrase.charAt(i);

        i++;

        setTimeout(typeText, 60);
    }
}

function iniciarHisstoria (){
    const musica=
    document.getElementById("musica");

    if (musica){
        musica.onplay();
    }
    document.getElementById("galeria")
    .scrollIntoView({
        behavior: "smooth"
    });
}

typeText();

function showMusic(){
    document.getElementById("music").classList.remove("hidden");
}

function abrirCarta(){
    document
    .getElementById("carta")
    .classList
    .toggle ("hidden");
}

// crear estrellas

for(let i=0; i<150; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.innerHTML = "🌟";

    star.style.left = Math.random()*100 + "vw";
    star.style.top = Math.random()*100 + "vh";

    star.style.animationDelay = Math.random()*4 + "s";

    document.getElementById("stars").appendChild(star);
}
