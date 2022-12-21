/* 배운점.

webpack은 webpack.config.js가 없더라도 기본적으로 src/index.js를 entry point로 시작해서 main.js라는 output을 내놓게 된다. 
*/

import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // 이 라인이 동작하려면 현재 스크립트를 통해 포함된 Lodash가 필요합니다.
  // 이제 Lodash를 스크립트로 가져왔습니다.
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
