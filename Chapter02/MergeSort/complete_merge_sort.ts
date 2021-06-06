/**
 * 1. 모든 리스트를 가장 작은 리스트로 분해한다.
 * 2. Concept 가장 작은 리스트 중 값을 비교하여 sorted 리스트로 생성한다.
 * 3. sorted 리스트를 원래의 리스트로 복사한다.
 */

const D: number[] = [5, 8, 7, 6, 5, 4, 3, 2, 0, 1];

const ans: number[] = [];

const merge = (array: number[], left: number, mid: number, right: number) => {
  let i = left;
  let j = mid + 1;
  // 처음에는 push 를 썼다가 안된이유는 합쳐질때 비교를 다시해야 하는데 이러면 그냥 넣어버림..
  // 그래서 아래와 같이 바꿨더니 잘됨.
  let k = left;

  while (i <= mid && j <= right) {
    if (array[i] <= array[j]) {
      ans[k++] = array[i++];
    } else {
      ans[k++] = array[j++];
    }
  }

  if (i > mid) {
    for (let l = j; l <= right; l++) {
      ans[k++] = array[l];
    }
  } else {
    for (let l = i; l <= mid; l++) {
      ans[k++] = array[l];
    }
  }

  for (let l = left; l <= right; l++) {
    array[l] = ans[l];
  }
};

const mergesort = (array: number[], left: number, right: number) => {
  let mid;

  //TODO left 와 right 가 같아지는 순간까지 분할 되서 들어올 테고, 결국에는 스택 구조로 인해 작은 로직 부터 merge 로직을 타게됨.
  if (left < right) {
    mid = Math.floor((left + right) / 2);
    mergesort(array, left, mid);
    mergesort(array, mid + 1, right);
    merge(array, left, mid, right);
  }
};

mergesort(D, 0, D.length - 1);

console.log(D);
