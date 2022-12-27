code-splitting은 webpack의 가장 매력적인 기능 중 하나입니다.

이 기능을 사용하여 코드를 다양한 번들로 분할하고, 요청에 따라 로드하거나 병렬로 로드할 수 있습니다.

**더 작은 번들을 만들고 리소스 우선순위를 올바르게 제어하기 위해서 사용**하며, 잘 활용하면 로드 시간에 큰 영향을 끼칠 수 있습니다.

## 접근 방식

- Entry Points

  이 접근 방식에는 몇 가지 함정이 있습니다.

  - 엔트리 청크 사이에 중복된 모듈이 있는 경우 두 번들에 모두 포함됩니다.

  - 코어 애플리케이션 로직을 통한 코드의 동적 분할에는 사용할 수 없으며 유연하지 않습니다.

  해당 예제에서는 lodash를 index.js, another.js 양쪽에서 중복으로 포함되어 있습니다.

  Prevent Duplication를 통해 중복 import를 막을 수 있습니다.

- Prevent Duplication

  > webpack-config-js에서 코드를 확인하세요.

  보시다시피 shared.bundle.js, index.bundle.js 및 another.bundle.js 외에 또 다른 runtime.bundle.js 파일이 생성됩니다.

- Dynamic Imports

  > webpack-config-js에서 코드를 확인하세요.

  Entry Points, Prevent Duplication는 정적으로 모듈을 가져오지만, dynamic Imports는 동적으로 가져온다.
