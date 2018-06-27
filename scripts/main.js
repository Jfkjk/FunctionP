
function add(x,y){
    return x + y;
};
document.write(add(2,4));
function multiply(x,y){
    let sum = 0;
    for (let i = 0 ; i< y;i++){
        add(x,sum);
        sum = sum + x;
    }
    return sum;
}
document.write("<br/>");
document.write(multiply(6,8));
function power(x,y){
    let sum = 1;
    for(let i =0; i< y;i++){
        add(x,sum);
        sum = sum * x;
 }
return sum;
}
document.write("<br/>");
document.write(power(2,8));
function Factorial(x,y){
    let sum = 1
    for(let i=0;i<y;i++){
        add(x,sum);
        sum = x*(x-1)*(x-2)*1;
    }
    return sum;
}
document.write("<br/>");
document.write(Factorial(4,4));
function fibonacci(y){
    var first=0,next=1,second=1;
    for(var i=2;i<=y;i++){
        next=first+second;
        second=first;
        first=next;
    }
    return next;
}
document.write("<br/>");
document.write(fibonacci(8));