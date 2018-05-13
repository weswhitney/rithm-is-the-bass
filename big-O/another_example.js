function squareAndDouble(arr) {
    const tempArr = arr.map((el) => {
      return el * el;
    });
    return tempArr.map((el) => {
      return 2 * el;
    });
}