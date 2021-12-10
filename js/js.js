// -------- Уменьшение меню при скроле вниз 

;(function() {
if(window.matchMedia("(max-width: 1050px)").matches) {
	return;
}

var headerPage = document.querySelector(".header-page");

window.addEventListener("scroll", function(){

if (window.pageYOffset > 0){
	headerPage.classList.add("is-active");
}
else{
	headerPage.classList.remove("is-active");
}
});
})();

// -------- Плавное перемещение якорей

;(function() {
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
})();