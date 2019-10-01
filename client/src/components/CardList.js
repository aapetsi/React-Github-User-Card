import React from "react";
import Card from "./Card";

const CardList = ({ user, followers }) => {
  return (
    <div>
      <h1>Card List</h1>
      <Card login={user.login} avatar_url={user.avatar_url} />
      {followers.map((follower, index) => (
        <Card
          key={index}
          login={follower.login}
          avatar_url={follower.avatar_url}
        />
      ))}
    </div>
  );
};

export default CardList;
