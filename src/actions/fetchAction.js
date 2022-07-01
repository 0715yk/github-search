import store from "../store";

export const fetch_post = () => {
  return {
    type: "FETCH_USER",
  };
};

export const receive_post = (post) => {
  return {
    type: "FETCHED_USER",
    data: post,
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR",
  };
};

export const thunk_action_creator = (username) => {
  const user = username.replace(/\s/g, "");
  store.dispatch(fetch_post());
  // 여기서 1차적으로 loading을 하게 하고,
  return function (dispatch, getState) {
    // dispatch와 getState를 이용할 수 있는 함수를 리턴
    // getState를 이용해 다른 state를 이용한 로직을 짤 수 있고,
    // dispatch를 이용해 api 호출 이후의 로직도 컨트롤 할 수 있다
    return fetch(`https://api.github.com/users/${user}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "Not Found") {
          throw new Error("No such user found!!");
        } else dispatch(receive_post(data));
      })
      .catch((err) => dispatch(receive_error()));
  };
};
