let btn=document.querySelector("button")
let inp=document.querySelector("input")
let ul=document.querySelector("ul")


btn.addEventListener("click", function(){
  if (inp.value.trim() !== "") {


    let task = inp.value.trim();

    // Create a new list item
    let item = document.createElement("li");
 


  // Add the task text with a checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  item.appendChild(checkbox);

  inp.value=""
  ul.appendChild(item);
  let taskText = document.createTextNode(" " + task); // Add space for better readability
  item.appendChild(taskText);

  let btn=document.createElement("button")
  btn.innerHTML=`<i class="ri-delete-bin-6-line"></i>`
btn.classList.add("cancel")
item.appendChild(btn)
  }

})


ul.addEventListener("click", function(event){
  if(event.target.closest(".cancel")){
    let listItem=event.target.closest("li");
    listItem.remove();
    
  }

})



// Add event listener for toggling strike-through on checkbox change
ul.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    let listItem = event.target.closest("li");
    if (event.target.checked) {
      listItem.style.textDecoration = "line-through";
    } else {
      listItem.style.textDecoration = "none";
    }
  }
});


// let btns=document.querySelectorAll(".cancel")
// for(btn of btns){
//     btn.addEventListener("click", function(){
//       let par=this.parentElement;
//       par.remove();
//     })
    
