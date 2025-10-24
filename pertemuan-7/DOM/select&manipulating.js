


// contoh memilih elemen DOM dan memanipulasinya

let heading = document.getElementById('main-heading');
let paragraphs = document.getElementsByClassName('text-paragraph');
let firstParagraph = document.querySelector('p');

heading.textContent = "Selamat Datang di Pemrograman Web";

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "blue";
}

// Manipulation Element
heading.innerHTML = 'New Heading'
paragraphs[0].style.color = 'Biru'
firstParagraph.setAttribute('class', 'importan')


// create  and appending element
let newParagraph = document.createElement('p');
newParagraph.innerHTML = ' ini paragraph baru '
document.body.appendChild(newParagraph);