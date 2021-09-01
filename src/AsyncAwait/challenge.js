const FetchData = require('../utils/FetchData');
const Api='https://rickandmortyapi.com/api/character/';


const request= async (url_api)=>{

    try {
        const data = await FetchData(url_api);
        const character= await FetchData(`${Api}${data.results[0].id}`);
        const dimension= await FetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(dimension.dimension);
    } catch (error) {
        console.error(error);
    }    

}


request(Api);




/* const fetchData = require('../utils/fetchData')
const fetch =require('node-fetch')
let API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {
        // const data = await fetchData(url_api);
        // const character = await fetchData(`${API}${data.results[0].id}`)
        // const origin = await fetchData(character.origin.url);
     
     
        const data = await (await fetch(url_api)).json();
        const character = await (await fetch(`${API}${data.results[0].id}`)).json();
        const origin = await (await fetch(character.origin.url)).json()



        console.log((data.info.count))
        console.log(character.name)
        console.log(origin.dimension)

    } catch (error) {
        console.error(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')

*/

