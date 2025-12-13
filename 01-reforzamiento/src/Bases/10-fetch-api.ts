//*10 FETCH API */

import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'vfPIcNZKT0fDc8ooCt6NvtR9Mmti11XZ';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);


const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}


myRequest.then((response) => response.json())
.then(({data}: GiphyRandomResponse)=> {

    const urlimg = data.images.original.url;

    createImageInsideDOM(urlimg);
    // const urlimg = data.data.images.original.url;
    console.log(urlimg);


})


.catch(error =>{
    console.log(error);
})