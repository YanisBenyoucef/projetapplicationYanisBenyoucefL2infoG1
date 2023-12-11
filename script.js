const boite = document.body.querySelector(".box");

async function film() {
        const bdd = await fetch("https://ghibliapi.vercel.app/films");
        const fils = await bdd.json();

        for (let elt of fils) {
        
            const images = `<div class = "fils">
            <div class="image"><img src=${elt.image} ></div>
            <div class="titre"> ${elt.title}</div>
            <div class="auteur"> ${elt.director}</div>
            <div class = contentbouton>
            <button class = "boutton"> View</button></div>
            <div class="titreO"> ${elt.original_title}</div>
            </div>
            `
            ;
            boite.innerHTML += images;
            
        }}

film()