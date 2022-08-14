const myInput = document.querySelector(".myInput")
const myButton = document.querySelector(".myButton")
const myList = document.querySelector(".myList")

myButton.addEventListener("click", function (event) {
    event.preventDefault()
    const myNewDiv = document.createElement('div')
    myNewDiv.setAttribute("class","thisDiv")
    if(myInput.value) {
        myList.append(myNewDiv)
    }

    const myLi = document.createElement('li')
    myLi.setAttribute("class","liClass")
    myLi.innerHTML = myInput.value
    myNewDiv.append(myLi)

    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class = "fas fa-check"></i>';
    doneButton.setAttribute("class","comleted");
    myNewDiv.append(doneButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.setAttribute("class","deleted");
    myNewDiv.append(trashButton);
    myInput.value = ""
})

myList.addEventListener("click", function(event) {
    const target = event.target;
    if(target.classList[0] === 'deleted') {
       const listToDelete = target.parentElement;
       listToDelete.remove()
    } 
    
    if(target.classList[0] === 'comleted') {
        const listToComplete = target.parentElement;
        listToComplete.classList.toggle("doneTask")
    }
   })


