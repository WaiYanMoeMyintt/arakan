const sectionMenu = document.querySelector("#section");
const menuBtn     = document.querySelector("#menu_btn");
const sectionBtn  = document.querySelector("#section_menu");

// visitImg.classList.add("visit_hidden");

menuBtn.addEventListener("click",()=>{
      sectionMenu.classList.add("section_active");
})

sectionBtn.addEventListener("click",()=>{
    sectionMenu.classList.remove("section_active");
})
// menuBtn.addEventListener("click",()=>{
//     sectionMenu.classList.add("section_active");
//     console.log("Active");
// })
// sectionBtn.addEventListener("click",()=>{
//     sectionMenu.classList.remove("section_active");
// })
