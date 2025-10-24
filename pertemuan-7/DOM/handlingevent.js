// event handling

let button = document.getElementById ('myButton');

button.addEventListener('click', function(){
    alert('Button Was Clicked!');
    
});

// common event

let myElement = document.getElementById('my-element');

myElement.addEventListener('mouseover', function(){
    console.log('Mouse over event element!')
});

// event objek 
button.addEventListener ('click', function(event){
    console.log('button clicked!');
    console.log('event type: ',  event.type);
    console.log('Target element: ', event.target);
});