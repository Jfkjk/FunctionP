
function add(x,y){
    return x + y;
};
document.write(add(2,4));
function multiply(x,y){
    let sum = 0;
    for (let i = 0 ; i< y;i++){
        sum =add(x,sum);
    }
    return sum;
}
document.write("<br/>");
document.write(multiply(6,8));
function power(x,y){
    let sum = 1;
    for(let i =0; i< y;i++){
        sum = multiply(x,sum);
 }
return sum;
}
document.write("<br/>");
document.write(power(2,8));
function Factorial(y){
    let sum=1;
    for(let i=1;i<=y;i++){
        sum=multiply(i,sum);
    }
    return sum;
}
document.write("<br/>");
document.write(Factorial(4,4));
function fibonacci(y){
    let fib= [0,1]
    for(let i=1;i<=y;i++){
        fib.push(add(fib[i],fib[add(i,-1)]));
}
    return fib[add(y,-1)];
}
document.write("<br/>");
document.write(fibonacci(8));