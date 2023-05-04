import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import {createBrowserRouter,RouterProvider ,Outlet} from 'react-router-dom';

import AppContext from "./utils/Context/AppContext";
import {CORS_ANYWHERE,ROOT_URL,API_KEY,RESULTS,GET_TOP_SONGS_ENDPOINT} from './utils/config'

import PopularTracks from './components/PopularTracks/PopularTracks';
import LyricsPage from "./components/LyricsPage/LyricsPage";
import Header from './components/Header/Header'; 

const App = () => {
  const [tracks, setTracks] = useState([]);


  useEffect(() => {
    const populartracks = getPopularTracks().then((response) => {
      setTracks(response);
    });
  }, []);

  async function getPopularTracks() {
    const response = await fetch(
      `${CORS_ANYWHERE}${ROOT_URL}${GET_TOP_SONGS_ENDPOINT}`
    );
    const data = await response.json();
    return data.message.body;
  }

  return (
    <>
      <AppContext.Provider
        value={{
          Tracks: { ...tracks },
          Lyrics: {},
        }}
      >
        <Header/>
        <Outlet/>
      </AppContext.Provider>
    </>
  );
};

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/',
                element: <PopularTracks/>
            },
            {
                path:'/lyrics/:track_id',
                element: <LyricsPage/>
            }
        ]
    },
    
])

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
