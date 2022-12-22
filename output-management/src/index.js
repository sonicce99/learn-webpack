/* 배운점

HTML에 번들을 동적으로 추가하는 방법을 배웠다. 동적으로 여러개의 bundle.js를 만들고 html파일에서 load 가능하다. 

또한 HtmlWebpackPlugin 플러그인을 사용하면, html을 bundle에 맞게 자동으로 생성해주고, templete.html을 참조해서 index.html을 생성해준다. 아주 편리해보인다.

또한 번외로 템플릿 리터럴을 사용하여 html 코드를 innerHtml을 통해 주입하고자 할 때는 이벤트는 반드시 addEventLisener을 통해 등록하도록 하자. (onclick에 그대로 넣지 않는다.)
 */

import printMe from "./print.js";

const root = document.getElementById("root");

const el = `
<div>Hello Webpack</div>
<button class='btn'>Click me and check the console!</button>
`;

root.innerHTML = el;

document.querySelector(".btn").addEventListener("click", printMe);
