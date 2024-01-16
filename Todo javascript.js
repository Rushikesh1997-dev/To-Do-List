const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector ('#list-Container');

function addTask(){
if(inputBox.value===''){
    alert("You must write something!")
}else{
    let li = document.createElement('li');
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    
    
    let span = document.createElement("span");
    span.innerHTML= "\u00d7 ";
    li.appendChild(span);
}
inputBox.value='';
saveData();

}

// function for selecting completed task and deleting task
listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
}else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
   
}

},false);

// storing data on website and display it

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();



