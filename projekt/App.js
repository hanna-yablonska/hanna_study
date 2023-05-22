 

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
  if(inputBox.value === '') {
    alert("Your must write something")
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData() 
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData() 
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);  // зберігає дані
                                                          // у формі рядка
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

const aboutLink = document.getElementById('.about');
const contactLink = document.getElementById('.contact');

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();

  window.open('about.html', '_blank');
});

contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.open('contact.html');
})



