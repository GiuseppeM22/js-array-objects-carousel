const images = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const contenitore = document.getElementById("container")
const centerBox = document.getElementById("centerBox")
let btnRight = document.getElementById("rightButton")
let btnLeft = document.getElementById("leftButton")

let imageCurrent = 0
let currentTitol = 0
let currentDescription = 0


for (let i = 0; i < images.length; i++) {
    const imagesEle = images[i];
    
    let immagineCorrente = imagesEle.image
    console.log(immagineCorrente)   

    
    const box = document.createElement("div")
    box.classList.add("boxImage")
    centerBox.appendChild(box)
    
    const foto = document.createElement("img")
    foto.src = imagesEle.image
    box.appendChild(foto)
    foto.classList.add("hidden")

    const divTesto = document.createElement("div")
    box.appendChild(divTesto)
    divTesto.classList.add("description")

    const titolo = document.createElement("h4")
    divTesto.appendChild(titolo)
    titolo.innerHTML = imagesEle.title
    titolo.classList.add("hidden")

    const descrizione = document.createElement("p")
    divTesto.appendChild(descrizione)
    descrizione.innerHTML = imagesEle.text
    descrizione.classList.add("hidden")


    if (i == imageCurrent && i == currentTitol){
        foto.classList.remove("hidden")
        titolo.classList.remove("hidden")
        descrizione.classList.remove("hidden")

   }



}

let imagesEle = document.querySelectorAll(".boxImage img")
let titolEle = document.querySelectorAll(".description h4")
let descriptionEle = document.querySelectorAll(".description p")


btnRight.addEventListener ("click", function(){

    if (imageCurrent < imagesEle.length-1 ){   
        for (let i = 0; i < imagesEle.length; i++)
            if (i == imageCurrent+1 )
                imagesEle[i].classList.remove("hidden")
                else{
                imagesEle[i].classList.add("hidden")

                }
        imageCurrent++
    }

    if (currentTitol < 4 ){   
        for (let i = 0; i < titolEle.length; i++)
            if (i == currentTitol+1 )
                titolEle[i].classList.remove("hidden")
                else{
                titolEle[i].classList.add("hidden")

                }
        currentTitol++
    }

    if (currentDescription < 4 ){   
        for (let i = 0; i < descriptionEle.length; i++)
            if (i == currentDescription+1 )
                descriptionEle[i].classList.remove("hidden")
                else{
                descriptionEle[i].classList.add("hidden")

                }
            currentDescription++
    }


}); 

btnLeft.addEventListener ("click", function(){

    if (imageCurrent > 0){   
        for (let i = 0; i < imagesEle.length; i++)
            if (i == imageCurrent-1 )
                imagesEle[i].classList.remove("hidden")
                else{
                imagesEle[i].classList.add("hidden")

                }
        imageCurrent--
    }


    if (currentTitol > 0 ){   
        for (let i = 0; i < titolEle.length; i++)
            if (i == currentTitol-1 )
                titolEle[i].classList.remove("hidden")
                else{
                titolEle[i].classList.add("hidden")

                }
        currentTitol--
    }

    if (currentDescription > 0 ){   
        for (let i = 0; i < descriptionEle.length; i++)
            if (i == currentDescription-1 )
                descriptionEle[i].classList.remove("hidden")
                else{
                descriptionEle[i].classList.add("hidden")

                }
            currentDescription--
    }
        
                    
    }); 