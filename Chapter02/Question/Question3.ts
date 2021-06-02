//문제 2.1-3

/**
 * Linear Search 를 통해서 배열에서 만족하는 값을 찾아라.
 * 1. 배열 첫번째 인덱스 부터 값이 맞는지 확인한다.
 * 2. 맞다면 index 를 없다면 다음 인덱스로 간다.
 * 3. 배열의 마지막인지 확인한다. 마지막이 아니라면 2번과정을 반복한다.
 * 4. 끝까지 찾지 못했다면 NULL 을 반환한다.
 * 
 * 시간 / 공간 복잡도
 * - O(n)
 */

const array = [10, 20, 40, 60, 78, 90, 15];
const stringArray = ['roach', 'nick', 'rockpell', 'henry', 'shwan', 'juan', 'tei', '요한']

function linearSearch<T> (array: T[], serachValue: T) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === serachValue) {
            return i;
        }
    }
    return 'NOT FOUND';
}

console.log(linearSearch(array, 20))
console.log(linearSearch(stringArray, 'roach'))