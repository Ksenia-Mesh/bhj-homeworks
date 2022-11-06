const editor = document.getElementById('editor');

function restoreForm() {
    editor.value = localStorage.getItem("savedText");
    editor.addEventListener("keypress", function() {localStorage.setItem("savedText", textField.value);});    
}

document.addEventListener("DOMContentLoaded", restoreForm);
