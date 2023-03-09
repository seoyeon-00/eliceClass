/*
1. index.html의 <ul></ul> 내에 li 
태그 문장 20개를 createTextNode()와 appendChild()를 사용해서 띄어보세요.
*/


let ul = document.querySelector("ul");

for(let i = 0; i < 21; i++){

    const creLi = document.createElement("li");
    const liText = document.createTextNode(i + "번째 문장");

    creLi.appendChild(liText);
    ul.appendChild(creLi);

}