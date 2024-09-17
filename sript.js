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

function SEELESS(){
  const less=document.getElementById("card");
  less.style.display="none";
 console.log(less);
}
      
      
function SUBSCRIPTION(){
  event.preventDefault();
  const subscriptiondiv=document.getElementById("subscription-complete");
  const successfuldiv=document.createElement("div");
  successfuldiv.innerHTML=`<h3>SUBSCRIPTION SUCCESSFUL !<br>THANK YOU😊</h3>`;
  subscriptiondiv.appendChild(successfuldiv);
  console.log(subscriptiondiv);
}