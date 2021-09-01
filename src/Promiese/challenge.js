const FetchData = require('../utils/FetchData');


const Api='https://rickandmortyapi.com/api/character/';

FetchData(Api)
    .then(data=>{
        console.log(data.info.count);
        return FetchData(`${Api}${data.results[0].id}`)
    })
    .then(
        data => {
            console.log(data.name);
            return FetchData(data.origin.url)
        })
    .then(
        data=>{
            console.log(data.dimension);
        }    
    )
    .catch(err => console.error(err)); 