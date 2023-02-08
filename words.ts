console.log('words.ts------------')

type Words = {
  [key : string] : string
  //객체의 property에 대해 모르지만 타입만을 알 때 사용
}

class Dict {
  private words : Words
  constructor() {
    this.words = {}
  }
  add(word : Word) { // word는 Word 클래스의 인스턴스 타입.
    if (this.words[word.term] === undefined) {
      console.log(`add ${word.term}`)
      this.words[word.term] = word.def
    }
  }
  find(term : string) {
    console.log(`find ${term}, ${this.words[term]}`)
    return this.words[term]
  }
  update(term : string, newDif : string){
    if (this.words[term]) {
      console.log(`update ${this.words[term]}`)
      this.words[term] = newDif
    } else {
      console.log(`${this.words[term]}는 사전에 없습니다. 추가해주세요.`)
    }
  }
  del(term : string) {
    if (this.words[term]) {
      delete this.words[term]
    }
  }
}

class Word {
  constructor(
    // 값을 보여주고, 불러올수는 있지만 수정은 불가능하게 하고 싶을 때
    public readonly term : string,
    public readonly def : string
  ) {}
}

const kimchi = new Word("kimchi", "김치")
const banana = new Word("banana", "바나나")
const apple = new Word("apple", "사과")

const dict = new Dict()
dict.add(kimchi)
dict.add(banana)
dict.add(apple)
dict.find('kimchi')
dict.update('kimchi', '한국의음식')
dict.del('kimchi')
console.log(dict)