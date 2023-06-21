const v = document.getElementById("vid");
const s = document.getElementById("video-demonslayer");

function changeVideo1() { 
   s.src = '/Src/Video/Tanjiro  vs Hantengu.webm';
   v.load();
   v.play();
}

function changeVideo2() { 
   s.src = '/Src/Video/Tokito vs Gyokko .webm';
   v.load();
   v.play();
}
function changeVideo3() { 
   s.src = '/Src/Video/tengen-demon-.mp4';
   v.load();
   v.play();
   
}
function changeVideo4() { 
  s.src = '/Src/Video/flame (Rengoku Kyojuro).webm';
  v.load();
  v.play();
}
function changeVideo5() { 
  s.src = './Src/Video/water (Giyuu Tomioka).mp4';
  v.load();
  v.play();
}
function changeVideo6() { 
  s.src = '/Src/Video/Insect (Shinobu).mp4';
  v.load();
  v.play();
}

document.getElementById("change1").onclick=changeVideo1;       
document.getElementById("change2").onclick=changeVideo2; 
document.getElementById("change3").onclick=changeVideo3; 
document.getElementById("change4").onclick=changeVideo4; 
document.getElementById("change5").onclick=changeVideo5; 
document.getElementById("change6").onclick=changeVideo6; 


let vid = document.getElementById("video-demonslayer");

function playVid() {
    vid.play()

}
 

function pauseVid() {
    vid.pause();
}







































// const buttonClick = document.getElementById("button-toggle");
// const body = document.querySelector("body");
// const buttonvideo = document.querySelector(".video");
// const buttonImg = document.querySelector(".button-img")



// buttonClick.addEventListener("click", () => {
    
//     const videoChange = body.classList.toggle(".video");
//     const imgChange = body.classList.toggle(".button-img");
   
    
//     if (videoChange ,imgChange) {
//             buttonvideo.setAttribute("src", "/Src/Video/Tokito vs Gyokko .webm",);
//             buttonImg.setAttribute("src", "/Src/img/oni-kanji.png");
            
            

            
//           } else {
//              buttonvideo.setAttribute("src", "/Src/Video/Tanjiro  vs Hantengu.webm");
//              buttonImg.setAttribute("src", "/Src/img/Slayer-removebg-preview.png");
           
            
                    
//            }
//   }  
// );

