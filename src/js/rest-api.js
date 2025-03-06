const BASE_URL = `https://pixabay.com/api/`;
const KEY = `49167758-1510a922add5d62de9e0ce5f1`;


export async function getImages(query, page = 1) {
    try {
        const resp = await fetch(`${BASE_URL}?key=${KEY}&q=${query}&page=${page}&per_page=20&image_type=photo&pretty=true`);
        if (!resp.ok) {
            throw new Error("!!!!!");
        }
        const data = await resp.json();
        return data;
    } catch (e) {
        console.log(resp);
    }
}

