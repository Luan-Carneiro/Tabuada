let getInputUser = document.querySelector("input#in1")
let getSelectOutput = document.querySelector("select#to1")

function create() {
    if ( getInputUser.value.length == 0 ) {
        window.alert("ERROR! Empty Field")
    } else {
        let getValueInput = Number(getInputUser.value)
        getSelectOutput.innerHTML = ""
        counter = 0

        while ( counter < 10 ) {
            counter++
            let createItem = document.createElement("option")
            createItem.text = `${getValueInput} x ${counter} = ${getValueInput * counter}`
            getSelectOutput.appendChild(createItem)
        }
    }
}