/*
1. 작성되어있는 index.html 파일을 참고해 주어진 변수들을 완성해봅시다.

target: 함수를 실행시킬 출석 버튼
inputName: 입력한 이름을 받아올 input 태그
attendee: 입력한 이름을 보여줄 영역

2.입력받은 이름 inputName을 출석부 영역인 attendee에 
나타나도록 함수 attend()를 완성해봅시다.

*/

const target = document.getElementsByClassName("attend")[0];
const inputName = document.querySelector("input");
const attendee = document.getElementById("attendee");

target.addEventListener("click",() => {
    attendee.textContent = inputName.value;
});