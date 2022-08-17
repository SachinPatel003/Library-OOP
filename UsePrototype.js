//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display() { }

Display.prototype.add = function (book) {
    tableBody = document.getElementById("tableBody");
    html = "";
    html = `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
            </tr>`;
    tableBody.innerHTML += html;
};

Display.prototype.clear = function () {
    libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
};

Display.prototype.validation = function (book){
    if(book.name.length<3||book.author.length<3){
        return false;
    }
    else{
        return true;
    }
}
Display.prototype.alert = function (type1,msg){
    alert1 = document.getElementById('alert1')
    html = ''
    html = `<div class="alert alert-${type1} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${msg}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`
    alert1.innerHTML = html
    setInterval(() => {
        alert1.innerHTML = ""
    }, 2000);
}

//add Submit Evant to form
libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", librarySubmit);

function librarySubmit(e) {
    console.log("submitt");

    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    }
    if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(bookName, authorName, type);

    let display = new Display();

    if (display.validation(book)){
        display.alert('success','submited')
        display.add(book);
        display.clear();
    }
    else {
        display.alert('danger','not submited')
    }

    e.preventDefault();
}
