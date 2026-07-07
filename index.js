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
     
      notes = document.querySelectorAll(".note");
      console.log(notes)
      notes.forEach((each, index) => {
        each.addEventListener("dblclick", () => {
          allNotes.splice(index, 1);
          noteContanier.innerHTML = viewNotes(allNotes)
          console.log(each, index)
        })
      })
    })
const viewNotes = (arr) => {
  return arr.map(each => `<div class="note"><h2>${each.title}</h2><p>${each.body}</p><input type="checkbox" ${each.checked ? "checked" : ""}><span>${each.time}</span></div>`).join("")
}
console.log(allNotes);
