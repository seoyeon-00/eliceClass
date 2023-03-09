/*
1.index.html을 확인하시고 index.js에 코드를 작성하세요.

2.highlightWords() 라는 함수에 단어의 길이가 8 이상인 경우에만 
"<span class='lightext'></span>" 를 사용해서 해당 단어를 하이라이트 하세요.

3.highlight() 함수에 getElementsByTagName()를 사용해서 볼드체인 경우에는 
텍스트 색을 파란색으로 바꾸세요.

4.returnNormal() 함수에는 텍스트 색을 검은색으로 바꾸는 코드를 작성하세요.
*/



function highlightWords() {

    const text = document.getElementById("targetp").innerHTML;
    const textArr = text.split(" ");


    var addText = "";

    for(let i = 0; i < textArr.length; i++){
        let textContainer = textArr[i];
        let replacementWord;

        if(textContainer.length >= 8){
            replacementWord = "<span class='lightext'>"+ textContainer +"</span>";
        } else {
            replacementWord = textContainer;
        }

        addText = addText + " " + replacementWord + " ";
    }

        return addText;

  }

  document.getElementById("targetp").innerHTML = highlightWords();



  
  // 3. 볼드체인 텍스트를 모두 파란색으로 변경하세요.
  function highlight() {
    var strongTag = document.getElementsByTagName("strong");

    for(let i of strongTag){
        strongTag[i].style.color = "blue";
    }

  }
  
  // 4. 볼드체인 텍스트를 모두 검은색으로 변경하세요.
  function returnNormal() {
    var strongTag = document.getElementsByTagName("strong");

    for(let i of strongTag){
        strongTag[i].style.color = "black";
    }
  }
  