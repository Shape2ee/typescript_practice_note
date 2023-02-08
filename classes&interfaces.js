"use strict";
// classes
// 구분　　　선언한 클래스 내　상속받은 클래스 내　인스턴스
// private 　   　⭕　　　　　　　❌　　　　　      ❌
// protected 　 　⭕　　　　　　　⭕　　　　　      ❌
// public　　　 　⭕　　　　　　　⭕　　　　　      ⭕
class PlayerInfo {
    constructor(firstName, lastName, nickName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
    }
}
const jack = new PlayerInfo('jack', 'miled', '짹');
console.log(jack.nickName);
// 추상(abstract) 클래스
// [Abstract Class]
// 추상 클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다.
// 하지만 직접 새로운 인스턴스를 만들 수는 없다.
class User {
    constructor(firstName, lastName, nickName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
    }
    // 메서드
    getFullName1() {
        return this.firstName + this.lastName;
    }
    // 메서드도 보호 가능
    getFullName2() {
        return this.firstName + this.lastName;
    }
}
class UserInfo extends User {
    // 추상 클래스를 상속받은 곳에서 추상 메서드 구현
    getNickName() {
        console.log(this.nickName);
    }
}
const kain = new UserInfo('kain', 'harry', '하리 카네');
kain.getFullName1(); // o
// kain.getFullName2() x
class ReadWord {
    constructor(
    // 값을 보여주고, 불러올수는 있지만 수정은 불가능하게 하고 싶을 때
    term, def) {
        this.term = term;
        this.def = def;
    }
    // static
    static hello() {
        return 'hello';
    }
}
const son = {
    name: 'son',
    color: 'blue',
    hobby: 'soccer'
};
const son1 = {
    name: 'son',
    color: 'blue',
    hobby: 'soccer'
};
const dier = {
    name: 'dier',
    age: 20,
    hobby: 'soccer'
};
class character {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    sayHi(name) {
        return 'hello';
    }
    fullName() {
        return this.firstName + this.lastName;
    }
}
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const strStorage = new LocalStorage();
strStorage.get('hey');
strStorage.set('hey', 'hello');
