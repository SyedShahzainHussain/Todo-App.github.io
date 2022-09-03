var list = document.getElementById('todo-list')
var delbtn2 = document.getElementById('delbtn')
var todoItem = document.getElementById('fieldInput')

function addTodo() {

    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)

    li.appendChild(liText)
    list.appendChild(li)
    todoItem.value = ""

    delbtn2.addEventListener('click', () => {
        list.innerHTML = ""
        todoItem.value = ""
    })

    var eidtbtn = document.createElement('button2');
    var edittext = document.createTextNode('Edit')
    eidtbtn.setAttribute('class', 'btn3')
    eidtbtn.setAttribute('onclick','eidtItem(this)')
    eidtbtn.appendChild(edittext)
    li.appendChild(eidtbtn)

    var delbtn = document.createElement('button1');
    var deltext = document.createTextNode('Delete')
    delbtn.setAttribute("class", "btn2")
    delbtn.setAttribute('onclick', 'deleteItem(this)')
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)
}


function deleteItem(e) {
    e.parentNode.remove()
}


function eidtItem(e){
    var val = prompt('Enter the value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val

}