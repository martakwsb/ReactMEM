import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Meme from "./Meme";

const RegularMemes = (props) => {
  const { memeList, handleUpvote, handleDownvote, handleFavorite } = props;

  return (
    <div>
      <ListGroup>
        {memeList.map((meme) => (
          <ListGroup.Item key={meme.id}>
            <Meme
              id={meme.id}
              src={meme.url}
              title={meme.title}
              description={meme.description}
              upvotes={meme.upvotes}
              downvotes={meme.downvotes}
              upvotedByYou={meme.upvotedByYou}
              downvotedByYou={meme.downvotedByYou}
              favorite={meme.favorite}
              handleUpvote={handleUpvote}
              handleDownvote={handleDownvote}
              handleFavorite={handleFavorite}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default RegularMemes;
