const RAPID_API_HOST = "youtube-v31.p.rapidapi.com"

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': RAPID_API_HOST
    }
}

const fetchAPIData = async (url) => {
    const response = await fetch(`https://youtube-v31.p.rapidapi.com/${url}`, options)
    return response.json()
}
export default fetchAPIData;