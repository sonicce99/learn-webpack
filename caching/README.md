# Caching

우리는 배포 가능한 /dist디렉터리를 생성하는 모듈형 애플리케이션을 번들링하기 위해 webpack을 사용하고 있습니다. 일단 서버에 /dist의 콘텐츠가 배포되면 클라이언트(일반적으로 브라우저)가 해당 서버에 접근하여 사이트와 애셋을 가져옵니다. 마지막 단계는 시간이 많이 걸릴 수 있기 때문에 브라우저는 캐싱이라는 기술을 사용합니다. 이렇게 하면 불필요한 네트워크 트래픽을 줄이면서 사이트를 더 빨리 로드할 수 있습니다. 그러나 새 코드를 불러올 경우에는 어려움을 느낄 수 있습니다.

## Output Filenames

webpack.config.js에서 `[contenthash]`을 사용하면 출력파일명이 특정 hash로 설정되어 템플릿화 할 수 있습니다.

## Extracting Boilerplate

- 모든 청크에 대해 하나의 runtime 번들을 생성할 때 사용.

```javascript
module.exports = {
  optimization: {
    runtimeChunk: "single",
  },
};
```

- lodash, react와 같은 타사 라이브러리를 별도의 청크로 분리.

```javascript
module.exports = {
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
```
