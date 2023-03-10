// 1) Scroll Navigation
let headerBtn = document.querySelectorAll("header a");

for(let a in headerBtn){
    headerBtn[a].addEventListener("click", function(e){
        e.preventDefault();

        var target = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
            "behavior": "smooth",
            "top":target.offsetTop
        });
    });
}




// 2) Image Slider



// 3) Tabs




// 4) Click Image Slider