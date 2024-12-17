let btn=document.querySelector("button")
let inp=document.querySelector("input")
let ul=document.querySelector("ul")

btn.addEventListener("click", function(){
  let item=document.createElement("li")
  item.innerText=inp.value
  inp.value=""
  ul.appendChild(item);

  let btn=document.createElement("button")
  btn.innerText="cancel"
btn.classList.add("cancel")
item.appendChild(btn)
})


ul.addEventListener("click", function(event){
  if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
  }

})

// let btns=document.querySelectorAll(".cancel")
// for(btn of btns){
//     btn.addEventListener("click", function(){
//       let par=this.parentElement;
//       par.remove();
//     })
    
