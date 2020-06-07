  
const tl = gsap.timeline({duration: 1});

//--------------HEADER-----------------//
const color1 = "linear-gradient(to right, rgb(245, 248, 79),rgb(241, 235, 240))"
const color2 = "linear-gradient(to left, rgb(245, 248, 79),rgb(241, 235, 240))"
const color3 = "linear-gradient(to right, rgb(252, 144, 20),rgb(241, 235, 240))"
 
const tittle = document.querySelector("#tittle");
const rgbColors = [color1,color2,color3];
function randomtittle() {
    const random = Math.floor(Math.random()*rgbColors.length);
    tittle.style.background = rgbColors[random]
    tittle.style.webkitBackgroundClip = "text";
    tittle.style.webkitTextFillColor = "transparent";
    setTimeout(randomtittle, 2000)
}
randomtittle()

const show = () => {
    const toggle = document.querySelector(".togglemenu");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-links")

    toggle.addEventListener("click", () => {
        nav.classList.toggle("display")

        navLinks.forEach((each, index) => {
            if(each.style.animation){
                each.style.animation = "";
            }else{
                each.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
        toggle.classList.toggle("bar")
    })
}
show()


//header//
const registerBtn = document.querySelector(".book-btn");
const modalcontainer = document.querySelector(".general1");
const closeBar = document.querySelector("#close-bar");
const cancelBtn = document.querySelector(".cancel-btn");

function modal() {
registerBtn.addEventListener("click", () =>{
    modalcontainer.style.display = "block"
})
cancelBtn.addEventListener("click", () =>{
    modalcontainer.style.display = "none";
})
closeBar.addEventListener("click", () =>{
    modalcontainer.style.display = "none";
})


}
modal()


let m = 0
const slide = document.querySelectorAll(".slide")
const next = document.querySelector(".next-btn")
const prev = document.querySelector(".prev-btn")

autoslide()
function autoslide () {
    
    for(let n = 0; n < slide.length; n++){
        slide[n].style.display = "none"
    } 
     m++
     if(m === slide.length){
         m = 0
     }

    slide[m].style.display = "block"
     setTimeout(autoslide, 9000)
}

next.addEventListener("click", () => {
    m++
    slidemenu()
})
prev.addEventListener("click", () => {
    m--
    slidemenu()
    
})

function slidemenu() {
    for(let n = 0; n < slide.length; n++){
        slide[n].style.display = "none"
    } 
           
        if(m === slide.length){
            m = 0
        }
        if(m === -1){
            m = 1
        }
        slide[m].style.display = "block"
    }
    slidemenu()


 

  const search =  document.querySelector(".search-container");

document.querySelector(".search-btn").addEventListener("click", () =>{
    const searchBox = document.querySelector(".search").value;
    const APIKey = "8uezCDrHtXkDGO74kG8JIXQc94MulWPohaG49ROvYS0"   
   
   const div = document.querySelector(".search-content");
   let searchInfo = "";

fetch("https://api.unsplash.com/search/photos?client_id="+APIKey+"&query="+searchBox+"") 
           .then(response => {
            return  response.json()
           })
           .then(data => {
              let {results} = data;
              results.forEach(each => {
              return searchInfo += `<img src="${each.urls.raw}">`
               })
              div.innerHTML = searchInfo;
             
              search.style.display = "block"
              
         });
      })
      document.querySelector(".close-search").addEventListener("click", () => {
          search.style.display = "none"
      })
      document.querySelector(".close-search-btn").addEventListener("click", () => {
          search.style.display = "none"
      })

      window.addEventListener("scroll", () => {
          const upKey = document.querySelector(".to-top")

          if (window.pageYOffset > 100) {
              upKey.classList.add("active")
        } else {
            upKey.classList.remove("active")
          }

          
      })
