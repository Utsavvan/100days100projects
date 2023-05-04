import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import {
  CORS_ANYWHERE,
  ROOT_URL,
  API_KEY,
  RESULTS,
  GET_TOP_SONGS_ENDPOINT,
} from "../../utils/config";

const LyricsPage = () => {
  let { track_id } = useParams();

  const [lyrics, setLyrics] = useState();

  const GET_LYRICS_ENDPOINT = `track.lyrics.get?apikey=${API_KEY}&track_id=${track_id}`;

  useEffect(() => {
    const Lyrics = getTrackLyrics().then((response) => {
      setLyrics(response.message.body.lyrics.lyrics_body);
    });
  }, []);

  async function getTrackLyrics() {
    const response = await fetch(
      `${CORS_ANYWHERE}${ROOT_URL}${GET_LYRICS_ENDPOINT}`
    );

    const data = await response.json();
    console.log(data);
    return data;
  }
  console.log(lyrics);
  return (
    <>
      <div className="container">
        <pre>{lyrics}</pre>
      </div>
    </>
  );
};

export default LyricsPage;
