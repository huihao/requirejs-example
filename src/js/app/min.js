define(['./operation'], function(operation) {
    return function(a, b) {
        return a + operation.min + b + operation.tip + (a - b);
    }
})
