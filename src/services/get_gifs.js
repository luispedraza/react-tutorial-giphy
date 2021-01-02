const apiKey = 'eRH6kC0Ol2Sbqj1DNGdx2ALy8FV92KC5';



export default function getGifs({keyword = "letras"} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    console.log("Actualizando...");
    console.log(apiURL);
    return fetch(apiURL)
    .then(res => res.json())
    .then(res => {
        const gifs = res.data.map(img => img.images.downsized_medium.url);
        return gifs;
    })
}