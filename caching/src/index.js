import _ from "lodash";
import Print from "./print";

function component() {
  const element = document.createElement("div");

  // 이 라인이 동작하려면 현재 스크립트를 통해 포함된 Lodash가 필요합니다.
  // 이제 Lodash를 스크립트로 가져왔습니다.
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  element.onclick = Print.bind(null, "Hello webpack!");

  return element;
}

document.body.appendChild(component());
