const A : number[] = [31, 41, 59, 26, 41, 58];

/**
 * 1. 배열이 주어지면 2번째 자리수부터 앞자리와 크기를 비교한다.
 * 2. 앞자리 보다 작다면 앞으로 이동하며, 뒤로 밀려난다.
 *      - 앞자리는 언제든 값이 대입될 수 있다. 따라서 값을 tmp 에 저장하며 진행해야 한다.
 * 3. 앞자리가 만약 나보다 크다면 다음 자리와 비교한다.
 * 4. 이동할때 까지 2~3를 반복한다.
 * 5. 마지막까지 왔을때도 없다면 반복을 종료한다.
 * 6. 반복을 종료하고 아직까지 탐색하지 않은 숫자가 남아있다면 2부터 반복한다. 없다면 프로그램을 종료한다.
 */

const answer = (array: number[]) => {
    for(let i = 1; i < array.length; i++) {
        let curValue = array[i];
        let befIdx = i - 1;
        while (befIdx >= 0 && array[befIdx] > curValue) {
            array[befIdx+1] = array[befIdx];
            befIdx -= 1;
            array[befIdx+1] = curValue;
        }
    }
    return array;
}

console.log(answer(A));