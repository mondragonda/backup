const array = [10, 2, 20, 4];
const numberOcurrenceMap = new Map();

const duplicateFn = (element) => {
    if (numberOcurrenceMap.has(element) === false) {
        numberOcurrenceMap.set(element, 1);
    } else {
        numberOcurrenceMap.set(element, numberOcurrenceMap.get(element) + 1);
    }

};

array.forEach(duplicateFn);

const insertionSort = (list) => {
    list.forEach((element, index) => {
        let lastSortedIndex = index - 1;
        while (list[lastSortedIndex] > element) {
            list[lastSortedIndex + 1] = list[lastSortedIndex];
            list[lastSortedIndex] = element;
            lastSortedIndex -= 1;
        }
    })
    return list;
};


const reverseString = (string) => {

    string = string.split('');

    const midpoint = Math.round((string.length - 1) / 2);
    let leftIndex = 0;
    let rightIndex = string.length - 1;

    while (leftIndex < midpoint || rightIndex > midpoint) {
        const left = string[leftIndex];
        const right = string[rightIndex];
        string[leftIndex] = right;
        string[rightIndex] = left;
        leftIndex += 1;
        rightIndex -= 1;
    }

    return string.join('');
}

// const reversed = reverseString("diegossssssalan");
// console.log(reversed);

const factorial = (n) => {
    if (n <= 0){
        throw Error("invalid argument")
    }
    if (n === 1) {
        return n;
    }

    const nMinusone = factorial(n - 1); 

    return n * nMinusone;
}

//console.log(factorial(5));
// mergeSort(4, 9, 762, 10, 5, 7)
// mergeSort(2, 6, 8, 2, 3, 9, 1)
// mergeSort(2, 6, 8, 2, 3, 9, 1, 4, 9, 762, 10, 5, 7)

// mergeSort(6, 8);
// mergeSort(10, 2)
// mergesort(10, 2, 6, 8)


const mergeSort = (list) => {    

    const listSize = list.length;

    if (listSize <= 1) {
        return list;
    }

    const midpoint = Math.round(listSize / 2);

    let leftSlice = mergeSort(list.slice(0, midpoint));
    let rightSlice = mergeSort(list.slice(midpoint));  

    console.log("called left slice", leftSlice);
    console.log("called right slice", rightSlice);
   
    const sortedList = () => {
        const sorted = [];
        while (leftSlice.length && rightSlice.length) {
            if (leftSlice[0] < rightSlice[0]) {
                sorted.push(leftSlice.shift())
            } else {
                sorted.push(rightSlice.shift())
            }
        }
        return sorted.concat(leftSlice, rightSlice);
    }
    
    const result = sortedList();

    console.log("intermediate result: ", result);

    return result;
}

// initial:  [ 10, 2, 20, 4 ]
// called left slice [ 10 ]
// called right slice [ 2 ]
// intermediate result:  [ 2, 10 ] = mergeSort(10, 2, 20, 4)
// called left slice [ 20 ]
// called right slice [ 4 ]
// intermediate result:  [ 4, 20 ] = 
// called left slice [ 2, 10 ]
// called right slice [ 4, 20 ]
// intermediate result:  [ 2, 4, 10, 20 ]


// console.time("insertion sort");
// const unsorted = Array.from(numberOcurrenceMap.keys());
// let result = insertionSort(unsorted);
// console.timeEnd("insertion sort");
// console.log(result)

// console.time("quick sort");
// sortedArray.forEach(quicksortFn); 
// console.timeEnd("quick sort");

// console.log(numberOcurrenceMap);
// console.log(sortedArray);
//console.time("merge sort");
console.log("initial: ", array)
mergeSort(array);
//console.timeEnd("merge sort");
//console.log(result)


// function func1() {
//     setTimeout(() => {
//         console.log(x);
//         console.log(y);
//     }, 3000);

//     var x = 2;
//     let y = 12;
// };

// console.log(x);


// func1()







 