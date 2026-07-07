const add = document.getElementById("add");
const form = document.querySelector("form");
const saveBtn = document.getElementById("save")
const allNotes = [];
const succesMsg = document.getElementById("succesMsg");
const noteContanier = document.getElementById("note-contanier")
add.addEventListener("click", () => {
  form.style.display = "flex"
})
saveBtn.addEventListener("click", () => { 
    allNotes.push({
        title: form.querySelector("input").value,
        body:  form.querySelector("textarea").value,
    });
     form.style.display = "none"
     succesMsg.style.display = "block"
     noteContanier.innerHTML = viewNotes(allNotes)
     form.querySelector("input").value = "";
     form.querySelector("textarea").value = "";
})
const viewNotes = (arr) => {
  return arr.map(each => `<div class="note"><h2>${each.title}</h2><p>${each.body}</p></div>`).join("")
}
const view = document.getElementById("view");
view.addEventListener("click", () => {
    console.log(allNotes)
})
