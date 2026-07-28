const add = document.getElementById("add");
const form = document.querySelector("form");
const saveBtn = document.getElementById("save")
const allNotes = [];
const succesMsg = document.getElementById("succesMsg");
const noteContanier = document.getElementById("note-contanier")
let notes;


add.addEventListener("click", () => {
  form.style.display = "flex"
})
saveBtn.addEventListener("click", () => { 
    allNotes.push({
        title: form.querySelector("input").value,
        body:  form.querySelector("textarea").value,
        checked: false,
        time: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()
    });
     form.style.display = "none"
     succesMsg.style.display = "block"
     noteContanier.innerHTML = viewNotes(allNotes)
     form.querySelector("input").value = "";
     form.querySelector("textarea").value = "";
     setTimeout(() => {
        succesMsg.style.display = "none"
     }, 2000)
    })

/*noteContanier.addEventListener("adsf", (e) =>{
  console.log(e.target.closest(".note"))
  allNotes.splice(e.target.closest(".note").id.slice(1), 1)
  noteContanier.innerHTML = viewNotes(allNotes)
})*/
const viewNotes = (arr) => {
 return  arr.map((each, index, array) => `<div id="a${index}" class="note">
            <h2>${each.title}</h2>
            <p>${each.body}</p>
            <input type="checkbox" ${each.checked ? "checked" : ""}>
            <div class="menu">
              <span>˅</span>
               <ul class="menu-list">
                <li class="edit">Edit</li>
                <li class="delete">Delete</li>
                <li class="cancel">Cancel</li>
               </ul>
            </div>
           <span class="time">${each.time}</span>
          </div>`).join("")
}
/*noteContanier.addEventListener("click", (e) => {
if(e.target.closest(".menu")) {
  console.log(e.target.lastChild)
  e.target.lastChild.appendChild(createOptions)
}
})*/
 let hasViewit = false;
 let isMenuListBlock = false;
 let isSpanDisplayInlineBlock = false;
noteContanier.addEventListener("click", (e) => {

 



  if(e.target.closest(".menu") && hasViewit === false && isMenuListBlock === false) {
    e.target.closest(".menu").parentElement.classList.add("clicked")
    e.target.closest(".menu").querySelector("span").classList.add("viewit")
    e.target.closest(".menu").querySelector(".menu-list").style.display = "block"

    hasViewit = true;
    isMenuListBlock = true;
    isSpanDisplayInlineBlock = true;
   
    return;
  } 
 if(e.target.closest(".menu") && hasViewit === true && isMenuListBlock === true) {
     e.target.closest(".menu").parentElement.classList.remove("clicked")
     e.target.closest(".menu").querySelector("span").classList.remove("viewit")
     e.target.closest(".menu").querySelector(".menu-list").style.display = "none"
    //  e.target.closest(".menu").querySelector("span").style.display = "none"

     hasViewit = false;
     isMenuListBlock = false;
     isSpanDisplayInlineBlock = false;
  }
})
document.addEventListener("click", (e) => {
  if(e.target.closest(".menu") === null && hasViewit === true && isMenuListBlock === true) {
    document.querySelector(".clicked").classList.remove("clicked")
    document.querySelector(".viewit").classList.remove("viewit")
    document.querySelector(".menu-list").style.display = "none"
    document.querySelector(".menu span").style.display = "none"
    hasViewit = false;
    isMenuListBlock = false;
    isSpanDisplayInlineBlock = false;
  }
})
