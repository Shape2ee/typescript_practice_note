"use strict";
// Call(=Function) Signatures
// 함수의 매개변수와 반환 값의 타입을 모두 type으로 미리 선언하는 것
// * React에서 함수로 props를 보낼 때, 어떻게 작동할지 미리 설계 가능!
const add = (a, b) => a + b;
const plus = (a, b) => {
    if (typeof b === 'string')
        return a;
    return a + b;
};
const sum = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
const superPrint = (arr) => {
    arr.forEach(i => console.log(i));
};
const superReturn = (arr) => arr[0];
superPrint([1, 2, 3, 4]);
superPrint(['a', 'b', 'c', 'd']);
superPrint([1, 2, false, true]);
console.log(superReturn([1, 2, 3, 4]));
console.log(superReturn([1, 2, false, true]));
// 일반 함수에서 사용
function number(a) {
    return a[0];
}
console.log(number(['1a', '2a', 3, 4]));
// 화살표함수
const num = (a) => a[0];
const johan = {
    name: "johan",
    extraInfo: {
        age: 23
    }
};
