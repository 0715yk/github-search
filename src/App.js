import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunk_action_creator } from "./actions/fetchAction";
import UserInfo from "./UserInfo";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = userName;
    dispatch(thunk_action_creator(username));
  };

  console.log(data);
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Enter the Github Username</h2>
        <input
          type="text"
          placeholder="Enter Github Username"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
      {data.isFetching ? <h3>Loading...</h3> : null}
      {data.isError ? <h3 className="error">No such User exists.</h3> : null}
      {Object.keys(data.userData).length > 0 ? (
        <UserInfo user={data.userData} />
      ) : null}
    </div>
  );
}

export default App;
