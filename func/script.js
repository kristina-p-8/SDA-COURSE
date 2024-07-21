function algorithm(a,b){
    var x=1;
    var result=1;
    while(x<=b) {
        result*=a
        x++
    }
    return result;
}
console.log(algorithm(2, 2));
console.log(algorithm(5, 5));
console.log(algorithm(4, 0));
console.log(algorithm(2, 1));
