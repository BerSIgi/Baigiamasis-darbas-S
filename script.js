const host = 'localhost';
const port = 5500;

const selectedRow = null

function onFormSubmit() {
    if (validate()) {
        const formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    const formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["surname"] = document.getElementById("surname").value;
    formData["email"] = document.getElementById("email").value;
    formData["age"] = document.getElementById("age").value;
    return formData;
}

function insertNewRecord(data) {
    const table = document.getElementById("visitorsList").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.surname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = ` <img alt="button-icon" onClick="onEdit(this)" src="Pencil-icon.png">
                       <img alt="button-icon" onClick="onDelete(this)"src="delete-icon.png">`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.surname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.age;
}

function onEdit(td) {
    if (confirm('Taisyti įrašą?')) {
        row = td.parentElement.parentElement;
        document.getElementById("visitorsList").editRow(row.rowIndex);
        editForm();
    }
        // const name=document.getElementById("name"+td);
        // const surname=document.getElementById("surname"+td);
        // const email=document.getElementById("surname"+td);
        // const age=document.getElementById("age"+td);
	
        // const name_data=name.innerHTML;
        // const surname_data=surname.innerHTML;
        // const email_data=email.innerHTML;
        // const age_data=age.innerHTML;
	
        // name.innerHTML="<input type='text' id='name_text"+td+"' value='"+name_data+"'>";
        // surname.innerHTML="<input type='text' id='surname"+td+"' value='"+surname_data+"'>";
        // surname.innerHTML="<input type='text' id='surname"+td+"' value='"+surname_data+"'>";
        // age.innerHTML="<input type='number' id='age"+td+"' value='"+age_data+"'>";

}
function onDelete(td) {
    if (confirm('Ar tikrai ištrinti šį įrašą?')) {
        row = td.parentElement.parentElement;
        document.getElementById("visitorsList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}

// const elementDataMap = new WeakMap(formData)

// const someEl = document.querySelector('#some-el')

// elementDataMap.set(
//   someEl, {
//     prop1: 'val',
//     prop2: someComplexValue
// });

// const elData = elementDataMap.get(formData);