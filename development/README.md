1. HtmlWebpackPlugin이 생성하는 HTML을 template.ejs을 통해서 동적으로 생성할 수 있습니다. 또한 변수도 templateParameters를 통해서 HTML에 자유롭게 주입 가능합니다.

2. inline-source-map

   devtool: "inline-source-map" 을 사용하면 번들된 파일이 아니라 원래 코드소스에서 어디가 잘못되었는지 알 수 있어 디버깅 할 때 편리하다.

3. webpack에는 코드가 변경될 때마다 자동으로 컴파일하는 데 도움이 되는 몇 가지 옵션이 있습니다.

- --watch

```bash
"watch": "webpack --watch",
```

`npm run watch`를 실행하고 webpack이 코드를 컴파일하는 방법을 확인하세요.

스크립트가 현재 파일을 감시하고 있기 때문에 커멘드 라인을 종료하지 않은 것을 확인할 수 있습니다.

유일한 단점은 변경사항을 확인하려면 브라우저를 새로 고침해야 한다는 것입니다.

이것이 자동으로 된다면 더 좋을 것이므로,` webpack-dev-server`를 사용해 봅시다.

- webpack-dev-server

npm run start로 실행할 수 있으며 브라우저가 자동으로 페이지를 로드하는 것을 볼 수 있습니다.

이제 소스 파일을 변경하고 저장하면, 코드가 컴파일된 후 웹 서버가 자동으로 다시 로드됩니다. (포트번호는 default로 8080)
