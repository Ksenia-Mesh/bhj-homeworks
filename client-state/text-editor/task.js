let editor = document.getElementById("editor");

if (localStorage.editText !== null) {
  editor.value = localStorage.editText;
}
window.addEventListener("unload", event => {

  let textTextArea = editor.value;
  if (textTextArea !== undefined) {
  localStorage.setItem("editText", textTextArea);
  }  
})