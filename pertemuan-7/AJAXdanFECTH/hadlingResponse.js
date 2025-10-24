// Response Object(Fecth):

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });



    // Handling JSON Response
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(data){
        console.log(data);   
    })
    .catch(function(error){
        console.error('Error:', error);
    });