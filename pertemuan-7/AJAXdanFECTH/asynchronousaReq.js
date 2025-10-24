// XMLHttpRequest (Traditional AJAX)

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log('Title:', response.title);
    } 
};
xhr.send();


// Fetch API (Modern AJAX)

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
        if(!response.ok){
            throw new Error('Network response was not ok'); 
        }
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.error('There has been a problem with your fetch operation:', error);
    });

    