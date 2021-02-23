export const getJokesRandom = () => {
  return fetch("https://api.chucknorris.io/jokes/random").then(
    (res) => res.json().value
  );
};
