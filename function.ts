// Call(=Function) Signatures
// 함수의 매개변수와 반환 값의 타입을 모두 type으로 미리 선언하는 것
// * React에서 함수로 props를 보낼 때, 어떻게 작동할지 미리 설계 가능!

/*
function add (a:number, b:number) {
  return a + b 
}
const add = (a:number, b:number) => a + b
*/

type Add = (a:number, b:number) => number
const add : Add = (a, b) => a + b

// 오버로딩 (overloading)
// function overloading, method overloading
// 동일한 이름에 매개 변수와 매개 변수 타입 또는 리턴 타입이 다른 여러 버전의 함수를 만드는 것을 말합니다.
// TypeScript에서는 오버로드 signatures을 작성하여 "다양한 방식으로 호출할 수 있는 함수"를 지정할 수 있습니다.

// 매개 변수의 타입이 다른 경우
type Plus = {
  (a:number, b:number) : number
  (a:number, b:string) : number
}
const plus : Plus = (a, b) => {
  if (typeof b === 'string') return a
  return a+b
}

// 매개 변수의 수가 다른 경우
type Sum = {
  (a:number, b:number) : number
  (a:number, b:number, c:number) : number
}
const sum : Sum = (a, b, c?:number) => {
  if(c) return a + b + c
  return a + b
}

// 위와 같은 함수는 거의 없지만,
// 간혹 외부 라이브러리에서 활용될 수 있다
/* 예시
router.push("/home");

router.push({
path: "/home",
state: 1
});

예를 들어, Next.js의 라우터 push가 대충 두 가지 방법으로 페이지를 이동한다고 할 때,

type Config = {
path: string,
state: number
}

type Push = {
(config: Config): void,
(config: string): void
}

const push: Push = (config) => {
if (typeof config === "string") console.log(config);
else console.log(config.path);
}
*/

// 다형성 (polymorphism)
// 여러가지의 다양한 구조, 모양

// concrete type
// number, boolean, stinrg, void 등등 

// generic type
// 타입의 placeholder 같은 의미
// 제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.
// 한번의 선언으로 다양한 타입에 재사용이 가능하다는 장점이 있다.
// T는 제네릭을 선언할 때 관용적으로 사용되는 식별자로 타입 파라미터(Type parameter)라 한다. 반드시 T로 적어야 하는거는 아님
type SuperPrint = {
  <T>(arr: T[]): void // <T> generic
}
const superPrint: SuperPrint = (arr) => {
  arr.forEach(i => console.log(i))
}

type SuperReturn = <T>(arr: T[]) => T
const superReturn: SuperReturn = (arr) => arr[0]

superPrint([1, 2, 3, 4])
superPrint(['a', 'b', 'c', 'd'])
superPrint([1, 2, false, true])
console.log(superReturn([1, 2, 3, 4]))
console.log(superReturn([1, 2, false, true]))

// 일반 함수에서 사용
function number<T>(a : T[]): T {
  return a[0]
}
console.log(number(['1a', '2a', 3, 4]))
