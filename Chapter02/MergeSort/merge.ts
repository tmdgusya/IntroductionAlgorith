const C: number[] = [4, 9, 8, 7, 1, 5, 4, 6];

const p = 0;
const q = C.length / 2;
const r = C.length;

const L = C.slice(p, q);
const R = C.slice(q, r);
let M: number[] = [];

let i = 0;
let j = 0;

for (let k = p; k < r; k++) {
  if (R.length <= j) {
    if (L.length > i) {
      M = M.concat(L.slice(i, L.length));
    }
    break;
  }
  if (L.length <= i) {
    if (R.length > j) {
      M = M.concat(R.slice(j, R.length));
    }
    break;
  }
  if (L[i] <= R[j]) {
    M.push(L[i]);
    i = i + 1;
  } else {
    M.push(R[j]);
    j = j + 1;
  }
}

console.log(M);
