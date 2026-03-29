function sendMessage(){
  alert("Thanks for reaching out!I'll get back to you soon")
}
function toggleDarkMode(){
  document.body.classList.toggle("dark-mode")
}
const hireBtn =document.getElementById("hireBtn");
const message =document.getElementById("message");

 hireBtn.addEventListener("click" , ()=>{
  message.textContent="Thanks for your interest! let's work together"
});
const menuBtn =document.getElementById("menuBtn");
const navLinks =document.getElementById("navLinks");
menuBtn.addEventListener("click",()=>{
  navLinks.classList.toggle("show");
});