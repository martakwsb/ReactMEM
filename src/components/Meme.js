import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/esm/Image";
import "../styles/Meme.css";

function Meme(props) {
  const handleLikeClick = () => {
    props.handleUpvote(props.id);
  };

  const handleDislikeClick = () => {
    props.handleDownvote(props.id);
  };

  const handleFavoriteClick = () => {
    props.handleFavorite(props.id);
  };

  const likeBtnText = props.upvotedByYou ? "Lubisz to" : "Lubię to";
  const dislikeBtnText = props.downvotedByYou
    ? "Nie lubisz tego"
    : "Nie lubię tego";
  const favoriteBtnText = props.favorite ? "Zapamiętano" : "Zapamiętaj";

  return (
    <div>
      <Card border="info" className="card">
        <Card.Header></Card.Header>
        <Card.Body className="card-content">
          <Card.Title>{props.description}</Card.Title>
          <Image src={props.src} className="image" />
          <div className="container">
            <div className="btn-container">
              <div className="like-container">
                <button
                  onClick={handleLikeClick}
                  disabled={props.downvotedByYou}
                  className={`like-btn ${props.upvotedByYou ? "active" : ""}`}
                >
                  <img src="/like.png" alt="Like" className="btn-image" />
                  {likeBtnText}
                </button>
                <span
                  className={`like-count ${props.upvotedByYou ? "active" : ""}`}
                >
                  {props.upvotes}
                </span>
              </div>
              <div className="dislike-container">
                <button
                  onClick={handleDislikeClick}
                  disabled={props.upvotedByYou}
                  className={`dislike-btn ${
                    props.downvotedByYou ? "active" : ""
                  }`}
                >
                  <img src="/dislike.png" alt="Dislike" className="btn-image" />
                  {dislikeBtnText}
                </button>
                <span
                  className={`dislike-count ${
                    props.downvotedByYou ? "active" : ""
                  }
                  `}
                >
                  {props.downvotes}
                </span>
              </div>
              <div className="favorite-container">
                <button
                  onClick={handleFavoriteClick}
                  className={`favorite-btn ${props.favorite ? "active" : ""}`}
                >
                  <img src="/star.png" alt="favorite" className="btn-image" />
                  {favoriteBtnText}
                </button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Meme;
