let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


    let Api= 'https://rickandmortyapi.com/api/character/';
    const FetchData = (url_api, callback)=>{
        let request=new XMLHttpRequest();
        request.open('GET', url_api,true);
        request.onreadystatechange =(event)=>{
            if(request.readyState === 4){
                if(request.status === 200){
                    callback(null,JSON.parse(request.responseText));
                }else{
                    const error = new Error('Error ' + url_api);
                    return callback(error, null)
                }
            }
        }
        request.send(); 
    }

    FetchData(Api, (error1, data1) => {
        // si da error, retornamos un error
        if(error1) return console.error(error1);
        // luego buscamos en la api el primer ID
        FetchData(Api + data1.results[0].id, (error2, data2) => {
           // si da error, retornamos un error
            if(error2) return console.error(error2);
          // por ultimo la consulta a la api que contiene su dimension
            FetchData(data2.origin.url, (error3, data3) => {
            // si error, matamos retornando un error
            if(error3) return console.error(error3);
            
            // mostramos los resultados :) 
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
            
            // rutas de las peticiones en orden
            console.log(Api);
            console.log(Api + data1.results[0].id); 
            console.log(data2.origin.url); 
        
            });
        });
    });