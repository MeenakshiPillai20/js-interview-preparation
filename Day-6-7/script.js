function addText(){
    let back = document.getElementById("background");
    let btn = document.getElementById("btn1");
    if (back.hasChildNodes()) {
       back.removeChild(back.childNodes[0]);
       btn.innerHTML = "Add Heading"
    }
    else{
     let head = document.createElement("h1");
     head.innerText = ("MERN stack");
     back.appendChild(head);
     btn.innerHTML = "Remove Heading"
    }
 }
//  function addNewText(){
//     let back = document.getElementById("background");
//     let head = document.createElement("h1");
//     head.innerText = ("MERN stack");
//     back.appendChild(head);
//     btn.innerHTML = "Remove Heading"
//  }
//  function removeText(){
//     let back = document.getElementById("background");
//     if (back.hasChildNodes()) {
//         back.removeChild(back.childNodes[0]);
//      }
//  }
var head1 = document.getElementsByTagName("h1")[0].textContent
document.getElementById("text") .innerText = head1

function getTime(){
   var date = new Date();
   var HH = date.getHours();
   var MM = date.getMinutes();
   let SS = String(date.getSeconds()).padStart(2, '0');
   HH = HH % 12; 
   HH = HH ? HH : 12; 
   MM = MM < 10 ? '0' + MM : MM;

   if (HH < 10)
      HH = "0" + HH
   document.getElementById("HH").innerText = HH;
   document.getElementById("MM").innerText = MM;
   document.getElementById("SS").innerText = SS;
   setTimeout(getTime, 1000);
 }
 getTime();
 
 function replaceText(){
   document.getElementById("content").innerText = "Wecome to Elevation academy"
 }
 function hideText(){
   let content = document.getElementById("newContent")
   if (content.style.display  === "none")
   {
      content.style.display="block"
   }
   else{
      content.style.display="none"
   }
 }