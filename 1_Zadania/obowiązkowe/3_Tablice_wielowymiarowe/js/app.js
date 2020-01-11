//3.0

function checkArray(arr) {
    const helperArray = [];
    for (let i = 0; i < arr.length; i++) {
        const subArray = arr[i]
        for (let j = 0; j < subArray.length; j++) {
            if (subArray[j] % 2 == 0) {
                if (subArray[j + 1] % 2 == 0) {
                    helperArray.push("true")
                }
            } else {
                helperArray.push("false")
            }
        }
    };
    return helperArray;
}

//3.1

// 1.
task1Array[3][2]
// 2.
task1Array[2].length
// 3.
task1Array[4][2]

//3.2

// 1.

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i])
}

// 2.

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length)
}

// 3.


for (let i = 0; i < task2Array.length; i++) {
    const helper = task2Array[i];
    for (let j = 0; j < helper.length; j++) {
        console.log(helper[j])
    }
}

//3.3


function print2DArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].map(item => {
            console.log(item)
        })
    }
}

//3.4

function createArray() {
    const arr = [];
    arr.push(['10', '5'], ['15', '20']);
    return arr;
}

function print2DArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].map(item => {
            console.log(item)
        })
    }
}
print2DArray(createArray())

//3.5

function create2DArray(rows, columns) {
    const arr = [];
    let elemCounter = 1;
    for (let i = 0; i < rows; i++) {
        arr.push([]);
        for (let j = 0; j < columns; j++) {
            arr[i].push(elemCounter)
            elemCounter++;
        }
    }
    console.log(arr)
}
