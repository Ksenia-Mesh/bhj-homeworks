const checkBoxes = document.querySelectorAll('.interest');

for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('change', function() {
        let parentLi = event.currentTarget;
        let parentCheckbox = parentLi.querySelector('.interest__check');
        let childCheckboxes = parentLi.querySelectorAll('.interest__check');
            
        if (event.target === parentCheckbox) {
            for (let j = 0; j < childCheckboxes.length; j++) {
                childCheckboxes[j].checked = parentCheckbox.checked;                
            }
        }
 
        else { 
            let checkedChilds = event.target.closest('ul').querySelectorAll('.interest__check:checked');    
            if (checkedChilds.length === 0) {
                parentCheckbox.checked = false;
                parentCheckbox.indeterminate = false;                        
            }
            else if  (checkedChilds.length === childCheckboxes.length - 1) {
                parentCheckbox.checked = false;  
                parentCheckbox.indeterminate = false;                                  
            }
            else {
                parentCheckbox.indeterminate = false;
            }
        }
    });
}