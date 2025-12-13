//*11 ASYNC & AWAIT */

import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'vfPIcNZKT0fDc8ooCt6NvtR9Mmti11XZ';



const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

//! ASYNC & AWAIT
const getRandomGifUrl = async (): Promise<string>=>{

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

    const {data} = (await response.json()) as GiphyRandomResponse;

    return data.images.original.url;
};

//! son lo mismo funcionan igual

//getRandomGifUrl().then((url)=> createImageInsideDOM(url));

getRandomGifUrl().then(createImageInsideDOM);
