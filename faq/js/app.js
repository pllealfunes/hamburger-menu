"use strict"

const buttons = document.querySelectorAll("button");

buttons.forEach( function (btn) {
   btn.addEventListener("click", function (){
       var answer = btn.nextElementSibling;
       var back = btn.parentElement;
       btn.classList.toggle("active");
        if(answer.style.display !=="block"){
            answer.style.display="block";
            btn.style.backgroundColor="gray";
            back.style.backgroundColor="#A0A0A0";
        } else{
            answer.style.display="none";
            btn.style.backgroundColor="#354b68";
        }
   });
});