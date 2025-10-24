// Basic Fetch Syntax
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

// Sending Data with Fetch 
fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    nody: JSON.stringify({
        key1 : 'value1',
        key2 : 'value2',
    }),
})
    .then(function(response) {
        if(!response.ok){
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