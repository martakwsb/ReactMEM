import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MemesList from "./components/MemesList";
import HotMemes from "./components/HotMemes";
import RegularMemes from "./components/RegularMemes";
import Favorite from "./components/Favorite";
import axios from "axios";
import Generator from "./components/Generator";

function App() {
  const [memeList, setMemeList] = useState([]);

  useEffect(() => {
    const DATABASE = "/memes/database.json";
    axios
      .get(DATABASE)
      .catch(function (error) {
        if (error.response.status) {
          console.log(error.response.status);
        }
      })
      .then((response) => setMemeList(response.data.memes));
  }, []);

  const handleUpvote = (memeId) => {
    console.log(memeId);
    const memesListCopy = [...memeList];
    const index = memesListCopy.findIndex((meme) => meme.id === memeId);

    if (memesListCopy[index].upvotedByYou) {
      const newUpvotes = --memesListCopy[index].upvotes;
      memesListCopy[index].upvotes = newUpvotes;
      memesListCopy[index].upvotedByYou = false;
    } else {
      const newUpvotes = ++memesListCopy[index].upvotes;
      memesListCopy[index].upvotes = newUpvotes;
      memesListCopy[index].upvotedByYou = true;
    }

    setMemeList(memesListCopy);
  };

  const handleDownvote = (memeId) => {
    const memesListCopy = [...memeList];
    const index = memesListCopy.findIndex((meme) => meme.id === memeId);

    if (memesListCopy[index].downvotedByYou) {
      const newDownvotes = --memesListCopy[index].downvotes;
      memesListCopy[index].downvotes = newDownvotes;
      memesListCopy[index].downvotedByYou = false;
    } else {
      const newDownvotes = ++memesListCopy[index].downvotes;
      memesListCopy[index].downvotes = newDownvotes;
      memesListCopy[index].downvotedByYou = true;
    }
    setMemeList(memesListCopy);
  };

  const handleFavorite = (memeId) => {
    const memesListCopy = [...memeList];
    const index = memesListCopy.findIndex((meme) => meme.id === memeId);

    memesListCopy[index].favorite = !memesListCopy[index].favorite;

    setMemeList(memesListCopy);
  };

  const hotMemes = memeList.filter((meme) => meme.upvotes > 30);
  const regularMemes = memeList.filter((meme) => meme.upvotes <= 30);
  const favoriteMemes = memeList.filter((meme) => meme.favorite);
  return (
    <Router>
      <div className="App">
        <div className="Banner"></div>
        <div className="wrapper">
          <Navbar />
          <main className="main">
            <Routes>
              <Route
                path="/"
                element={
                  <MemesList
                    memeList={memeList}
                    handleDownvote={handleDownvote}
                    handleUpvote={handleUpvote}
                    handleFavorite={handleFavorite}
                  />
                }
              />
              <Route
                path="/hot-memes"
                element={
                  <HotMemes
                    memeList={hotMemes}
                    handleDownvote={handleDownvote}
                    handleUpvote={handleUpvote}
                    handleFavorite={handleFavorite}
                  />
                }
              />
              <Route
                path="/regular-memes"
                element={
                  <RegularMemes
                    memeList={regularMemes}
                    handleDownvote={handleDownvote}
                    handleUpvote={handleUpvote}
                    handleFavorite={handleFavorite}
                  />
                }
              />
              <Route
                path="/favorite"
                element={
                  <Favorite
                    memeList={favoriteMemes}
                    handleDownvote={handleDownvote}
                    handleUpvote={handleUpvote}
                    handleFavorite={handleFavorite}
                  />
                }
              />
              <Route path="/generator" element={<Generator />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
