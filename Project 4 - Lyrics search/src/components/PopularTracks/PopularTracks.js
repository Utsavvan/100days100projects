import { useState, useEffect, useContext } from "react";

import {NavLink} from 'react-router-dom';

import AppContext from "../../utils/Context/AppContext";
import {CORS_ANYWHERE,API_KEY} from "../../utils/config";

const PopularTracks = () => {
  const [trackList, setTrackList] = useState([]);
  const [text,setText] = useState('');

  const { Tracks } = useContext(AppContext);

  useEffect(() => {
    setTrackList(Tracks.track_list);
  },[]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const searchUrl = `${CORS_ANYWHERE}http://api.musixmatch.com/ws/1.1/track.search?apikey=${API_KEY}&q_track=${text}&q_lyrics=${text}`;

    const response = await fetch(searchUrl);

    const data = await response.json();

    setTrackList(data.message.body.track_list);

  }

  return (
    <>
      <div className="container text-center">
        <form onSubmit={submitHandler}>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
          <button className="btn-primary m-3" type="submit">Search</button>
        </form>
      </div>
        <div className="container text-center">
            <p>Top 10 Tracks</p>
        </div>
      <div className="container">
        <div className="row">
          {trackList &&
            trackList.map((tracks) => (
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <div className="card-body">
                    <p className="card-text">
                      {tracks.track.track_name}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <NavLink
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          to={`/lyrics/${tracks.track.track_id}`}
                        >
                          View
                        </NavLink>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PopularTracks;
