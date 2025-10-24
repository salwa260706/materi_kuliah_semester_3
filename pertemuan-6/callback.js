function fetchData(callback) {
    // Simulasi asynchronuous operation 
    setTimeout(function() {
        const data = 'Data yang Diambil!';
        callback(data);
    }, 1000);
}

// Menggunakan fungsi fetchdata dengan callback 
fetchData(function(data) {
    console.log(data);
});


// CALLBACK HELL 
fetchData(function(data) {
    process1(data, function(result1) {
        process2(result1, function(result2) {
            process3(result2, function(finalResult){
                console.log('Final Result: ', finalResult); 
            })
        });
    });

});