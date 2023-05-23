import axios from "axios";

export const requestLogin = async (username, password) => {
  const { data } = await axios.post(
    "http://localhost:3001/login",
    { username: username, password: password },
    {
      headers: {
        "Content-Type": "application/json",
        // Accept: 'application/json',
      },
    }
  );

  console.log(JSON.stringify(data));

  return data;
};

export const registerUser = async (username, password) => {
  const { data } = await axios.post(
    "http://127.0.0.1:3001/user",
    { username: username, password: password },
    {
      headers: {
        "Content-Type": "application/json",
        // Accept: 'application/json',
      },
    }
  );

  console.log(JSON.stringify(data));

  return data;
};
