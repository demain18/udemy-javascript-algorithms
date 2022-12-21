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

    // 만약 this.keyMap에서 index에 위치한 요소가 비어있다면 배열로 초기화시킨다.
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    // this.keyMap에서 index위치에 객체를 삽입한다.
    this.keyMap[index].push([key, val]);
  }
}

let ht = new HashTable();
ht.set("musecle car", "ford mustang");
ht.set("suv", "bmw x5");
ht.set("supercar", "ford mustang");
console.log(ht.keyMap);
