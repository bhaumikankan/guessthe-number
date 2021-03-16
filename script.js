'use strict';
const guessnum=Math.floor(Math.random()*20)+1;
let score=20;
document.querySelector(".check").addEventListener("click",()=>{

    console.log(guessnum)
    score=score-1;
    document.querySelector(".score").innerHTML=score;
      let num=document.querySelector("input").value;
      if(num==guessnum)
      {
          document.querySelector("body").style.backgroundColor="rgb(92, 228, 99)";
          document.querySelector(".message").innerHTML="You Won";
          document.querySelector(".highscore").innerHTML=score;
      }
      else if(num>guessnum)
      {
        document.querySelector(".message").innerHTML="Too High";
      }
      else{
        document.querySelector(".message").innerHTML="Too Low";
      }


}
)
document.querySelector(".again").addEventListener("click",()=>{
    location.reload()
})

      

