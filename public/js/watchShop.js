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
compteur = 0
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