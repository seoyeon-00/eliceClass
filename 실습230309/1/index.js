//마우스를 올리면 각 영역의 이름과 동일한 색으로 배경색이 변하도록 클래스를 추가해보세요.요소의 스타일을 직접 바꾸지 않도록 주의하세요!

const redBox = document.getElementById("red");
const yelloBox = document.getElementById("yellow");
const greenBox = document.getElementById("green");

redBox.addEventListener("mouseenter", () => {
    redBox.classList.add("red");
});

yelloBox.addEventListener("mouseenter", () => {
    yelloBox.classList.add("yellow");
});

greenBox.addEventListener("mouseenter", () => {
    greenBox.classList.add("green");
});