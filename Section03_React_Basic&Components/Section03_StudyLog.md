# Section 3 : React Basics & working with Components


## what is React
Component Build 방법
- HTML, CSS , JS 코드를 조합하여 UI를 만든다. 
- condition에 따라 컴포넌트의 state를 변경할 수있다. 

### 🔹 React 작동방법 

```JS
ReactDOM.render(<App />, document.getElementById("root"));
```

index.js 가 실행되고 ReactDom이 App 컴포넌트를 root에 render 해준다.
리액트의 컴포넌트는 JSX 를 반환하는 JS 함수이며 외부에서 사용하기 위해 export 와 import 과정을 거쳐야 한다. 작성된 JSX 코드는 개발자에게 친화적인 작성법으로 brower에서 동작하기 위해 변환 과정을 거치게 된다.  사용자가 정의한 컴포넌트는 꼭 대문자로 import 해와야한다. 기존 html 태그와 구별해야 하기 때문이다. 

### 🔹 Component Tree
React App 은  Component-Driven UI를 만드는 것으로 결국 Component Tree를 만드는 것과 같다. 
<App/> 컴포넌트가 HTML에 렌더링 되는 단일한 page가 되며, 이를 시작점으로 하여  컴포넌트들이 중첩된 형식으로 뻗어나가게 된다. 

 >React naming convention 
보통 컴포넌트 파일을 대문자로 작성하고 파스칼 케이스로작성한다.

>컴포넌트 작성법 
리액트 컴포넌트는 JSX를 리턴하는 자바스크립트로 클래스형, 함수형 두 가지로 작성이 가능하다. 

### 🔹 Props
#### - Props로 데이터를 전달하기.
> 데이터를 컴포넌트 안에 저장하는 것이 아니라 밖에서 주입시키는 방식

reusable 가능한 컴포넌트를 만들기 위해 인자들을 전달하는 것 처럼 props 를 전달할 수 있다. 
data should not be stored inside of them but instead receive outside

Specific Component 들을 조합하여 전체적인 Component를 만드는 것(Composition)이 리액트의 사용 방법이며 이러한 Component 코드의 중복을 막고 재사용을 할 수있도록 만드는 것이 핵심

### 🔹 children props 
#### - 재사용 wrapper component 만들기 
> Composition 에서 중요한 wrapper component 를 만들 수 있는 children props 알아보기

container 역할을 하는 컴포넌트를 만들면 스타일을 재사용하여 사용할 수 있다. 
맞춤, 재사용 wrapper 컴포넌트를 만들 때 리액트에 빌트인 되어 모든 컴포넌트가 받을 수 있는 props
.children 을 설정 한다. 

children is a reserve name 이며 wrapper 로 사용할 경우 밸류는 항상 콘텐츠가 된다.

```JS
function Card(props){
	return <div className="card">{props.children}</div>
}
```

즉 이 props.children 값은 

```JS
<Card className="expense-item">

	<ExpenseDate date={props.date}>
	
	<div>
	
	<h2>{props.date}</h2>
	
	<div>{props.amount}</div>
	
	</div>
	
	</ExpenseDate>

</Card>

```

Card 컴포넌트 안에 있는 콘텐츠이며 카드 내의 children props 로 사용할 수있다. 

```JS
const Card = (props) => {

const classes = "card " + props.className;

return <div className={classes}>{props.children}</div>;

};
```

props로 받은 클래스네임을  변수로 받아서 통일된 스타일의 card class를 적용할 수있다.

더 복잡한 JSX 와 html 을 추출하여 컴포넌트를 atomic 하게 만들 수있다. 


### 🔹 JSX
JSX 로 작성한 코드가 React 객체라는 메서드로 변환되어 브라우저에 렌더링된다. 따라서 원래는 react 를 import 해줘야 사용가능했지만 최신 React setup에선 import 하지 않아도 가능하다. 
- React가 JSX 를 createElement 객체를 통해 변환시키는 방법은 다음과 같다. 
```JS
return React.createElement("div",{},React.createElement(...))
```


### 🔹 State 
> **Question.** 
> 1. 왜 리액트는 useState를 사용하여 state를 변경할까 ?
> 2. useState 는 동기로 작동할까 비동기로 작동할까? 

- 변수가 변화해도 리액트의 컴포넌트 함수는 재평가(reevaluation) 되지 않는다.
즉 단순히 이벤트가 발생하거나 변수가 변하더라도 초기 렌더링 이후 컴포넌트를 다시 evalutaion 할 수 없다. 
리액트 라이브러리에서 값을 상태로 정의하는 useState 함수를 가져와서 바꿔주어야 state를 변경가능하다.

- useState 는 항상 두 개의 값을 반환한다. [현재 상태 값, 업데이트 함수]
useState를 사용해도 몇몇 변수에서는 새로운 값이 할당 되지 않기 때문에 리액트 내부 메모리에서 관리되는 업데이트 함수를 호출하여 상태 업데이트 함수를 받아 컴포넌트를 새로운 값으로 다시 실행하도록(evaluate) 한다. 

- useState 를 상수로 선언하는 이유
상태는 컴포넌트의 인스턴스 기반 단위로 나뉘어져 있는데 상태를 상수로 관리하여 
컴포넌트를 생성할 때마다 **개별 상태를 가지도록 하기 위해**서이다. 
중복으로 사용된 컴포넌트의 상태를 바꾸었을때 해당하는 컴포넌트의 상태만 바꿀 수 있도록 한다. 
상태 업데이트 함수를 호출하면 변경 값은 리액트에 의해 관리되고 컴포넌트 함수가 재실행된다. 컴포넌트 함수가 재 실행될때 useState 또한 재 실행되고 상태가 변하면 새로운 snapshot을 얻게 된다. 

- 동작이 비슷한 state 를 묶어서 처리하기 

```JS
const [input, setInput] = useState({

title: "",

amount: 0,

date: "",

});

const inputChangeHandler = (e) => {

let userInput = e.target.value;

setInput({

...input,

[e.target.name]: userInput,

});

};
```

스프레드 연산자를 사용하여 기존값에 복사하여 사용하는데 매번 새로운 값으로 오버라이드 해서 쓰게 됨 
만약 상태를 업데이트 할 때마다 이전 상태에 의존해야 한다면 

```JS
setInput((prev) => {

return { ...prev, title: userInput };

});
```

이러한 방법으로 최신 상태의 값을 받아와서 사용해야 한다. 
