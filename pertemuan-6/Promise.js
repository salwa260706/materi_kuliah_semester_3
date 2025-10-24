
function fetchData(){
    return new Promise(function(resolve, reject){
        // simulasi asynchronous operation
        setTimeout(function(){
            const data = 'fetch data'
            resolve(data);
        }, 1000)
    })
}

// menggunakan promise
fetchData()
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.error(error)
    })

// chaining promise
fetchData()
    .then(function(data){
        return process1(data)
    })
    .then(function(result1){
        return process2(result1)
    })
    .then(function(result2){
        return process3(result2)
    })
    .catch(function(error){
        console.error(error)
    })