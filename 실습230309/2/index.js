/* 화면 우측 하단의 버튼을 클릭했을 때 화면의 최상단으로 이동하도록 하는 주어진 함수 
scrollUp()을 구현해봅시다.

함수를 적용할 변수 target을 지정하세요.
버튼 클릭 시 화면의 최상단으로 이동하도록 addEventListener 메서드를 적용하세요.*/

function scrollUp(e) {
    var scrollBtn = document.getElementById(e);

    scrollBtn.addEventListener("click", () =>{
        window.scrollTo({
            top:0,
            left:0,
            "behavior":"smooth"
        });
    });
}

scrollUp('scroll-btn');