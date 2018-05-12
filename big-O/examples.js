// brute force

// my solution
function doubleArray(arr) {
    var doubledArr = [];
    arr.forEach(function(element) {
        doubledArr.push(element*2);
    });
    return doubledArr;
}

// intructors solution with number of instructions per line
function double(arr) {
    const newArray = new Array(arr.length);   // n instructions
    for (let i = 0; i < arr.length; i++) {    // 2 instructions
      newArray[i] = arr[i] * 2;               // 1 instruction
    }
    return newArray;                          // 1 instruction
  }

// with the map function
  function double(arr) {
    return arr.map((element) => element * 2);
  }