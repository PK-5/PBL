//creating const for the cart button and the products 
const cartBtn = document.querySelector("#cartBtn");
const cinnamonRollsName = document.querySelector(".cinnamonRollsName").innerHTML;
const cinnamonRollsPrice = document.querySelector(".cinnamonRollsPrice").innerHTML;

cartBtn.addEventListener("click", function() {

localStorage.setItem('Name', cinnamonRollsName);
localStorage.setItem('Price', cinnamonRollsPrice);

} )


var Name = localStorage.getItem('Name');
var Price = localStorage.getItem('Price');


function openNav() {
  document.getElementById("navigation").style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementById("pgbody").style.display= "none";
  document.getElementById("footer").style.display= "none";
}





function closeNav() {
  document.getElementById("navigation").style.display = "none";
  document.getElementById("header").style.display = "block";
  document.getElementById("pgbody").style.display= "block";
  document.getElementById("footer").style.display= "block";

}



