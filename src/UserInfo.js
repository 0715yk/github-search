import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <div className="avatar">
        <img src={user.avatar_url} alt="avatar" width="250px" />
      </div>
      <div className="content">
        <h1>{user.name}</h1>
        <p>
          <strong>Bio: </strong>
          {user.bio}
        </p>
        <p>
          <strong>Location:</strong> {user.location}
        </p>
        <p>
          <strong>Followers:</strong> {user.followers}
        </p>
        <p>
          <strong>Following:</strong> {user.following}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
