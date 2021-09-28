
let divs = document.querySelectorAll(".fade");
   
function isVisible(element) {
    let box = element.getBoundingClientRect();
    if (box.top > -50 && box.top < window.innerHeight - 100) {
        return true 
    } else {
        return false
    }
}

function darken(element) {
    let box = element.getBoundingClientRect();
    let {top, bottom} = box;
    let container = document.querySelector(".container");
    if (top <= 250 && bottom >= window.innerHeight - 250) {
        container.classList.remove("background-light");
        container.classList.add("background-dark");
    } else {
        container.classList.remove("background-dark");
        container.classList.add("background-light")
    }
}

function check() {
    let divList = document.querySelectorAll(".visible");
    let dark = document.querySelector(".darken");
    divList.forEach(div => {
        if (isVisible(div)) {
            div.classList.remove("hidden");
        } else {
            div.classList.add("hidden");
        }
    })

    darken(dark);
}

window.onload = () => {
    divs.forEach((div) => {
        let box = div.getBoundingClientRect();
        div.classList.add("visible");
        if (!(box.top > -60 && box.top < window.innerHeight - 180)) {
            div.classList.add("hidden");
        }    
    })
}

document.addEventListener("scroll", check);

window.addEventListener("scroll", function() {
    const distance = window.scrollY
    document.querySelector("header").style.transform = `translateY(${distance *
      -0.00005}px)`
    document.querySelector(
      ".slow"
    ).style.transform = `translateY(${distance * 0.3}px)`;
  })