const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getjoke = () => {
  joke.classList.remove("fade");

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      joke.innerHTML = `${item.joke}`;
      joke.classList.add("fade");
    });
};

btn.addEventListener("click", getjoke);
getjoke();
