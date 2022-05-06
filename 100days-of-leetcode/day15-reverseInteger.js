// SOLUTION 1: 
var reverse = function(x) {
    let num;
    let arr = x.toString().split('');
    if(arr[0] === '-') {
        arr.shift(0);
        arr.reverse().unshift('-')
        num = Number(arr.join(''));
    } else num = arr.reverse().join('');
    if(!x || num > 2**31-1 || num < -(2**31)) return 0;
    else return num; 
};

// SOLUTION 2:
const reverse = n => (n < 0 ? -1 : 1) * +("" + Math.abs(n)).split``.reverse().join``;


//SOLUTION 3:
const reverse = function(x){
    let revNum = 0, lastDigit = 0;
    while (x!==0) {
        lastDigit = x % 10; 
        x = parseInt(x/10); 
        revNum = revNum * 10 + lastDigit;
        if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
    }
    return revNum
}