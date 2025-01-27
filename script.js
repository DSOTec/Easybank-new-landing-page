
const headerIcons = document.querySelector(".header-icons");
const openIcon = document.querySelector("#open");
const closeIcon = document.querySelector("#close");
const listItems = document.querySelector(".headercontainer ul");

openIcon.addEventListener("click", (e =>{
   openIcon.style.display = "none";
   closeIcon.style.display = "block";
   listItems.style.display = "block";

}))
closeIcon.addEventListener("click",(e =>{
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
    listItems.style.display = "none";
}))

