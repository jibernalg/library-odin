//buttons events
const newButton=document.querySelector("#newButton");
newButton.addEventListener('click',function(){
    addBookToLibrary();
})

const clearBtn=document.querySelector("#clearButton");
clearBtn.addEventListener('click',function(){
    clearAll();
    
})
/*
//Crear constructor
function Book(titulo,autor,read){
    this.titulo=titulo;
    this.autor=autor;
    this.read=read;
};*/

//Crear clase

class Book{
    constructor(titulo,autor,read){
        this.titulo=titulo;
        this.autor=autor;
        this.read=read; 
    }
}

//Array para almacenar en memoria
let myLibrary=[];

//Crear libros y agregar al array 
function addBookToLibrary(){    
    const newBook = new Book(titulo.value,autor.value,read.checked);
    if (newBook.titulo=="" || newBook.autor==""){
        return
    }
    myLibrary.push(newBook);
    render();
    //clear inputs
    titulo.value="";
    autor.value="";
    read.checked=false;
}

//Constantes
const titulo = document.querySelector("#title");
const autor = document.querySelector("#author"); 
const read = document.querySelector("#read");

//Crear DOM
function render() {
    const removerDiv=document.querySelectorAll(".ficha");
    for(let i=0;i<removerDiv.length;i++){
        removerDiv[i].remove();
    }
   
    for (let i=0; i<myLibrary.length; i++){
        crearDom(myLibrary[i]);
    }
}

function crearDom(item){
    //crear fichero        
    const libreria=document.querySelector(".library");
    let libro=document.createElement('div');
    libro.setAttribute('class','ficha');
    libreria.appendChild(libro);
    //imprimir titulo
    const tituloLibro=document.createElement('h2');
    tituloLibro.textContent=item.titulo;
    libro.appendChild(tituloLibro);
    //imprimir autor
    let autorLibro=document.createElement('p');
    autorLibro.textContent=item.autor;
    libro.appendChild(autorLibro);
    //imprimir read
    let readLibro=document.createElement('p');
    readLibro.setAttribute('class','read');
    if (item.read==true) {
        readLibro.textContent="Read";
    } else {
        readLibro.textContent="Not read";
    }
    libro.appendChild(readLibro);   
    //imprimir borrar
    let removeBtn=document.createElement('button');
    removeBtn.setAttribute('class','borrarFicha');
    removeBtn.textContent="Delete";
    libro.appendChild(removeBtn);

    removeBtn.addEventListener('click',()=>{
        myLibrary.splice(myLibrary.indexOf(item),1);
        render();
    })
}

function clearAll(){
    titulo.value="";
    autor.value="";
    read.checked=false;
}






