const compose = function(functions) {

 return function(x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
 }
}

const result = compose([x => x + 1, x => 2 * x])(4)
console.log(result)