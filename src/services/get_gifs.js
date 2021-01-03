const apiKey = 'eRH6kC0Ol2Sbqj1DNGdx2ALy8FV92KC5';



export default function getGifs({keyword = "letras", limit = 5} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;
    console.log("Actualizando...");
    console.log(apiURL);
    return fetch(apiURL)
    .then(res => res.json())
    .then(res => {
        const gifs = res.data.map(img => {
            const {images, title, id} = img;
            console.log(images);
            const {url} = images.downsized_medium;
            console.log(url);
            return {title, id, url};
        });
        console.log(gifs);
        return gifs;
    })
}