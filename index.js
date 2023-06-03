const buttonClick = document.getElementById("button-toggle");
const body = document.querySelector("body");
const buttonvideo = document.querySelector(".video");
const buttonImg = document.querySelector(".button-img")


buttonClick.addEventListener("click", () => {
    
    const videoChange = body.classList.toggle(".video");
    const imgChange = body.classList.toggle(".button-img");
    
    if (videoChange ,imgChange) {
            buttonvideo.setAttribute("src", "/Src/Video/Tokito vs Gyokko .webm");
            buttonImg.setAttribute("src", "/Src/img/oni-kanji.png");

            
          } else {
             buttonvideo.setAttribute("src", "/Src/Video/Tanjiro  vs Hantengu.webm");
             buttonImg.setAttribute("src", "/Src/img/Slayer-removebg-preview.png");
                    
           }
  }  
);

// function changeImg () {
//     alert ("oi")
// }
 


        
   

