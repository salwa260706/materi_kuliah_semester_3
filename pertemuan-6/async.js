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


async function fetchData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            const data = 'Data yang Diambil!';
            resolve(data);
        }, 1000);
    });
}




async function getData(){
    try {
        const data = await fetchData()
        console.log(data)
    } catch(error){
        console.error(error)
    }
}

getData()

// async with promise

async function processData(){
    try {
        const data = await fetchData()
        const result1 = await process1(data)
        const result2 = await process2(result1)
        const finalResult = await process3(result2)
        console.log('Final Result: ', finalResult)
    }catch(error){
        console.error(error)
    }
}

processData()