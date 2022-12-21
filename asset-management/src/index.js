/* 배운점
webpack은 브라우저에서 페이지를 가져오기 위해서는 여러 자원들 (font, Png, Svg, Xml, Csv ...)을 가지고와야한다. (Json은 별도의 loader 없이 기본적으로 제공한다.)  

예를 들어 style.css, index.js 등 여러 파일들이 있을 수 있다.

이 자원들을 모두 다른 파일에서 한번에 가져오려고 하면 병목현상이 일어나 브라우저가 느려질 수 있다.

webpack을 사용하면 좋은 점은 이 모든 자원들을 단 하나의 bundle.js로 묶어버린다.

즉 bundle.js 하나의 파일만 가져오면 보여주고 싶은 모든것들을 보여줄 수 있다는 점이다. 

즉 css를 적용하기위해 HTML 파일에서 link 태그가 필요 없다. 

또한 png, svg 같은 파일들도 javascript에서 모듈처럼 동적으로 import 해올 수 있다.
*/

import "./style.css";
import Icon from "./profile-pic.png";
import Xml from "./data.xml";
import Csv from "./data.csv";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello Webpack";
  element.classList.add("hello");

  // 원래 있던 div 에 이미지를 추가합니다.
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = 500;
  element.appendChild(myIcon);

  console.log("Xml Data :", Xml);
  console.log("Csv Data : ", Csv);

  return element;
}

document.body.appendChild(component());
