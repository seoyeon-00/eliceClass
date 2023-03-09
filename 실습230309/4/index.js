/*
1. id가 form, input, answer인 요소를 가져오세요.
2. 가져온 form 요소에 EventListenr를 연결하여 버튼이 클릭할 때 코드가 실행되도록 작성하세요.
3. input 요소에 있는 값을 answer 요소에 저장하여 출력하세요.
*/

const form = document.getElementById("form");
const input = document.getElementById("input");
const answer = document.getElementById("answer");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    answer.textContent = input.value;
    form.reset();
});