// 전체 스크립트 엄격 모드 구문
'use strict'

//let 은 먼저 선언하고 나중에 값 할당이 가능하기때문에 배열로 사용
let itemList=[];
let myButton = document.querySelector(".myButton"); //css 선택자를 만족하는 첫번째 Element 객체 , 결과가 없다면 null.

myButton.addEventListener("click", addItem);  //click에 대한 이벤트 유형이 나타날 경우 addItem함수를 호출하도록 만듬


function addItem() {    //리스트목록을 추가함
    let item = document.querySelector(".item").value; //css .item이 실행될때의 값을 넣어줌
    if(item !=null){                    //만약 값이 null이 아니라면 
        itemList.push(item);            //배열에 그 값을 넣어줌
        document.querySelector(".item").value = ""; //값을 넣어준 다음 해당 칸을 다시 빈 칸으로 만듬
        document.querySelector(".item").focus();  //초점을 text칸으로 다시 이동시킴
    }

    showList();    //함수의 실행이 완료되었으면 리스트를 보여주는 함수를 아래에서 실행시켜 줌
}


function showList(){
    let list="<ul>"  //정렬되지 않은 목록으로 묶어줌
    for(let i=0;i<itemList.length;i++) {  // i를 배열의 길이만큼 반복시킴
        list+="<li>"+itemList[i]+"<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
        // <li>태그를 통해서 정렬하고 배열안에 있는 text를 집어넣고 <span>을 통하여 구간을 나눔
    } 
    list+="</ul>";
    //list의 내용을 .item__list의 클래스로 넘겨줌
    document.querySelector(".item__list").innerHTML=list;  
    

    //리스트에 있는 close클래스를 선택할 경우 해당 내용을 deleteButtons 변수에 담아줌
    let deleteButtons=document.querySelectorAll(".close");
    for(let i=0;i<deleteButtons.length;i++){
        deleteButtons[i].addEventListener("click",deleteItem); //반복문을 통해서 click된 text내용을 deletItem 함수에 보냄
    }
}

function deleteItem(){
    let id=this.getAttribute("id");  //넘어온 요소의 id를 반환함
    itemList.splice(id, 1);   //리스트에 있는 해당 id를 삭제 splice("삭제할 요소","제거할 요소의 수")
    showList();               //삭제가 완료되면 변경된 리스트를 다시 나타냄
}

let checkList=document.querySelector(".item__list");
checkList.addEventListener("click",event =>{
    if(event.target.tagName==='LI'){        //li라는 태그이름에서 이벤트가 발생했다면
        event.target.classList.toggle('checked');  //classList.toggle(): 클래스값이 있는지 체크하고 없으면 더하고 있으면 제거한다
    }
});







