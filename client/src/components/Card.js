import React from "react";

const Card = ({ login, avatar_url }) => {
  return (
    <div>
      <h1>{login}</h1>
      <img src={avatar_url} alt="" />
    </div>
  );
};

export default Card;
