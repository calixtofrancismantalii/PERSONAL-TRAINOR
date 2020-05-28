//openModal
function openModal(){
    var modal;
    modal = document.getElementById("modal");
    modal.style.display = "block"
}
//display image-container scr
function a(tap){
    var pic;
    pic = document.getElementById("pic");
    pic.src = tap;
}



//picture control next/previous
function previous(num){
    
   
    
}
function next(){
    
    window.alert("next");
      
}

//change display image-container scr
function full(sel){
    var pic;
    pic = document.getElementById("pic");
    pic.src = sel;
}












//for close modal
var close, modal;
close = document.getElementById("close");
modal = document.getElementById("modal");

close.onclick = function(){
    modal.style.display = "none";
}












//foraccordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


