picture=[ {url:"./image/chessy burger.png"},
          {url:"./image/casserol.png"},
          {url:"./image/chessy beef pizza.png"},
          {url:"./image/chicken permesan.png"},
          {url:"./image/chicken roast.png"},
          {url:"./image/mutton stew.png"},
                                   ]; 
function SEEMOREPRODUCT(){
 const olddiv=document.getElementById("card");
 for(let i of picture){
    const newdiv=document.createElement("div");
    
    newdiv.innerHTML=`<img src="${i.url}">`;
    olddiv.appendChild(newdiv);
 }
 console.log(olddiv);
}

   /*function SEELESS() {
      const olddiv = document.getElementById("card");
      const cardsDiv = olddiv.querySelectorAll(".cards");
    
      // Add a new class to hide the images
      cardsDiv.forEach(div => {
        div.classList.add("hidden");
      });
    }*/
      /*function SEELESS() {
         const olddiv = document.getElementById("card");
         const cardsDiv = olddiv.querySelectorAll(".cards");
       
         // Remove the divs with the "cards" class
         cardsDiv.forEach(div => {
           div.remove();
         });
       }*/
      