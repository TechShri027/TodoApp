let btn=document.querySelector("button")
let inp=document.querySelector("input")
let ul=document.querySelector("ul")


btn.addEventListener("click", function(){
  let item=document.createElement("li")
  item.innerText=inp.value
  inp.value=""
  ul.appendChild(item);

  let btn=document.createElement("button")
  btn.innerHTML=`<i class="ri-delete-bin-6-line"></i>`
btn.classList.add("cancel")
item.appendChild(btn)


  // Add the task text with a checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  item.appendChild(checkbox);
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
    
