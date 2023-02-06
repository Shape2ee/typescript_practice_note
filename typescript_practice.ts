/*
TypeScript
타입스크립트를 사용하는 이유
안정성. 즉 타입의 안정성을 위해서 사용을 한다.
버그가 발생하는 일을 낮추고, 런타임에러를 발생을 방지하고, 생산성을 올려줌
*/

// 
// 기본 문법
// 변수 : 타입
// 타입에는 string, number, boolean, null, undefined, [], {} 등등이 있다.
const nickName : string = 'shape'; // 타입 명시
const a = 'hello'; // 가능, ts자체에서 타입 추론
const b : number[] = [1, 2, 3, 4];

// Optinal Type
// 인자를 받는 상황일 때 어떤 인자는 필수지만,
// 선택적으로 받는 인자의 타입을 지정해줄 때, 적용
// age? : number와 같이 ? 입력
// 핵심은 옵션이 없어도 되지만, 만약 존재한다면 지정한 타입이어야 한다.
const player : {
  name : string,
  age? : number // number || undifined
} = {
  name : 'shape'
};

// 여러개의 변수 또는 함수에 같은 형식의 타입을 지정해 주어야할 때
// 타입으로 설정 후 적용도 가능
type Player = {
  name : string,
  age? : number,
};
const shape : Player = {
  name : 'shape'
};
const nick : Player = {
  name : 'nick',
  age : 10,
};

// 함수에서 사용
// function 함수 (인자:타입) : 리턴타입 {}
function play1 (name : string) : Player {
  return {
    name : name // 같은 이름을 가지면 name으로 단축 가능
  }
};
const tami = play1('tami');
tami.age = 5;
console.log(tami);

// 화살표 함수
// const 변수명 = (인자 : 타입) : 리턴타입 => {}
const play2 = (name : string) : Player =>  ({name});
const jony = play2('jony');
jony.age = 10;

// Readonly
// 읽기 전용, 최초 선언 후 수정불가, 보호장치
// immutability(불변성) 부여
type Info = {
  readonly name : string,
  age? : number
};
const play3 = (name: string) : Info => ({name});
const poter = play3('poter');
// poter.name = 'konte' X

const array : readonly number[] = [1, 2, 3, 4];
// array.push(5) X

// Tuple
// array생성시 사용, 최소한의 길이를 가져야 하며, 특정 위치에 특정 타입필요
// 정해진 갯수의 요소를 가지는 배열을 생성, 원하는 타입의 순서 지정
const array2 : [string, number, boolean] = ['shape', 1, true];

// Undefined = 선택적타입 
let un : undefined = undefined;

// null
let nu : null = null;

// any 
// 비어있는 값을 쓰면 기본타입값이 any
// 타입스크립트에서 빠져나오고 싶을 때 사용, 그러므로 신중하게 사용해야 함
// 아무타입이나 가능
const c : any[] = [1, 2, 3];
const d : any = true;
console.log(c + d);

// unknown
// 타입을 미리 알지 못할 때 사용
// any와 마찬가지로 모든 타입의 값이 할당이 가능
// unknown 타입은 단어의 뜻과 마찬가지로 '알 수 없다. 모른다'의 의미를 가짐
// 따라서 프로퍼티에 접근이나, 연산 등등 함부로 작업이 불가능 함
// type check가 필요
let data : unknown;
if (typeof data === 'number') {
  let sum = data + 1;
};
if (typeof data === 'string') {
  let a = data.toUpperCase();
};

// void
// return 값을 반환하지 않는 함수의 리턴 타입, undefined를 반환
function hello1() : void {
  console.log('x')
}
// 보통 반환값이 없을때는 void 생략이 가능
function hello2() {
  console.log('x')
}
const x = hello1();

// never
// 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미
function hello3() : never {
  throw new Error("zzz")
  // return "a" X
}

function temp(name:string|number) {
  if (typeof name === "string"){
      name // type : string
  } else if (typeof name === "number"){
      name // type : number
  } else {
      name // type : never
      // 정상적으로 인자가 전달이 되면 마지막 else로 올 수가 없기 때문에 never
  }
}
