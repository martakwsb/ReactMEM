import React from "react";
import Meme from "./Meme";
import { ListGroup } from "react-bootstrap";

const Favorite = (props) => {
  const { memeList, handleUpvote, handleDownvote, handleFavorite } = props;

  return (
    <div>
      {memeList.length > 0 ? (
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
      ) : (
        <div>
          <h1>NIE MASZ W ZAPAMIĘTANYCH ŻADNEGO SUPERMEMA!</h1>
        </div>
      )}
    </div>
  );
};

export default Favorite;
