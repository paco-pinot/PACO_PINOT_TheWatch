
// ________________________________MODAL INSCRIPTION_________________________________

let btnUser =document.querySelector(".fa-user")
let modalInscription = document.querySelector(".modalInscription")
let containerModal = document.querySelector(".containerModal")
let croixModal =document.querySelector(".croix")
btnUser.addEventListener("click",function () {
    modalInscription.style.display ="flex"
})
croixModal.addEventListener("click",function(){
    modalInscription.style.display ="none"
})
// _______________BTN INSCRIPTION____________________
let sinscrireBtn = document.querySelector(".Sinscrire")
let inscription = document.querySelector(".SinscrireSection")
sinscrireBtn.addEventListener("click",function () {
    modalInscription.style.display ="none"
    inscription.style.display ="flex"
})

let croixInscription = document.querySelector(".croixSinscrire")

croixInscription.addEventListener("click",function () {
    inscription.style.display ="none"
})

// _______________________BTN SE CONNECTER_______________________________

let seConnecterBtn = document.querySelector(".seConnecter")
let connexion = document.querySelector(".seConnecterSection")

seConnecterBtn.addEventListener("click",function () {
    modalInscription.style.display ="none"
    connexion.style.display ="flex"
})

let croixSeconnecter = document.querySelector(".croixSeConnecter")

croixSeconnecter.addEventListener("click",function () {
    connexion.style.display ="none"
})


// _______________________BTN DARKMODE_______________________

let btnDarkMode = document.querySelector(".fa-circle-half-stroke")
let body = document.querySelector("body")
let section1 = document.querySelector(".section1")
let compteur = 0
btnDarkMode.addEventListener("click",function () {
    compteur++
    if (compteur==1) {
        body.style.backgroundColor = "black"
        body.style.color = "white"
        section1.style.backgroundColor = "black"
    }else if (compteur==2){
        body.style.backgroundColor = "initial"
        body.style.color = "initial"
        section1.style.backgroundColor = "#F0F0F2"
        compteur=0
    }
})












// _________________SECTION 2 (ARRIVALS) _______________________

let section2 = document.querySelector(".section2")
let h2Section2 = document.createElement("h2")
h2Section2.innerText ='New Arrivals'

let containerArrivals = document.createElement("div")
containerArrivals.classList.add("containerArrivals")

let divUnArrivals  = document.createElement("div")
divUnArrivals.classList.add("divUnArrivals")

let div2Arrivals  = document.createElement("div")
div2Arrivals.classList.add("div2Arrivals")

let div3Arrivals  = document.createElement("div")
div3Arrivals.classList.add("div3Arrivals")

let section2Img  = document.createElement("div")
section2Img.classList.add("section2Img")
section2Img.innerHTML=' <img src="./public/img/new_product1.png" alt="">'

let section2Img2  = document.createElement("div")
section2Img2.classList.add("section2Img2")
section2Img2.innerHTML='<img src="./public/img/new_product2.png" alt="">'

let section2Img3  = document.createElement("div")
section2Img3.classList.add("section2Img3")
section2Img3.innerHTML='<img src="./public/img/new_product3.png" alt="">'

let section2Texte  = document.createElement("div")
section2Texte.classList.add("section2Texte")
section2Texte.innerHTML=' <span>Thermo Ball Etip Gloves</span><span class="prixArrivals">$45,743</span>'

let section2Texte2  = document.createElement("div")
section2Texte2.classList.add("section2Texte2")
section2Texte2.innerHTML=' <span>Thermo Ball Etip Gloves</span><span class="prixArrivals">$45,743</span>'

let section2Texte3  = document.createElement("div")
section2Texte3.classList.add("section2Texte3")
section2Texte3.innerHTML=' <span>Thermo Ball Etip Gloves</span><span class="prixArrivals">$45,743</span>'
// _____________________CONSTRUCTION HTML SECTION 2___________________
section2.appendChild(h2Section2)
section2.appendChild(containerArrivals)
    containerArrivals.appendChild(divUnArrivals)
        divUnArrivals.appendChild(section2Img)
        divUnArrivals.appendChild(section2Texte)
    containerArrivals.appendChild(div2Arrivals)
        div2Arrivals.appendChild(section2Img2)
        div2Arrivals.appendChild(section2Texte2)
    containerArrivals.appendChild(div3Arrivals)
        div3Arrivals.appendChild(section2Img3)
        div3Arrivals.appendChild(section2Texte3)


// ________________MODAL SECTION5____________________

let btnPlaySection5 = document.querySelector(".fa-circle-play")
let containerModalSection5 = document.querySelector(".containerModalSection5")
let containerSection5 = document.querySelector(".containerSection5")

btnPlaySection5.addEventListener("click",function () {
    containerSection5.style.display ="none"
    containerModalSection5.style.display = "flex"
})

containerModalSection5.addEventListener("click",function () {
    containerModalSection5.style.display = "none"
    containerSection5.style.display ="block"
})


