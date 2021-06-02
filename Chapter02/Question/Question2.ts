// 문제 2.1-2

const B : number[] = [31, 41, 59, 26, 41, 58];


const get = (array: number[], order: 'DESC' | 'ASC') => {
    for(let i = 1; i < array.length; i++) {
        let curValue = array[i];
        let befIdx = i - 1;
        while (befIdx >= 0 && (order === 'DESC') ? array[befIdx] > curValue : array[befIdx] < curValue) {
            array[befIdx+1] = array[befIdx];
            befIdx -= 1;
            array[befIdx+1] = curValue;
        }
    }
    return array;
}

console.log(get(B, 'ASC'));