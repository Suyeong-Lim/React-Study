# Section05

## 렌더링 리스트 및 조건부 Content

> 동적으로 데이터 리스트를 렌더링 하는 방법

JS 내장함수인 `map` 을 사용하여 동적으로 리스트를 렌더링 할 수있다.

#### map 메서드

배열의 모든 요소에 대해 주어진 함수를 호출한 결과를 새로운 배열로 반환하는 함수이다. 매 반복마다 return 되는 결과에 따라 새로운 배열을 만들어내기때문에 불변성과 안정성을 보장한다. (참고 [MDN 공식문서](https://developer.mozilla.org/ko/docs/web/javascript/reference/global_objects/array/map) )

- props로 전달받은 items 를 map을 통해 동적으로 렌더링한다.
- 매 반복마다 ExpenseItem 컴포넌트를 return 해준다.

```JS
{props.items.map((expense, id) => (

<ExpenseItem

key={id}

title={expense.title}

amount={expense.amount}

date={expense.date}

/>
))}
```

## State 저장목록 업데이트

> 동적으로 state를 업데이트하고 렌더링하기

state 를 추가해준 후에 목록 추가를 담당할 핸들러 함수를 정의해준다.

```JS
const addExpenseHanlder = (expense) => {

setExpense();

};

```

인자로 전달된 `expense` 객체를 배열 안에 추가하는 코드를 작성해준다.

```JS
const addExpenseHanlder = (expense) => {

setExpense([expense, ...expenses]);

};
```

spread operator 연산자를 사용하여 기존에 있던 모든 배열 요소를 복사해 합쳐준다.

하지만 위와 같이 이전 상태에 의존해서 추가되는 상태값으로 업데이트 하는경우
다음과 같이 명시적으로 이전 state 값을 받아와 추가하는 것이 바람직하다.

```JS
const addExpenseHanlder = (expense) => {
setExpense((prevExpenses) => [expense, ...prevExpenses]);
};
```

## Key

배열에 `map()` 함수를 적용할 때, 고유 key 값을 생략하면 렌더링엔 문제는 없지만 경고 메세지를 볼 수있다.

공식문서에 따르면 Key 는

1. React 가 어떤 항목을 변경, 추가 ,삭제 할지 `식별`하는 것을 돕고
2. 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부 엘리먼트에 지정해줘야한다.

즉, 유일한 식별자로 고유성 부여를 위해 사용하게 된다. key를 사용하면 변화가 감지된 요소만 식별 해 리렌더링 하기 때문에 `효율적인 DOM 사용` 이 가능해진다.

각 아이템이 특정 ID 값을 가지고 있을 때 확실한 고유의 ID 로 사용이 가능하다.

    💡 map 에서 index 를 생성해 ID 로 쓰는 것보다는 각 아이템의 특정 ID 값을 사용하자.


## 리스트 다루기 - Filter 
> 선택된 아이템 필터링 기능 :  배열의 부분집합이 되는 새로운 배열을 만들어 리턴해준다. 

```JS
const filteredExpenses = props.items.filter((expense) => {

return expense.date.getFullYear().toString() === filteredYear;

});
```

props.items 중에서 선택된 (filteredYear) 값과 같은 item 들만 반환해준 후 
map으로 렌더링해준다. 

## 조건부 렌더링 
> 자바스크립트 연산자를 사용하여 조건부 렌더링 구현
> 
	- 삼항 연산자
	- && 연산자 (앞 조건이 true 일 경우에만 뒷부분 실행)
	- 변수에 JSX 할당하기

- 삼항 연산자 
```JS
{filteredExpenses.length === 0 ? (

<p>No Expenses found</p>

) : (

filteredExpenses.map((expense) => (

<ExpenseItem />

))

)}

```

- && 연산자 
```JS
{filteredExpenses.length === 0 && <p>No expense found</p>}
 ```

- 변수에 JSX 할당하여 사용

```JS
let expensesContent = <p>No Expenses Found</p>;

if (filteredExpenses.length > 0) {

expensesContent = filteredExpenses.map((expense) => (

<ExpenseItem />

));

}
```

```JS
return (
<div>

{expensesContent}

</div>
);
```

위와 같이 JSX 를 변수에 할당하여 사용할 수도 있다. 


## 차트 추가하기 
> Value 파생상태 다루기 
- Chart 컴포넌트 : 받아온 dataPoints 로 렌더링 할 ChartBar와 ChartBar 에 넘겨줄 props들 세팅하기 (value값, max값, label, key값)
- dataPoint 의 value 값과 파생 상태 maxValue 전달하기
- 동적 스타일 추가하기 


- 데이터 전달하기 
chartDataPoints 배열을 미리 정의 해놓고 
전달받은 모든 expenses 를 순회하면서 month 값을 가져 온 후 해당 매치되는 month 값의 value 에 지출 금액을 누적해서 지출 데이터를 구함

```JS
- ExpensesChart.js 

for (const expense of expenses) {

const expenseMonth = expense.date.getMonth();

chartDataPoints[expenseMonth].value += expense.amount;

}

return <Chart dataPoints={chartDataPoints} />;
```

- dataPoint 의 value 값과 파생 상태 maxValue 전달하기

```JS
const Chart = ({ dataPoints }) => {

const dataPointValues = dataPoints.map((it) => it.value);

const totalMaximun = Math.max(...dataPointValues);

console.log("spread", dataPointValues);
```

	💡 spread operator
	함수의 호출 인자로 사용되었는데, 함수를 call 할때 spread operator 를 사용하면 
	배열로 되어있는 내용을 바로 함수 인자로 넣어 줄 수있다.  
	

- 동적 스타일 추가하기 
```JS
let barFillHeight = "0%";

if (max > 0) {

barFillHeight = Math.round((value / maxValue) * 100) + "%";

}
```

```JS
<div

className="chart-bar__fill"

style={{ height: barFillHeight }}

></div>
```

변수로 받아온 값을 사용해서 style을 inline 으로 동적으로 추가해주었음