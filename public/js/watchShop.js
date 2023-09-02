// ___________________CAROUSSEL______________________
let btnRightCaroussel = document.querySelector(".btnRightCaroussel")
let btnLeftCaroussel = document.querySelector(".btnLeftCaroussel")
let imgCaroussel1 = document.querySelector(".caroussel1")
let imgCaroussel2 = document.querySelector(".caroussel2")
let imgCaroussel3 = document.querySelector(".caroussel3")
let imgCaroussel4 = document.querySelector(".caroussel4")
let containerCarroussel = document.querySelector(".containerCaroussel")
let allImgs = document.querySelectorAll(".imgCaroussel")
console.log(allImgs);

// ____________________BOUTON DROIT_____________________________
btnRightCaroussel.addEventListener("click",function () {
    if (containerCarroussel.classList.contains("car1")) {
        imgCaroussel1.style.display = "none"
        imgCaroussel2.style.display = "block"
        containerCarroussel.classList.add("car2")
        containerCarroussel.classList.remove("car1")
    }else if (containerCarroussel.classList.contains("car2")){
        imgCaroussel2.style.display = "none"
        imgCaroussel3.style.display = "block"
        containerCarroussel.classList.add("car3")
        containerCarroussel.classList.remove("car2")
    }else if (containerCarroussel.classList.contains("car3")){
        imgCaroussel3.style.display = "none"
        imgCaroussel4.style.display = "block"
        containerCarroussel.classList.add("car4")
        containerCarroussel.classList.remove("car3")
    }else if (containerCarroussel.classList.contains("car4")){
        imgCaroussel4.style.display = "none"
        imgCaroussel1.style.display = "block"
        containerCarroussel.classList.add("car1")
        containerCarroussel.classList.remove("car4")
    }
})

// ______________________BOUTON GAUCHE___________________________
btnLeftCaroussel.addEventListener("click",function () {
    if (containerCarroussel.classList.contains("car1")) {
        imgCaroussel1.style.display = "none"
        imgCaroussel4.style.display = "block"
        containerCarroussel.classList.add("car4")
        containerCarroussel.classList.remove("car1")
    }else if (containerCarroussel.classList.contains("car2")){
        imgCaroussel2.style.display = "none"
        imgCaroussel1.style.display = "block"
        containerCarroussel.classList.add("car1")
        containerCarroussel.classList.remove("car2")
    }else if (containerCarroussel.classList.contains("car3")){
        imgCaroussel3.style.display = "none"
        imgCaroussel2.style.display = "block"
        containerCarroussel.classList.add("car2")
        containerCarroussel.classList.remove("car3")
    }else if (containerCarroussel.classList.contains("car4")){
        imgCaroussel4.style.display = "none"
        imgCaroussel3.style.display = "block"
        containerCarroussel.classList.add("car3")
        containerCarroussel.classList.remove("car4")
    }
})

// ________________________SECTION3_________________________

let btnPlus = document.querySelector(".plusS3")
let btnMoins = document.querySelector(".moinsS3")
let chiffreS3 = document.querySelector(".ChiffreS3")
console.log(chiffreS3.innerHTML);
btnPlus.addEventListener("click",function () {
    chiffreS3.innerHTML++
})
btnMoins.addEventListener("click",function () {
    if ( chiffreS3.innerHTML>=1) {
        chiffreS3.innerHTML--
    }
})

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
let navbar = document.querySelector(".containerNavbar")
let link2 = document.querySelector(".home_a")
let link =  document.querySelector('.navItem');
let compteuri = 0
let btnDarkModeBurger = document.querySelector(".darkMode2")
let menuBurger = document.querySelector('.menu-items')
let navbarBurger = document.querySelector('.navbarBurger')
let containerBurger = document.querySelector('.containerBurger')
let burgerLines = document.querySelectorAll('.line');
let linkBurger = document.querySelectorAll('.linkBurger');

btnDarkMode.addEventListener("click",function () {
    compteuri++
    if (compteuri==1) {
        containerBurger.style.backgroundColor = "black";
        navbarBurger.style.backgroundColor = "black";
        menuBurger.style.backgroundColor="black"
        navbar.style.backgroundColor="black"
        body.style.backgroundColor = "black"
        body.style.color = "white"
        connexion.style.color = "black"
        inscription.style.color = "black"
        btnDarkMode.style.color = "red"
        link.style.color = "white"
        link2.style.color='white' 


    }else if (compteuri==2){
        containerBurger.style.backgroundColor = "white";
        navbarBurger.style.backgroundColor="initial"
        menuBurger.style.backgroundColor="initial"

        navbar.style.backgroundColor="white"
        btnDarkMode.style.color = "black"
        body.style.backgroundColor = "initial"
        body.style.color = "initial"
        link.style.color = "initial"
        link2.style.color='initial' 
        compteuri=0
    }
})

// _______________DARKMODE BURGER_______________

btnDarkModeBurger.addEventListener("click",function () {
    compteuri++
    if (compteuri === 1) {
        containerBurger.style.backgroundColor = "black";
        navbarBurger.style.backgroundColor = "black";
        menuBurger.style.backgroundColor = "black";
        navbar.style.backgroundColor="black"
        body.style.backgroundColor = "black"
        body.style.color = "white"
        connexion.style.color = "black"
        inscription.style.color = "black"
        btnDarkMode.style.color = "red"
        link.style.color = "white"
        link2.style.color='white' 
      
        burgerLines.forEach(line => {
          line.style.backgroundColor = "white";
        });
      
        linkBurger.forEach(links => {
          links.style.color = "white";
        });
      } else if (compteuri === 2) {
        containerBurger.style.backgroundColor = "white";
        navbarBurger.style.backgroundColor = "white";
        menuBurger.style.backgroundColor = "white";
        navbar.style.backgroundColor="white"
        btnDarkMode.style.color = "black"
        body.style.backgroundColor = "initial"
        body.style.color = "initial"
        link.style.color = "initial"
        link2.style.color='initial' 
      
        burgerLines.forEach(line => {
          line.style.backgroundColor = "black";
        });
      
        linkBurger.forEach(links => {
          links.style.color = "black";
        });
      
        compteuri = 0;
      }
      
})
// __________________________BTN TOP___________________________

let mybutton = document.getElementById("myBtn");
let nava = document.querySelector("nav")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    mybutton.style.display = "block";
    mybutton.style.opacity = "1";
    nava.style.position ="fixed"

  } else {
    mybutton.style.display = "none";
    mybutton.style.opacity = "0";
    nava.style.position ="relative"
  }
}
function topFunction() {
    const scrollToTop = () => {
      const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 10); 
      }
    };
    
    scrollToTop();
  }
