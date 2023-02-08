// classes
// 구분　　　선언한 클래스 내　상속받은 클래스 내　인스턴스
// private 　   　⭕　　　　　　　❌　　　　　      ❌
// protected 　 　⭕　　　　　　　⭕　　　　　      ❌
// public　　　 　⭕　　　　　　　⭕　　　　　      ⭕

class PlayerInfo {
  constructor(
    private firstName:string,
    private lastName:string,
    public nickName:string
  ) {}
}

const jack = new PlayerInfo('jack', 'miled', '짹')
console.log(jack.nickName)

// 추상(abstract) 클래스
// [Abstract Class]
// 추상 클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다.
// 하지만 직접 새로운 인스턴스를 만들 수는 없다.

abstract class User {
  constructor(
    private firstName:string,
    private lastName:string,
    protected nickName:string
  ) {}
  // 메서드
  getFullName1() {
    return this.firstName + this.lastName
  }
  // 메서드도 보호 가능
  private getFullName2() {
    return this.firstName + this.lastName
  }
  // 추상 메서드
  // 구현이 되어있지 않은 (코드가 없는) 메서드
  // 오로지 call signature 가짐
  abstract getNickName() : void
}

class UserInfo extends User {
  // 추상 클래스를 상속받은 곳에서 추상 메서드 구현
  getNickName() {
    console.log(this.nickName)
  }
}

const kain = new UserInfo('kain', 'harry', '하리 카네')
kain.getFullName1() // o
// kain.getFullName2() x


class ReadWord {
  constructor(
    // 값을 보여주고, 불러올수는 있지만 수정은 불가능하게 하고 싶을 때
    public readonly term : string,
    public readonly def : string
  ) {}

  // static
  static hello() {
    return 'hello'
  }
}

// interface
// type과 비슷하기도 하지만 다른점을 가지고 있다.
// 오로지 객체의 형태를 타입스크립트로 설명해주기 위한 용도로 사용, 타입은 좀 더 유연함
type UserName = string; //Type alias(타입에 대한 별명)를 만들어줄 수 있고
type UserColor = 'red' | 'blue' | 'yellow'; // 특정한 값을 가지도록 할 수 있음

interface InterfaceUser {
  readonly name : UserName,
  color : UserColor,
  hobby : string
}

// interface는 상속의 개념을 사용할 수 있다! 클래스와 유사
// ⇒ 문법 구조가 객체지향 프로그래밍의 개념을 활용
interface UserHealth extends InterfaceUser {
}

const son : UserHealth = {
  name : 'son',
  color : 'blue',
  hobby : 'soccer'
}

// type으로 같은 작업 만들기
type InterfaceUser1 = {
  name : UserName,
  color : UserColor,
  hobby : string
}

type UserHealth1 = InterfaceUser1 & {
}

const son1 : UserHealth1 = {
  name : 'son',
  color : 'blue',
  hobby : 'soccer'
}

// 인터페이스의 또 다른 특징으로는 속성(Property)들을 ‘축적’시킬 수 있다
interface Safe {
  name : string
}
interface Safe {
  age : number
}
interface Safe {
  hobby : string
}
const dier : Safe = {
  name : 'dier',
  age : 20,
  hobby: 'soccer'
}