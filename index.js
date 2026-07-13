const add = document.getElementById("add");
const form = document.querySelector("form");
const saveBtn = document.getElementById("save")
const allNotes = [];
const succesMsg = document.getElementById("succesMsg");
const noteContanier = document.getElementById("note-contanier")
let notes;
const createOptions = document.createElement("ul");
createOptions.appendChild(document.createElement("li")).innerHTML = "Edit";
createOptions.appendChild(document.createElement("li")).innerHTML = "Delete";
createOptions.classList.add("note-menu")

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

noteContanier.addEventListener("adsf", (e) =>{
  console.log(e.target.closest(".note"))
  allNotes.splice(e.target.closest(".note").id.slice(1), 1)
  noteContanier.innerHTML = viewNotes(allNotes)
})
const viewNotes = (arr) => {
 return  arr.map((each, index, array) => `<div id="a${index}" class="note"><h2>${each.title}</h2><p>${each.body}</p><input type="checkbox" ${each.checked ? "checked" : ""}><div class="menu"><span>☰</span><div class="positioned"></div></div><span class="time">${each.time}</span></div>`).join("")
}
noteContanier.addEventListener("click", (e) => {
if(e.target.closest(".menu")) {
  console.log(e.target.lastChild)
  e.target.lastChild.appendChild(createOptions)
}
})
