const add = document.getElementById("add");
const form = document.querySelector("form");
const saveBtn = document.getElementById("save")
const allNotes = [];
add.addEventListener("click", () => {
  form.style.display = "flex"
})
saveBtn.addEventListener("click", () => {
    
 
    console.log(noteObj)
    allNotes.push({
        title: form.querySelector("input").value,
        body:  form.querySelector("textarea").value,
    });
})
const view = document.getElementById("view");
view.addEventListener("click", () => {
    console.log(allNotes)
})
