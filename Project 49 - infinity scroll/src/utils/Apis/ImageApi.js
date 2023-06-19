async function fetchRandom(count) {
  try {
    const API_KEY = "3WX4yIG8oj3U6zWaiuvVBRwDhaDlF0RC1D_cLIdXUP4";

    const BASE_URL = "https://api.unsplash.com";

    const response = await fetch(
      `${BASE_URL}/photos/random?client_id=${API_KEY}&count=${count}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchRandom;
