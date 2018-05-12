function testPerformance(callback, arr) {
    var t0 = performance.now();
    callback(arr);
    var t1 = performance.now();
    return t1 - t0;
}