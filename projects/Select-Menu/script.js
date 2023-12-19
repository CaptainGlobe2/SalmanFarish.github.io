let selectField = document.getElementById("selectField");
let selectText = document.getElementById('selectText');
let options = document.getElementsByClassName("option");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate")
    }
}

selectField.onclick = function(){
    list.classList.toggle("hide")
    arrowIcon.classList.toggle("rotate")
}

