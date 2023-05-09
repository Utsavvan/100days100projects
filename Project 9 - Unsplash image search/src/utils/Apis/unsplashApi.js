import {accessKey} from '../config';

const searchPhotos = async (query) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${query}&page=1&per_page=15`,
    requestOptions
  )
  const data = await response.json()

  return data;
};

export {
    searchPhotos
}
