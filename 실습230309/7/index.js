/*
1. 클래스 .favorites-icon을 데이터로
 갖는 변수를 만드세요.

2. 세 개의 박스 중 한 박스를 클릭하면 해당 박스가
노란색이 되도록 on 클래스를 추가하세요.

3. 단 하나의 박스가 노란색인 상태에서 다른 박스를 클릭하면
원래 노란색인 박스는 회색이 되도록 on 클래스를 제거하세요.
*/



const favicon = document.getElementsByClassName("favorites-icon");

for(let i = 0; i < favicon.length; i++){
    favicon[i].addEventListener("click",(e) =>{
        for(let k of favicon){
            if(k != e.target){
                k.classList.remove("on");
            }
        }

        e.target.classList.toggle("on");
    });
}


