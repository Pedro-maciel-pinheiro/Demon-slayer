const buttonClick = document.getElementById("button-toggle");
const body = document.querySelector("body");
const buttonvideo = document.querySelector(".video");

buttonClick.addEventListener("click", () => {
    
    const videoChange = body.classList.toggle(".video");
    if (videoChange) {
            buttonvideo.setAttribute("src", "/Src/Video/Tokito vs Gyokko .webm");
            
          } else {
             buttonvideo.setAttribute("src", "/Src/Video/Tanjiro  vs Hantengu.webm");
           }
  
});
