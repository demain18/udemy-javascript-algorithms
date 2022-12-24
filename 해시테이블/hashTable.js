class HashTable {
  constructor(size = 4) {
    // size값을 사용해서 해시 테이블의 길이를 선언한다.
    this.keyMap = new Array(size);
  }

  _hash(key) {
    // total을 선언한다.
    let total = 0;
    // WEIRD_PRIME을 선언하고 소수(31)을 바인딩한다.
    let WEIRD_PRIME = 31;

    // 최대 100번까지 반복문을 실행한다.
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // i에 해당하는 문자열을 char애 바인딩한다.
      let char = key[i];
      // value값을 바인딩한다.
      let value = char.charCodeAt(0) - 96;
      // 총합하여 total을 결정한다.
      total = (total + WEIRD_PRIME + value) % this.keyMap.length;
    }

    // total을 반환한다.
    return total;
  }

  set(key, val) {
    // key를 hash함수에 넣어서 index를 반환받는다.
    let index = this._hash(key);

    // 만약 this.keyMap[index]이 비어있다면
    if (!this.keyMap[index]) {
      // 해당 요소를 배열로 초기화시킨다.
      this.keyMap[index] = [];
    }

    // this.keyMap[index]에 객체를 삽입한다.
    this.keyMap[index].push([key, val]);
  }

  get(key) {
    // key를 hash함수에 넣어서 index를 반환받는다.
    let index = this._hash(key);

    // 만약 this.keyMap[index]값이 존재한다면
    if (this.keyMap[index]) {
      // this.keyMap[index]의 길이만큼 반복문을 실행한다.
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // 만약 객체의 키가 key와 동일하다면
        if (this.keyMap[index][i][0] === key) {
          // 객체의 값을 반환한다.
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    // 배열을 선언해준다.
    let keysArr = [];
    // this.keyMap의 길이만큼 반복문을 실행한다.
    for (let i = 0; i < this.keyMap.length; i++) {
      // 만약 요소가 있다면
      if (this.keyMap[i]) {
        // this.keyMap[i]의 길이만큼 반복문을 실행한다.
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // valuesArr에 요소를 삽입한다.
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }

    // keysArr에서 중복 요소를 제거하고 반환해준다.
    return [...new Set(keysArr)];
  }

  values() {
    // 배열을 선언해준다.
    let vaulesArr = [];
    // this.keyMap의 길이만큼 반복문을 실행한다.
    for (let i = 0; i < this.keyMap.length; i++) {
      // 만약 요소가 있다면
      if (this.keyMap[i]) {
        // this.keyMap[i]의 길이만큼 반복문을 실행한다.
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // valuesArr에 요소를 삽입한다.
          vaulesArr.push(this.keyMap[i][j][1]);
        }
      }
    }

    // vaulesArr에서 중복 요소를 제거하고 반환해준다.
    return [...new Set(vaulesArr)];
  }
}

let ht = new HashTable();
ht.set("muscle car", "ford mustang");
ht.set("suv", "bmw x5");
ht.set("suv", "bmw x5");
ht.set("supercar", "ferrari f8 tuributo");
ht.set("sedan", "benz s class coupe");
ht.set("motocycle", "kawasaki ninja 400");
ht.set("sportcar", "forsche 911 turbo s");
ht.set("sportcar", "forsche 911 turbo s");

// console.log(ht.keyMap);
console.log(ht.keys());
console.log(ht.values());
