import fetch from "node-fetch";

const userAction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const myJson = await response.json();
  console.log(myJson);
};
userAction();
