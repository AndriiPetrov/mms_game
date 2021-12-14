function mms(n, a) {
  if (n === 1) {
    if (a[0] === 1) {
      return 'Ельф';
    } else {
      return 'Олень';
    }
  }

  if (n % 2 === 0) {
    if (a.filter(el => el === 1).length  >= a.length - 1) {
      return 'Олень';
    }

    if (a.reduce((acc, el) => acc + el) % 2 === 0) {
      return 'Ельф';
    } else {
      return 'Олень';
    }
  }

  if (n % 2 === 1) {
    if (a.reduce((acc, el) => acc + el) % 2 === 1) {
      return 'Ельф';
    } else {
      return 'Олень';
    }
  }
}

console.log(mms(1, [1]));
console.log(mms(1, [2]));
console.log(mms(2, [1, 1]));
console.log(mms(2, [1, 2]));
console.log(mms(2, [2, 2]));
console.log(mms(2, [3, 2]));
console.log(mms(2, [3, 3]));
console.log(mms(3, [1, 1, 1]));
console.log(mms(3, [1, 1, 3]));
console.log(mms(3, [1, 1, 3]));
console.log(mms(3, [1, 2, 3]));
console.log(mms(3, [2, 2, 3]));
console.log(mms(4, [1, 1, 1, 1]));
console.log(mms(4, [1, 1, 1, 2]));
console.log(mms(4, [1, 1, 2, 2]));
console.log(mms(4, [1, 1, 2, 3]));
console.log(mms(5, [1, 1, 1, 1, 1]));
console.log(mms(5, [7, 10, 3, 9, 12]));