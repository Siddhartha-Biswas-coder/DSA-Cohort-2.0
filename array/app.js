function calculateSumAndMean(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  return [sum, (sum / n).toFixed(1)];
}

function findGreatestElementAndIndex(arr) {
  let maxElement = arr[0];
  let maxElementIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
      maxElementIndex = i;
    }
  }
  return [maxElement, maxElementIndex];
}

function findSecondGreatestElement(arr) {
  let maxElement, secondMaxElement;

  if (arr[0] >= arr[1]) {
    maxElement = arr[0];
    secondMaxElement = arr[1];
  } else {
    maxElement = arr[1];
    secondMaxElement = arr[0];
  }

  for (let k = 2; k < arr.length; k++) {
    if (arr[k] > maxElement) {
      secondMaxElement = maxElement;
      maxElement = arr[k];
    } else if (arr[k] > secondMaxElement) {
      secondMaxElement = arr[k];
    }
  }

  return secondMaxElement;
}

function findSecondGreatestElement_optimised(arr) {
  let maxElement = -Infinity;
  let secondMaxElement = -Infinity;

  for (let num of arr) {
    if (num > maxElement) {
      secondMaxElement = maxElement;
      maxElement = num;
    } else if (num > secondMaxElement && num !== maxElement) {
      secondMaxElement = num;
    }
  }

  return secondMaxElement;
}


function copyAndReverseArray(arr) {
    let reverse = new Array(arr.length)
    let j = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        reverse[i] = arr[j]
        j--
    }
    return reverse
}

function reverseArrayInPlace(arr) {

    const swap = (arr,i,j) => {
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
    }

    let i = 0, j = arr.length - 1
    while (j > i) {
        swap(arr, i, j)
        i++
        j--
    }
    return arr
}

function leftRotateByOne(arr) {
    let first = arr[0]

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }

    arr[arr.length - 1] = first

    return arr
}

function moveZerosToEnd(arr) {
    let i = 0;
    let j = 0;
    while (i < arr.length) {
        while (arr[i] === 0 && i < arr.length) {
            i++
        }
        if (i < arr.length && arr[i] === 1) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j++;
        }
    }
    return arr

}

class Solution {

    moveZeros(arr) {

        let j = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
                j++
            }
        }
        return arr

    }

}

class Solution {
  /**
   * @param {bigint[]} arr - array of integers as BigInt
   * @return {bigint} sum of absolute differences across all unordered pairs
   */
  sumOfAbsDiff(arr) {
    // Write your code here
    let sum = 0n
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let dif = arr[i] - arr[j]
        if (dif < 0n) dif = -dif
        sum += dif
      }
    }
    return sum;
  }
}

class Solution {
  /**
   * @param {bigint[]} arr - array of integers as BigInt
   * @return {bigint} sum of absolute differences across all unordered pairs
   */
  sumOfAbsDiff(arr) {
    // Write your code here
    let sum = 0n
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let dif = arr[i] - arr[j]
        if (dif < 0n) dif = -dif
        sum += dif
      }
    }
    return sum;
  }
}

class Solution {
  /**
   * @param {number[]} arr
   * @returns {number[]} updated array
   */
  multiplyPrevNext(arr) {
    if (arr.length === 1) return arr
    let n = arr.length
    let prev = arr[0]
    arr[0] = arr[0] * arr[1]
    for (let i = 1; i < n - 1; i++) {
      let curr = arr[i]
      arr[i] = prev * arr[i + 1]
      prev = curr
    }

    arr[n - 1] = prev * arr[n - 1]
    return arr;
  }
}

class Solution {
    minAddForBalance(arr) {
        let sum1 = 0
        let sum2 = 0
        let i = 0;
        let j = arr.length - 1
        while (i < j) {
            sum1 += arr[i++]
            sum2 += arr[j--]
        }

        let ans = sum1 - sum2
        return (ans >= 0) ? ans : -ans
    }
}

class Solution {

    sortHalves(arr) {
        let n = arr.length
        let mid = Math.floor(n / 2)
        for (let i = 0; i < mid - 1; i++) {
            for (let j = i + 1; j < mid; j++) {
                if (arr[i] > arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]
                }
            }
        }
        for (let i = mid; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (arr[i] < arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]
                }
            }
        }
        return arr

    }

}