# Section04

## 이벤트 리스닝 및 이벤트 핸들러 수행하기

- 전체 HTML 요소에는 리스너를 추가하여 DOM 이벤트에 접근할 수있다
- 참조) [MDN 문서 : HTMLButtonElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement) [MDN 문서 : Element](https://developer.mozilla.org/ko/docs/Web/API/Element)
- 리액트는 모든 기본 이벤트에 `on` 으로 시작하는 `prop` 으로 노출된다.

```JS
<button onClick={clickHandler}>Change Title</button>
```

- 다음과 같이 클릭 이벤트가 발생할 때마다 `clickHandler` 함수가 실행된다.

</br>

## 컴포넌트의 기능이 실행되는 방법

- 리액트에서는 단순히 변수를 변경시킨다고 화면에서 렌더링 되는 값이 변하지 않는다.
- 렌더링 값을 변경하기 위해선 컴포넌트 함수를 불러와 다시 evalutate 한 JSX 를 리턴해주어야 하는데, 단순히 변수가 변한다고 해서 컴포넌트 함수가 재실행되지 않는다.
- 리액트가 특정 컴포넌트가 재 evaluate 되었다는 것을 알기 위해선 변수가 아닌 `상태` 를 변경해주어야 한다.
- 리액트 라이브러리가 제공하는 useState 함수를 사용하여 상태 변경을 감지한다.

> 💡 State 는 유저가 이벤트를 발생 시켰을 때 뿐만 아니라 setTimeout() 을 사용한 Http 요청 응답 등과 같은 다양한 방법으로도 업데이트 될 수있다.
