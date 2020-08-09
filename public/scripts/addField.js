// 1 - Look for the button by its ID
document.querySelector("#add-time")
// 2 - WHEN the user clicks on the button
.addEventListener(`click`, cloneField);


// 3 - Execute an action
function cloneField() {
    // Duplicate the fields. Which fields? .schedule-item
    const newFieldContainer = document.querySelector(`.schedule-item`).cloneNode(true);

    //Get the fields to clean then
    const fields = newFieldContainer.querySelectorAll(`input`);

    //clean every field
    fields.forEach(function(field) {
        //gets the current field and clean it
        field.value = ""
    })

    // Insert the fields on the page. Where? #schedule-items
    document.querySelector(`#schedule-items`).appendChild(newFieldContainer);

}
    

