const todo = document.querySelector('#todo')
const todoButton = document.querySelector(".todo-button");

todoButton.addEventListener("click", add);
todo.addEventListener("click", hapusList)

function add() {
    if (task.value == "") {
        alert('tidak boleh kosong')
    } else {
        let task = document.getElementById('task')
        let li = document.createElement('li')// => <li>  </li>
        li.className = "list-group-item "
        li.appendChild(document.createTextNode(task.value))

        const btnHapus = document.createElement('button')
        btnHapus.className = "btn btn-danger position-absolute top-0 end-0"
        li.appendChild(btnHapus)

        const spanHapus = document.createElement('span')
        spanHapus.className = "delete-list"
        spanHapus.innerHTML = "Hapus"
        btnHapus.appendChild(spanHapus)
        todo.appendChild(li)
        task.value = ""
    }
}

function hapusList(e) {
    e.preventDefault()

    if (e.target.classList.contains("delete-list")) {
        const elemen = e.target.parentElement
        const elemenList = elemen.parentElement
        elemenList.remove()
    }
}

