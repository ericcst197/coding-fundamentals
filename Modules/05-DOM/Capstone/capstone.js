const header = document.querySelector('header')


// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header
window.addEventListener('scroll',()=>{
    if( window.scrollY > 0 ){
        header.classList.add("header--hidden");
    } else {
        header.classList.remove("header--hidden");
    }
})

// Event listener: Mouse move                
// When user hovers around the top area, show the header   
window.addEventListener('mousemove', (e) => {
    if(e.screenY < 180 && window.scrollY > 0 ){
        header.classList.remove("header--hidden");
    } else {
        header.classList.add("header--hidden");
    }
})