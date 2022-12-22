import printMe from "./print.js";

const root = document.getElementById("root");

const el = `
<div>Hello Webpack</div>
<button class='btn'>Click me and check the console!</button>
`;

root.innerHTML = el;

document.querySelector(".btn").addEventListener("click", printMe);
